import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby";
import PostCard from "../components/postCard.js";

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SubpageA = ({ data }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const postsInCategoryA = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "freewire-tech-work"
  );

  let postCounter = 0;

  const isBrowser = typeof window !== "undefined";

  // Use local storage to store the authentication status
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(
    isBrowser && localStorage.getItem("isPasswordCorrect_fw") === "true"
  );

  const [password, setPassword] = useState("")

  useEffect(() => {
    // Save the authentication status to local storage when it changes
    if (isBrowser) {
      localStorage.setItem("isPasswordCorrect_fw", isPasswordCorrect);
    }
  }, [isPasswordCorrect, isBrowser]);

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Check if the entered password is correct
    if (password === "canoes10") {
      setIsPasswordCorrect(true)
    } else {
      alert("Wrong password. Please try again.")
      setIsPasswordCorrect(false)
    }
  }

  return (
    <div>
      {isPasswordCorrect ? (
        <>
          <header className="page-head">
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
            
        <h1 className="comp-head-title">FreeWire Technologies</h1>

        <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
          FreeWire is an industry leader in battery-integrated ultrafast electric vehicle (EV) charging and energy management solutions solving grid infrastructure constraints by designing and manufacturing scalable clean power, driving the global transition to electrified transportation.</h4>
        <Link to={"https://freewiretech.com/"} className="sub-comp-link"
          target="_blank" // This will open the link in a new window/tab>
          >
          Visit FreeWire Website
        </Link>
      </header>

          <div className="post-feed three">
            {postsInCategoryA.map((post) => {
              postCounter++;
              return (
                <PostCard
                  key={post.id}
                  count={postCounter}
                  post={post}
                  postClass={`post`}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="pw-form">
          <h2>Enter the password. Please.</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="pw-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

// Your GraphQL query here
// This query will fetch the required data for SubpageA component
// The data will be available in the "data" prop of the SubpageA component
export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          slug
          category
          thumbnail {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default SubpageA;
