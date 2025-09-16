import './styles/index.scss';

import { AppRouter } from './providers';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/navbar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
