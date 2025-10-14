import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/notFound';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
