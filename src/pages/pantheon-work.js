import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby";
import PostCard from "../components/postCard.js";

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SubpageA = ({ data }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const postsInCategoryA = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "pantheon-work"
  );

  let postCounter = 0;

  const isBrowser = typeof window !== "undefined";

  return (
    <div style={{ backgroundColor: "#000000" }}>
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
              <div className="nav-div black">
                <nav id="swup" className="site-head-left light">
                  <ul className="nav" role="menu">
                    <li className="nav-home" role="menuitem">
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li className="nav-current nav-home" role="menuitem">
                      <Link to={`/pantheon-work`}>Pantheon</Link>
                    </li>
                <li className="nav-home black" role="menuitem">
                  <Link to={`/freewire-tech-work`}>FreeWire</Link>
                </li>
                <li className="nav-home" role="menuitem">
                  <Link to={`/txm-work`}>TXM</Link>
                </li>
                    {/* <li className="nav-about" role="menuitem">
                      <Link to={`#my-process`}>Process</Link>
                    </li>
                    <li className="nav-about" role="menuitem">
                      <Link to={`#case-studies`}>Work</Link>
                    </li> */}
                    
                    <li className="nav-elements" role="menuitem">
                      <Link to={`https://www.linkedin.com/in/serena-s-xu/`} target="_blank">About</Link>
                  </li>
                  </ul>
                </nav>
              </div>
              <div className="site-head-center"></div>
            </div>
            
            <h1 className="comp-head-title">Pantheon Platform</h1>

            <h4>
              Pantheon powers the open web, running sites in the cloud for customers including Stitch Fix, Okta, Home Depot, Pernod Ricard, and The Barack Obama Foundation. Pantheon’s cloud native software makes it easy to securely manage a single website or thousands of websites across multiple teams in one platform.
            </h4>

            <hr className="top"></hr>

            <h4 style={{ fontWeight: "600" }}>
            Below are my selected case studies from my tenure at Pantheon so far. Click on any of them to view.
            </h4>
            
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

          <div className="div-comp-link">
          <Link
              to={"https://pantheon.io/"}
              className="sub-comp-link"
              target="_blank"
            >
              Visit Pantheon Website
            </Link>
          </div>
          <span className="bottom"></span>
          <footer className="site-foot">
            &copy; {new Date().getFullYear()} &mdash;
            Designed By Serena{" "}
          </footer>
        </>
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
