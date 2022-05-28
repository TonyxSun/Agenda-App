import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Agenda :)</h1>
        <div className="links">
          <Link to="/Agenda/">Home</Link>
          <Link to="/Agenda/create">New topic</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
