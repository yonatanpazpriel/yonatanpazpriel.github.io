import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './Main';
import Resume from './Resume';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]); 