import Link from "next/link";

interface Props {
  footer: { title: string; links: string[] }[];
}
function Footer(props: Props) {
  return (
    <section className="flex justify-evenly bg-true-gray-800 text-light-50 py-16 rounded-tr-9xl <md:(flex-col gap-y-9 items-center text-center)">
      <div className="font-semibold text-4xl font-ubuntu">Blogr</div>

      {props.footer.map((section, index) => (
        <div className="flex flex-col gap-y-9" key={index}>
          <h4 className="font-semibold">{section.title}</h4>

          <div className="flex flex-col gap-y-5 text-blue-gray-300">
            {section.links.map((link) => (
              <Link key={link} href="/">
                <a>{link}</a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Footer;
