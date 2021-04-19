import React from 'react'
import style from '../css/footer.module.css'
import footerData from './footerData'

function Footer() {
  return (
    <div className={style.footer}>

      <h1>Blogr</h1>

      {footerData.map(section => (
        <div key={section.title}>
          <h4 className={style.title}>{section.title}</h4>

          <div>
            {section.links.map(link => (
              <a key={link} href="/">{link}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Footer
