import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <nav>
      <div className="flex justify-end items-center bg-[#1C4670] w-full h-[44px]">
        <div className="text-white flex flex-row gap-3 md:mr-20  ">
          <div className="flex items-center gap-2">
            <MdEmail />
            <p>www.registerkaro.in</p>
            <div className="w-[1px] h-[28px] bg-white border-none "> </div>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail />
            <p>www.registerkaro.in</p>
            <div className="w-[1px] h-[28px] bg-white border-none "> </div>
          </div>

          <div className="flex items-center gap-2">
            <FaInstagramSquare />
            <FaFacebook />
            <IoLogoTwitter />
            <FaPinterest />
          </div>
        </div>
      </div>

      {/* second header */}
      <div className=" w-full my-2 lg:gap-x-80  flex items-center justify-around    ">
        <img src={logo} alt="" className=" w-16 h-5 md:size-auto  " />

        <div>
          <div className="flex gap-3  md:gap-4 items-center text-[8px] md:text-xs xl:text-lg ">
            <a href="">Home</a>
            <a href="" className="flex items-center">
              Our Services <IoIosArrowDown />{" "}
            </a>
            <a href="">Blog</a>
            <a href="">Contact Us </a>
            <a href="">About Us</a>
            <CiSearch />
            <button className="bg-[#FFA229] rounded-md text-white text-xs md:text-sm h-[30px] md:h-[42px] px-2 w-auto">
              Talk An Expert
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
