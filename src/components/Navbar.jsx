import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  // nav items
  const navItems = [
    { id: 0, path: "/", link: "Home" },
    { id: 1, path: "/blogs", link: "Blogs" },
    { id: 2, path: "/services", link: "Services" },
    { id: 3, path: "/contact", link: "Contact" },
    { id: 4, path: "/about", link: "About" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          Design<span className="text-orange-400">DK</span>
        </a>

        {/* nav items for lg devices*/}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ id, path, link }) => (
            <li key={id}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="lg:flex gap-6 items-center hidden">
          <a href="/" className="hover:text-orange-400">
            <FaFacebook size={25} />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaTwitter size={25} />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaInstagram size={25} />
          </a>
          <button className="bg-orange-400 px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-orange-400 transition-all duration-200 ease-in">
            Log In
          </button>
        </div>

        {/* mobile menu */}
        <div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
