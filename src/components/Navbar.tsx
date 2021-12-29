import { useState } from "react";
import Menu from "./Menu";

interface Props {
  menu: { name: string; links: string[] }[];
}

function Navbar(props: Props) {
  const [menuBlockOpen, setMenuBlockOpen] = useState(false);

  return (
    <nav
      className="flex
      <md:flex-wrap
      md:(gap-x-16 justify-between) mx-6 pt-14"
    >
      <div className="flex justify-between <md:w-full">
        <div className="font-semibold text-4xl">Blogr</div>

        <input
          className="md:hidden"
          type="image"
          src="icon-hamburger.svg"
          alt=""
          onClick={() => setMenuBlockOpen((prev) => !prev)}
        />
      </div>
      <Menu menu={props.menu} menuBlockOpen={menuBlockOpen} />
    </nav>
  );
}

export default Navbar;
