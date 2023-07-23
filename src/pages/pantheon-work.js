import React, { useState } from "react"
import { graphql } from "gatsby";
import PostCard from "../components/PostCard";

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SubpageA = ({ data }) => {
  const postsInCategoryA = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "pantheon-work"
  );

  let postCounter = 0;

  const [password, setPassword] = useState("")
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

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
        <h1 className="page-head-title">Pantheon Platform</h1>

        <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>

        Fully-integrated ultrafast electric vehicle charging solutions that free customers from the limitations of the electric grid.        </h4>
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
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button className="pw-button" type="submit">Submit</button>
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
