import logo from "../images/header/Logo.png";
import icons from "../images/header/Icons.png";
import icons2 from "../images/header/Icons2.png";
import hamburger from "../images/header/solar_hamburger-menu-linear.png";
import { HeaderStrip } from "./HeaderStrip";

const Header = () => {
  return (
    <div>
      <HeaderStrip />
      <div className="md:h-[188px] text-center h-[55px] w-full md:border-b-[1px] border-b-[E5E5E5] bg-[rgb(255,255,255)]">
        <div className="flex items-center ">
          <img src={hamburger} className="md:hidden ml-4 w-4 mt-10 " />
          <img
            className="ml-2 w-5 md:w-9 md:ml-8 mt-10 "
            src={logo}
            alt="logo"
          />
          <h1 className="mt-9 font: Inter md:ml-[35rem] ml-[93px] font-extrabold md:text-4xl text-xl text-[#000000]">
            LOGO
          </h1>
          <img src={icons} className="mt-10 md:ml-[23rem] hidden md:block" />
          <img src={icons2} className="mt-10 ml-14 md:hidden block" />
        </div>

        <div className=" mt-16 hidden md:block">
          <button
            className="text-xl font-bold leading-6 tracking-[1px] text-left;
  font-family: Simplon Norm mx-7"
          >
            SHOP
          </button>
          <button
            className="text-xl font-bold leading-6 tracking-[1px] text-left;
  font-family: Simplon Norm mx-7"
          >
            SKILLS
          </button>
          <button
            className="text-xl font-bold leading-6 tracking-[1px] text-left;
  font-family: Simplon Norm mx-7"
          >
            STORIES
          </button>
          <button
            className="text-xl font-bold leading-6 tracking-[1px] text-left;
  font-family: Simplon Norm mx-7"
          >
            ABOUT
          </button>
          <button
            className="text-xl font-bold leading-6 tracking-[1px] text-left;
  font-family: Simplon Norm mx-7"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};



export default Header;
