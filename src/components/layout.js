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
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`#my-process`}>Process</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`#case-studies`}>Work</Link>
              </li>
              
              <li className="nav-elements" role="menuitem">
                <Link to={`https://www.linkedin.com/in/serena-s-xu/`} target="_blank">About</Link>
            </li>
            </ul>
          </nav>
          <div className="site-head-center"></div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      {/* <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Designed By Serena{" "}
      </footer> */}
    </div>
  )
}

export default Layout
