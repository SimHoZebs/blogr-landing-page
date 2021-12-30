import Image from "next/image";

import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ButtonBase from "../src/components/ButtonBase";
import style from "../src/css/hero.module.css";

import { InferGetStaticPropsType } from "next";

function App(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className={style.hero}>
        <div className={style.bgContainer}>
          <Image
            className="absolute"
            src={"/bg-pattern-intro.svg"}
            alt=""
            height={1000}
            width={1000}
          />
        </div>

        <Navbar menu={props.menu} />

        <header className={style.hero__header}>
          <h1 className="leading-tight font-bold">
            A modern publishing platform
          </h1>

          <p>Grow your audience and build your online brand</p>
        </header>

        <div className={style.btnContainer}>
          <ButtonBase className={style.cta}>Start for Free</ButtonBase>
          <ButtonBase>Learn More</ButtonBase>
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
