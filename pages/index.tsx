import Image from "next/image";

import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ButtonBase from "../src/components/ButtonBase";

import { InferGetStaticPropsType } from "next";

function App(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className="flex rounded-bl-9xl flex-col gap-y-14 bg-gradient-to-r from-red-300 bg-red-500 px-6 pt-14 pb-36 <md:p-3 text-light-50 overflow-hidden relative">
        <div className="absolute h-full w-400 <md:(-translate-x-100 -translate-y-150) transform -translate-y-150">
          <Image
            src={"/bg-pattern-intro.svg"}
            alt=""
            layout="responsive"
            height={1000}
            width={1000}
          />
        </div>

        <Navbar menu={props.menu} />

        <header className="z-1 text-center">
          <h1 className="leading-tight font-bold text-6xl <md:text-5xl">
            A modern publishing platform
          </h1>

          <p className="pt-6">Grow your audience and build your online brand</p>
        </header>

        <div className="flex flex-wrap z-1 self-center justify-center gap-gap-x-4">
          <ButtonBase className="bg-light-50 text-red-500 py-4 px-6 rounded-full">
            Start for Free
          </ButtonBase>
          <ButtonBase className="rounded-full border border-light-50 py-4 px-6">
            Learn More
          </ButtonBase>
        </div>
      </section>

      <Main />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      menu: [
        {
          name: "Product",
          links: [
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ],
        },

        {
          name: "Company",
          links: ["About", "Team", "Blog", "Careers"],
        },

        {
          name: "Connect",
          links: ["Contact", "Newsletter", "LinkedIn"],
        },
      ],
    },
  };
}

export default App;
