import React from 'react';
import { Link } from 'react-router-dom';
import { OpenDetailsProps } from './types/openDetailsProps.interface';

const OpenDetails = (props: OpenDetailsProps) => {
  return (
    <Link
      className="text-green-500 m-1 text-lg hover:text-sky-400"
      to={'/details/' + props.id}
    >
      <p>Details</p>
    </Link>
  );
};

export default OpenDetails;
