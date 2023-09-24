import React from 'react';
import { useParams } from 'react-router-dom';
import DetailView from '../../entities/DetailView';

const Details = () => {
  const { taskId } = useParams();

  return (
    <div className="page">
      <DetailView id={Number(taskId) || -1} />
    </div>
  );
};

export default Details;
