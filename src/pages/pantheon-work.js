import React from "react";
import { graphql } from "gatsby";
import PostCard from "../components/PostCard";

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SubpageA = ({ data }) => {
  const postsInCategoryA = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "pantheon"
  );

  let postCounter = 0;

  return (
    <div>
      <header className="page-head" data-sal="fade">
        <h1 className="page-head-title">FreeWire Technologies</h1>

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
