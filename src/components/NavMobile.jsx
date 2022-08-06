// import icons
import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer "
      />
      <ul className="flex flex-col items-center space-y-8 font-secondary h-full justify-center">
        <li className="text-lg capitalize">
          <a href="##">Home</a>
        </li>
        <li className="text-lg capitalize">
          <a href="##">Company</a>
        </li>
        <li className="text-lg capitalize">
          <a href="##">Features</a>
        </li>
        <li>
          <a className="btn" href="##">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
