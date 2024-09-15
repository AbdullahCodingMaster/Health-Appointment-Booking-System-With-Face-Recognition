import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-around items-center text-white">
        <li className="hover:text-blue-300 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-300 transition duration-300">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-blue-300 transition duration-300">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-blue-300 transition duration-300">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="hover:text-blue-300 transition duration-300">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
