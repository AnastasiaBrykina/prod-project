import { routesConfig } from '../../config/routesConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <p>
          <i>Loading...</i>
        </p>
      }
    >
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
