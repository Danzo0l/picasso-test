import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ListPage = lazy(() => import('./list'));
const DetailsPage = lazy(() => import('./details/'));
const NotFound = lazy(() => import('./notFound/'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/details/:taskId" element={<DetailsPage />} />
      <Route path="/details" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
