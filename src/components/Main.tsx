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

        <div className="relative transform translate-x-25">
          <Image
            src="/illustration-editor-desktop.svg"
            alt=""
            width={800}
            height={800}
          />
        </div>
      </Article>

      <Article className="pr-24 from-blue-gray-800 bg-gradient-to-b to-blue-gray-700 text-light-50 rounded-bl-9xl rounded-tr-9xl">
        <div className="relative">
          <Image
            src="/illustration-phones.svg"
            alt=""
            width={600}
            height={600}
          />
        </div>

        <ArticleText paragraph={props.main[1]} />
      </Article>

      <Article className="pr-24">
        <div className="relative transform -translate-x-25 ">
          <Image
            src="/illustration-laptop-desktop.svg"
            alt=""
            width={800}
            height={700}
          />
        </div>
        <ArticleText paragraph={props.main[2]} />
      </Article>
    </section>
  );
}

export default Main;
