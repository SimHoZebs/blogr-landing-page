import Image from "next/image";

import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ButtonBase from "../src/components/ButtonBase";

import { InferGetStaticPropsType } from "next";

function App(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col gap-y-24">
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

      <Main main={props.main} />
      <Footer />
    </div>
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

      main: [
        [
          {
            title: "Introducing an extensible editor",
            desc: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
          },

          {
            title: "Robust content management ",
            desc: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
          },
        ],

        [
          {
            title: "State of the Art Infrastructure",
            desc: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra - fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
          },
        ],

        [
          {
            title: "Free, open, simple",
            desc: " Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third - party commenting tools, and works seamlessly with Google Analytics.The architecture is clean and is relatively easy to learn.",
          },

          {
            title: "Powerful tooling",
            desc: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
          },
        ],
      ],
    },
  };
}

export default App;
