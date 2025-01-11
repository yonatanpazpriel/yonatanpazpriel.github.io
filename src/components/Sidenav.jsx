import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <>
      <Link to="/" className="...">Home</Link>
      <Link to="/resume" className="...">Resume</Link>
      <Link to="/contact" className="...">Contact</Link>
    </>
  );
} 