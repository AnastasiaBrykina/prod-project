import './styles/index.scss';
import { Link } from 'react-router-dom';

import { AppRouter } from './providers';
import { classNames, useTheme } from 'shared/lib';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Нас</Link>
      <AppRouter />
    </div>
  );
};
