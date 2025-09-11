import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
          <Route path="/about" element={<AboutPageAsync />}></Route>
          <Route path="/" element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
