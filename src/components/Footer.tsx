import Link from "next/link";
import React from "react";
import style from "../css/footer.module.css";
import footerData from "./footerData";

function Footer() {
  return (
    <div className={style.footer}>
      <h1>Blogr</h1>

      {footerData.map((section) => (
        <div key={section.title}>
          <h4 className={style.footer__title}>{section.title}</h4>

          <div className={style.footer__links}>
            {section.links.map((link) => (
              <Link key={link} href="/">
                {link}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
