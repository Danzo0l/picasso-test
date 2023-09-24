import React from 'react';
import CloseDetails from '../../features/CloseDetails';
import { useGetPostDetailQuery } from './api/postDetailApi';
import { DetailViewProps } from './types/detailViewProps.interface';
import Loader from '../Loader';

const DetailView = (props: DetailViewProps) => {
  const { data, isLoading } = useGetPostDetailQuery(props.id);

  if (isLoading) return <Loader />;

  return (
    <div className="w-auto border-b-2 overflow-hidden">
      <section className="w-full border-b-2 bg-gray-200">
        <h2 className="text-lg text-ellipsis overflow-hidden whitespace-nowrap p-2">
          <span className="mr-10">{data?.id}</span>
          <span title={data?.title}>{data?.title}</span>
        </h2>
      </section>
      <p className="my-3 p-2 border-b-2">{data?.body}</p>
      <CloseDetails />
    </div>
  );
};

export default DetailView;
