import { SiCoffeescript } from "react-icons/si";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import Button from "./ui/Button";
import { Link } from "react-scroll";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <header className="flex justify-between p-5 px-5 lg:px-32  items-center bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px-10px_rgb(0,0,0,0.2)] fixed z-10 w-full">
      <div className="flex gap-2 items-center">
        <SiCoffeescript />
        <h1 className="font-semibold text-lg">CafePulse</h1>
      </div>
      <nav className="hidden md:flex gap-8 text-lg font-medium ">
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="home"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Home
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left  transition-transform group-hover:scale-x-100 duration-300"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="menu"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Menu
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="about"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          About Us
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="products"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Products
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="reviews"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Reviews
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
      </nav>
      <Button className="hidden lg:flex">Login</Button>
      <div className="md:hidden flex items-center">
        {menu ? (
          <AiOutlineClose size={25} onClick={handleMenuChange} />
        ) : (
          <AiOutlineMenuFold size={25} onClick={handleMenuChange} />
        )}
      </div>

      <nav
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center w-full h-fit pt-8 pb-4 gap-8 transition-transform duration-300`}
      >
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="home"
          onClick={closeMenu}
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Home
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="menu"
          onClick={closeMenu}
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Menu
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeMenu}
          to="about"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          About Us
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          onClick={closeMenu}
          duration={500}
          to="products"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Products
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeMenu}
          to="reviews"
          className="group relative cursor-pointer hover:text-brightColor"
        >
          Reviews
          <span className="absolute inset-x-0 h-0.5 bg-black bottom-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
        <div>
          <Button className="">Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
