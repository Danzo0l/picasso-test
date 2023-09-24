import React from 'react';
import { Link } from 'react-router-dom';

const CloseDetails = () => {
  return (
    <div className="button text-yellow-500 text-xl mx-1 my-2 hover:text-sky-400">
      <Link to="/">Close</Link>
    </div>
  );
};

export default CloseDetails;
