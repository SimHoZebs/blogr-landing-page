import style from './css/main.module.css'
import patternCircle from './images/bg-pattern-circles.svg'
import editorMobile from './images/illustration-editor-mobile.svg'
import phones from './images/illustration-phones.svg'
import laptopMobile from './images/illustration-laptop-mobile.svg'

function Main() {

  return (
    <div className={style.mainContainer}>
      <section className={style.block}>
        <h2 className={style.block__title}> Designed for the future </h2>
      </section>

      <img className={style.img} src={editorMobile} alt="" />

      <section className={style.block}>
        <h2 className={style.block__title}> Introducing an extensible editor </h2>

        <p className={style.block__desc}>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
          change the looks of a blog.
        </p>
      </section>

      <section className={style.block}>
        <h2 className={style.block__title}>
          Robust content management
        </h2>

        <p className={style.block__desc}>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </section>

      <section className={`${style.block} ${style.infra}`}>
        <img className={style.infra__phones} src={phones} alt="" />

        <div className={style.infra__imgContainer}>
          <img className={style.infra__bg} src={patternCircle} alt="" />
        </div>

        <h1 className={`${style.block__title} ${style.infra__title}`}>
          State of the Art Infrastructure
        </h1>

        <p className={`${style.block__desc} ${style.infra__desc}`}>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </section>

      <img className={style.img} src={laptopMobile} alt="" />

      <section className={style.block}>
        <h2 className={style.block__title}>

          Free, open, simple
        </h2>

        <p className={style.block__desc}>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </section>

      <section className={style.block}>
        <h2 className={style.block__title}>

          Powerful tooling
        </h2>

        <p className={`${style.block__desc} `}>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.
        </p>
      </section>
    </div >
  )
}

export default Main