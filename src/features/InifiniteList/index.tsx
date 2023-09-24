import React from 'react';
import ItemView from '../../entities/ItemView';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { InifiniteListProps } from './types/inifiniteListProps.interface';
import AutoSizer from 'react-virtualized-auto-sizer';

const InifiniteList = (props: InifiniteListProps) => {
  const fEmpty = () => {
    // console.log('hello');
  };

  const itemCount = props.hasNextPage ? props.items.length + 1 : props.items.length;
  const loadMoreItems = props.isNextPageLoading ? fEmpty : props.loadNextPage;
  const isItemLoaded = (index: number) =>
    !props.hasNextPage || index < props.items.length;

  return (
    <div className="list-height">
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            threshold={2}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                height={height}
                itemCount={itemCount}
                itemSize={100}
                width={width}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {({ index, style }) => {
                  const itemData = props.items ? props.items[index] : null;
                  return (
                    <ItemView
                      id={itemData?.id || 0}
                      userId={itemData?.userId || 0}
                      title={itemData?.title || ''}
                      body={itemData?.body || ''}
                      style={style}
                    />
                  );
                }}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

export default InifiniteList;
