/* eslint-disable @next/next/no-img-element */
import ButtonBase from "./ButtonBase";

interface Props {
  openIndex: number | null;
  links: string[];
  index: number;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
  children: React.ReactNode;
}

const MenuItem = (props: Props) => {
  function toggleMenu(index: number) {
    props.setOpenIndex(props.openIndex === index ? null : index);
  }
  const iconArrowStyle =
    "duration-500" + (props.openIndex === props.index ? " rotate-180" : "");

  return (
    <div className="<md:(w-full) flex items-center flex-col">
      <ButtonBase
        className="flex items-center gap-x-2 max-w-max"
        onClick={() => toggleMenu(props.index)}
      >
        {props.children}
        {/**I could dynamically change the source but that requires listening to window size*/}
        <img
          className={"<md:hidden " + iconArrowStyle}
          src="/icon-arrow-light.svg"
          alt=""
        />

        <img
          className={"md:hidden " + iconArrowStyle}
          src="/icon-arrow-dark.svg"
          alt=""
        />
      </ButtonBase>

      <div
        className={
          "<md:(w-full shadow-none bg-gray-200) items-center md:(absolute mt-7) bg-light-50 shadow-2xl gap-y-7 flex flex-col rounded-md max-h-0   duration-500 overflow-hidden px-6" +
          (props.openIndex === props.index ? " py-6 max-h-100" : "")
        }
      >
        {props.links.map((link, index) => (
          <ButtonBase
            key={index}
            className="flex items-center font-medium text-blue-gray-600 hover:font-semibold"
          >
            {link}
          </ButtonBase>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
