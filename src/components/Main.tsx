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

      <Article className="md:pl-24 flex-col-reverse ">
        <ArticleText paragraph={props.main[0]} />

        <div className="relative transform md:(scale-125 translate-x-25 w-2/3) w-full">
          <div className="<md:hidden">
            <Image
              src="/illustration-editor-desktop.svg"
              alt=""
              layout="responsive"
              width={925}
              height={882}
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/illustration-editor-mobile.svg"
              alt=""
              layout="responsive"
              width={406}
              height={331}
            />
          </div>
        </div>
      </Article>

      <Article className="md:pr-24 text-light-50 flex-col">
        <div className="from-blue-gray-800 bg-gradient-to-br to-blue-gray-700 text-light-50 rounded-bl-9xl rounded-tr-9xl absolute h-2/3 w-full overflow-hidden <md:(transform translate-y-35)">
          <div className="transform md:(-translate-x-70 -translate-y-160) -translate-y-40 scale-160">
            <Image
              src="/bg-pattern-circles.svg"
              alt=""
              layout="responsive"
              width={1014}
              height={1018}
            />
          </div>
        </div>
        <div className="flex md:w-3/5 w-full">
          <Image
            src="/illustration-phones.svg"
            alt=""
            width={552}
            height={579}
          />
        </div>

        <ArticleText paragraph={props.main[1]} />
      </Article>

      <Article className="md:pr-24 flex-col">
        <div className="relative md:(transform scale-125 -translate-x-25 w-2/3) w-full">
          <div className="<md:hidden">
            <Image
              src="/illustration-laptop-desktop.svg"
              alt=""
              layout="responsive"
              width={974}
              height={786}
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/illustration-laptop-mobile.svg"
              alt=""
              layout="responsive"
              width={498}
              height={359}
            />
          </div>
        </div>
        <ArticleText paragraph={props.main[2]} />
      </Article>
    </section>
  );
}

export default Main;
