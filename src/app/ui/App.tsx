import './styles/index.scss';
import { Suspense } from 'react';

import { AppRouter } from './providers';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
