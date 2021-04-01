import React from 'react'
import style from './css/footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>

      <h1>Blogr</h1>

      <h4 className={style.title}>Product</h4>

      <li>
        <a href="/">Overview</a>
        <a href="/">Pricing</a>
        <a href="/">Marketplace</a>
        <a href="/">Features</a>
        <a href="/">Integrations</a>
      </li>

      <h4 className={style.title}>Company</h4>

      <li>
        <a href="/">About</a>
        <a href="/">Team</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
      </li>

      <h4 className={style.title}>Connect</h4>

      <li>
        <a href="/">Contact</a>
        <a href="/">Newsletter</a>
        <a href="/">LinkedIn</a>
      </li>
    </div>
  )
}

export default Footer
