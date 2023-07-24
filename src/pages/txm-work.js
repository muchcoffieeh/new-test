import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import PostCard from "../components/postCard.js";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const SubpageA = ({ data }) => {
  const postsInCategoryA = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "txm-work"
  );

  let postCounter = 0;

  // Use session storage to store the authentication status
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(
    sessionStorage.getItem("isPasswordCorrect_txm") === "true"
  );

  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isPasswordCorrect) {
      // If the user is already authenticated, save the status to session storage
      sessionStorage.setItem("isPasswordCorrect_txm", "true");
    }
  }, [isPasswordCorrect]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the entered password is correct
    if (password === "canoes10") {
      setIsPasswordCorrect(true);
    } else {
      alert("Wrong password. Please try again.");
      setIsPasswordCorrect(false);
    }
  };

  return (
    <div>
      {isPasswordCorrect ? (
        <>
          <header className="page-head">
        <h1 className="page-head-title">Tempus Ex</h1>

        <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
          Merging sports, video, and data with innovation and accessibility, Tempus Ex technology enables the creation of new interactive experiences around live events. Tempus Ex partners with the National Football League, premier global sports leagues, and broadcasters to deliver cutting-edge sports experience solutions.</h4>
          <Link to={"https://tempus-ex.com/"} className="sub-comp-link"
          target="_blank" // This will open the link in a new window/tab>
          >
          Visit Tempus Ex Website
        </Link>
      </header>

          <div className="post-feed">
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
