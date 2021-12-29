/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface Props {
  menu: { name: string; links: string[] }[];
  menuBlockOpen: boolean;
}

function Menu(props: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleMenu(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="flex items-center md:(justify-between w-full) <md:(flex-col w-90vw)">
      <div className="flex gap-x-7 <md:(absolute flex-col gap-y-6 bg-light-50 text-blue-gray-600 w-90vw drop-shadow-2xl rounded-md items-center overflow-hidden) md:items-center">
        {props.menu.map((item, index) => (
          <div key={index} className="flex flex-col">
            <button
              className="flex items-center gap-x-2"
              onClick={() => toggleMenu(index)}
            >
              {item.name}
              <img
                className={
                  "<md:hidden transform transition-all duration-400" +
                  (openIndex === index ? " rotate-180" : "")
                }
                src="/icon-arrow-light.svg"
                alt=""
              />

              <img
                className={
                  "md:hidden transform transition-all duration-400" +
                  (openIndex === index ? " rotate-180" : "")
                }
                src="/icon-arrow-dark.svg"
                alt=""
              />
            </button>
            <div
              className={
                "md:(absolute mt-7) gap-y-7 flex flex-col bg-light-50 rounded-lg max-h-0 transform transition-all duration-400 overflow-hidden px-6 shadow-2xl" +
                (openIndex === index ? " py-6 max-h-1/2" : "")
              }
            >
              {item.links.map((link, index) => (
                <button
                  key={index}
                  className="flex items-center font-medium  text-blue-gray-600 hover:font-semibold"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex <md:(flex-col) gap-x-10">
        <button>Login</button>
        <button className="py-4 px-10 bg-light-50 font-semibold text-red-500 rounded-full shadow-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Menu;
