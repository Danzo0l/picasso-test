import React from 'react';
import { Routing } from '../pages';
import { withProviders } from './providers';
import Navbar from '../entities/Navbar';
import './styles/index.scss';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <div className="app h-full">
      <Navbar />
      <Routing />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withProviders(App);
