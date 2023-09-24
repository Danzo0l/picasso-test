import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useGetPostsQuery } from './api/postsApi';
import { DataItem } from './types/data.interface';
import InifiniteList from '../../features/InifiniteList';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [items, setItems] = useState<DataItem[]>([]);
  const refItems = useRef<number[]>([]);

  const pageSize = 10;

  const { data, isLoading, hasNextPage } = useGetPostsQuery(currentPage, {
    selectFromResult: (data) => {
      return {
        ...data,
        data: data.data?.data.length ? data.data.data : [],
        hasNextPage: Number(data.data?.count) - pageSize * currentPage > 0,
      };
    },
  });

  useEffect(() => {
    if (data.length) {
      setItems((prev: DataItem[]) => [...prev, ...data]);
      refItems.current?.push(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const loadNextPage = () => {
    if (!isLoading && hasNextPage) {
      setIsNextPageLoading(true);
      setCurrentPage((prev) => prev + 1);
      setIsNextPageLoading(false);
    }
  };

  return (
    <div className="m-auto">
      <InifiniteList
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        items={items}
        loadNextPage={loadNextPage}
      />
    </div>
  );
};

export default List;
