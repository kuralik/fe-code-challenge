import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loading from '@/components/Loading';

const SymbolsViewPage = lazy(() => import('@/components/SymbolsView'));
const ProfileViewPage = lazy(() => import('@/components/ProfileView'));
const StatementsViewPage = lazy(() => import('@/components/StatementsView'));

const routes = [
  { path: '/', element: <SymbolsViewPage />, index: true },
  { path: '/profile', element: <ProfileViewPage /> },
  { path: '/statements', element: <StatementsViewPage /> }
];

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, element, index }) => (
        <Route
          key={path}
          path={path}
          index={index}
          element={<Suspense fallback={<Loading />}>{element}</Suspense>}
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
