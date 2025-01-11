import Sidenav from './components/Sidenav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Sidenav />
      <Outlet />
    </div>
  );
}

export default App; 