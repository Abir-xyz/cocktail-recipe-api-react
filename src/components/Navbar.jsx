import '../css/nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='navbar-center'>
        <div className='nav-brand'>
          <Link to='/' className='nav-link brand'>
            Bittersweet Boulevard
          </Link>
        </div>
        <div className='nav-links'>
          <Link to='/' className='nav-link navbar-link'>
            Home
          </Link>
          <Link to='about' className='nav-link navbar-link'>
            About
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
