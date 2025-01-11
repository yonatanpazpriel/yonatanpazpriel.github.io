import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Main from './components/Main';
import Resume from './components/Resume';
import Contact from './components/Contact';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 