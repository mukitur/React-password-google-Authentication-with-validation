import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../layout/MainRoot';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
    ],
  },
]);

export default router;
