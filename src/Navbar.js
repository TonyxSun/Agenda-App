import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Little Note Hub</h1>
        <div className="links">
          <Link to="/Petite-Note/">Home</Link>
          <Link to="/Petite-Note/create">New Note</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;