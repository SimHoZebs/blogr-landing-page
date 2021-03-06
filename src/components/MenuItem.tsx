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

  return (
    <div className="<md:(w-full) flex items-center flex-col">
      <ButtonBase
        className="flex items-center gap-x-2 max-w-max"
        onClick={() => toggleMenu(props.index)}
      >
        {props.children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className={
            "transform duration-400" +
            (props.openIndex === props.index ? " rotate-180" : "")
          }
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity=".75"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </ButtonBase>

      <div
        className={
          "<md:(w-full bg-gray-200) items-center md:(absolute mt-7 shadow-2xl) bg-light-50 gap-y-7 flex flex-col rounded-md max-h-0   duration-400 overflow-hidden px-6" +
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
