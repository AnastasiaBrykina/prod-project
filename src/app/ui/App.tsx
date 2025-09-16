import './styles/index.scss';

import { AppRouter } from './providers';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
