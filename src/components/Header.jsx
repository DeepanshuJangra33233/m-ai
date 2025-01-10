import { useState } from "react";
import { Cross } from "../components/common/Icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between py-[18px] px-4 bg-white">
      <div className="flex items-center gap-2">
        <img className="w-[39px]" src="/assets/images/mLogo.png" alt="logo" />
        <h1 className="text-2xl font-bold">mAI</h1>
      </div>
      <div className="hidden lg:flex items-center gap-[54px] justify-center">
        <ul className="flex lg:gap-[40px] xl:gap-[53px]">
          <li className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300">
            Home
          </li>
          <li className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300">
            Projects
          </li>
          <li className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300">
            Search Candidate
          </li>
          <li className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300">
            Reports
          </li>
          <li className="font-semibold cursor-pointer relative after:absolute after:contents-[''] after:h-[2px] after:bg-black after:w-full after:bottom-0 after:left-0 text-[22px] text-black duration-300">
            Messages
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div
          className="flex flex-col gap-[5px] cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bg-black h-[3px] w-[30px]"></span>
          <span className="bg-black h-[3px] w-[30px]"></span>
          <span className="bg-black h-[3px] w-[30px]"></span>
        </div>
        <input type="checkbox" className="toggle" />
        <img
          className="w-[35px]"
          src="/assets/images/notification.png"
          alt="logo"
        />
        <img className="w-[35px]" src="/assets/images/profile.png" alt="logo" />
      </div>
      <div
        className={`lg:hidden fixed h-screen duration-300 bg-white z-20 w-full top-0 flex items-center gap-[54px] justify-center ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <span
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <Cross />
        </span>
        <ul className="flex relative flex-col gap-[40px] items-center justify-center">
          <li
            onClick={() => setIsOpen(false)}
            className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300"
          >
            Home
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300"
          >
            Projects
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300"
          >
            Search Candidate
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="font-semibold cursor-pointer text-[#616161] text-[22px] hover:text-black duration-300"
          >
            Reports
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="font-semibold cursor-pointer text-[22px] text-black duration-300"
          >
            Messages
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
