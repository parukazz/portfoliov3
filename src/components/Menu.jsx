/* eslint-disable react/prop-types */
import { TfiClose } from "react-icons/tfi";
import { menuLinks } from "../constants";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { PiCopyrightLight } from "react-icons/pi";

const Menu = ({ onClick }) => {
  return (
    <main className="fixed inset-0 bg-primary-opacity z-50 flex justify-end">
      <div className="w-2/5 h-full bg-primary border-[1px] border-l-line px-20 py-7">
        <div className="w-full flex justify-end">
          <button
            className="typo-heading uppercase flex justify-between items-center gap-2.5 text-mini border-text-heading border-[1px] py-2.5 px-3 rounded-sm cursor-pointer group hover:bg-accent transition-base hover:border-accent hover:text-primary"
            onClick={onClick}
          >
            close
            <TfiClose />
          </button>
        </div>
        <div className="w-full mt-20">
          <ul className="uppercase font-bold text-4xl">
            {menuLinks.map((item) => (
              <li
                key={item.id}
                className="py-6 border-y-[0.5px] border-x-[1px] border-line px-10 flex justify-between items-center"
              >
                <a href={item.path}>
                  <span className="text-accent">/</span>
                  {item.label}
                </a>
                <RiCheckboxBlankCircleFill size={6} className="text-line" />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full border-[1px] border-line py-6 px-10 flex items-center justify-between">
          <a href="#">parukazziyi@gmail.com</a>
          <div className="flex items-center">
            <PiCopyrightLight />
            2025
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
