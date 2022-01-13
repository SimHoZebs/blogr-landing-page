import Article from "./Article";
import Image from "next/image";
import ArticleText from "./ArticleText";

interface Props {
  main: { title: string; desc: string }[][];
}

function Main(props: Props) {
  return (
    <section className="flex flex-col gap-y-12">
      <h2 className="text-4xl text-center font-semibold">
        Designed for the future
      </h2>

      <Article className="pl-24">
        <ArticleText paragraph={props.main[0]} />

        <div className="relative transform scale-125  translate-x-25 w-2/3">
          <Image
            src="/illustration-editor-desktop.svg"
            alt=""
            layout="responsive"
            width={925}
            height={882}
          />
        </div>
      </Article>

      <Article className="pr-24 text-light-50">
        <div className="from-blue-gray-800 bg-gradient-to-br to-blue-gray-700 text-light-50 rounded-bl-9xl rounded-tr-9xl absolute h-2/3 w-full overflow-hidden ">
          <div className="transform -translate-x-70 -translate-y-160">
            <Image
              src="/bg-pattern-circles.svg"
              alt=""
              layout="responsive"
              width={1014}
              height={1018}
            />
          </div>
        </div>
        <div className="relative flex w-3/5">
          <Image
            src="/illustration-phones.svg"
            alt=""
            width={552}
            height={579}
          />
        </div>

        <ArticleText paragraph={props.main[1]} />
      </Article>

      <Article className="pr-24">
        <div className="relative transform scale-125 -translate-x-25 w-2/3">
          <Image
            src="/illustration-laptop-desktop.svg"
            alt=""
            layout="responsive"
            width={974}
            height={786}
          />
        </div>
        <ArticleText paragraph={props.main[2]} />
      </Article>
    </section>
  );
}

export default Main;
