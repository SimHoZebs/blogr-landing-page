import { useState } from "react";
import MenuItem from "./MenuItem";
import ButtonBase from "./ButtonBase";

interface Props {
  menu: { name: string; links: string[] }[];
}

function Navbar(props: Props) {
  const [menuBlockOpen, setMenuBlockOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="flex <md:(flex-wrap) md:(gap-x-16 justify-between) mx-6 pt-14">
      <div className="flex justify-between <md:w-full">
        <div className="font-semibold text-4xl font-ubuntu">Blogr</div>

        <input
          className="md:hidden"
          type="image"
          src="icon-hamburger.svg"
          alt=""
          onClick={() => setMenuBlockOpen((prev) => !prev)}
        />
      </div>

      <div
        className={
          "flex items-center z-1 justify-between duration-500 w-full <md:(absolute mt-15 gap-y-6 flex-col drop-shadow-2xl rounded-md bg-light-50 overflow-hidden text-blue-gray-600 w-90vw)" +
          `${
            menuBlockOpen ? " <md:(max-h-200 py-6 shadow-lg)" : " <md:max-h-0"
          }`
        }
      >
        <div className="flex gap-x-7 items-center <md:(w-5/6 flex-col gap-y-6)">
          {props.menu.map((item, index) => (
            <MenuItem
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              key={index}
              index={index}
              links={item.links}
            >
              {item.name}
            </MenuItem>
          ))}
        </div>

        <div className="md:hidden h-px w-5/6 bg-gray-300"></div>

        <div className={"flex <md:(flex-col) gap-x-10 overflow-hidden"}>
          <ButtonBase className="<md:(py-4 px-10) font-semibold rounded-full">
            Login
          </ButtonBase>
          <ButtonBase className="py-4 px-10 bg-light-50 font-semibold text-red-500 rounded-full shadow-md duration-500 <md:(bg-gradient-to-r from-red-300 bg-red-400 mb-1 text-light-50) <md:hover:(from-red-400 bg-red-500)">
            Sign Up
          </ButtonBase>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
