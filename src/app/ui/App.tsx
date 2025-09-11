import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import { AboutPage, MainPage } from 'pages';
import { useTheme, classNames } from 'shared';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Нас</Link>
      <Suspense
        fallback={
          <p>
            <i>Loading...</i>
          </p>
        }
      >
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
