import React, { useState } from "react"
import { graphql, Link } from "gatsby";
import PostCard from "../components/postCard.js";

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
          Pantheon powers the open web, running sites in the cloud for customers including Stitch Fix, Okta, Home Depot, Pernod Ricard, and The Barack Obama Foundation. Pantheon’s cloud native software makes it easy to securely manage a single website or thousands of websites across multiple teams in one platform.</h4>
        
          <Link to={"https://pantheon.io/"} className="sub-comp-link"
          target="_blank" // This will open the link in a new window/tab>
          >
          Visit Pantheon Website
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
