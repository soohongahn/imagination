import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <div>
          <span>imaginations</span>
        </div>
      </Link>
      <nav className='navigation'>
        {/* <NavLink to="/" className="link" end>Home</NavLink> */}
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/price" className="link">Price</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </nav>
    </header>
  )
}
