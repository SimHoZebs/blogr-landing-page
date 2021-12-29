import Hero from "../src/components/Hero";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

import { InferGetStaticPropsType } from "next";

function App(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Hero menu={props.menu} />
      <Main />
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
    },
  };
}

export default App;
