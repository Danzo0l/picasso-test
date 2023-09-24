import React from 'react';
import OpenDetails from '../../features/OpenDetails';
import { ItemViewProps } from './types/itemView.interface';

const ItemView = (props: ItemViewProps) => {
  return (
    <div
      style={props.style}
      className="w-auto border-solid border-b-2 my-2 overflow-hidden"
    >
      <section className="w-full flex justify-between">
        <h4 className="text-lg text-ellipsis overflow-hidden whitespace-nowrap p-2">
          {props.id + ' ' + props.title}
        </h4>
        <OpenDetails id={props.id} />
      </section>

      <p className="text-ellipsis overflow-hidden whitespace-nowrap mt-1 p-2">
        {props.body}
      </p>
    </div>
  );
};

export default ItemView;
