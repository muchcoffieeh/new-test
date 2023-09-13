import React from "react"
import { Link } from "gatsby"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <div className="nav-div white">
            <nav id="swup" className="site-head-left">
              <ul className="nav white" role="menu">
                <li className="nav-home" role="menuitem">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="nav-pan" role="menuitem">
                      <Link to={`/pantheon-work/content/pantheon-edge/`}>Pantheon</Link>
                    </li>
                    <li className="nav-txm" role="menuitem">
                  <Link to={`/txm-work/content/txm-auto-stats/`}>Tempus</Link>
                </li>
                <li className="nav-aaf" role="menuitem">
                  <Link to={`/txm-work/content/aaf-web`}>AAF</Link>
                </li>
                <li className="nav-fw" role="menuitem">
                  <Link to={`/freewire-tech-work/content/mobi-gen-amp/`}>FreeWire</Link>
                </li>
                
                <li className="nav-elements" role="menuitem">
                  <Link to={`https://www.linkedin.com/in/serena-s-xu/`} target="_blank">About</Link>
              </li>
              </ul>
            </nav>
          </div>
          <div className="site-head-center"></div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      
      <footer className="site-foot">
      <div className="pre-footer">
      <p className="p-more-work">  I'm happy to share many more case studies from my time at here. Just shoot me a quick note!</p>
        <button><a href="mailto:serena.s.xu@gmail.com">Email Serena</a></button>
        </div>
        <div className="post-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Designed By Serena{" "}
        </div>
      </footer>
    </div>
  )
}

export default Layout
