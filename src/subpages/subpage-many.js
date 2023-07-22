import React from "react";
import { Link } from "gatsby";

const Subpage1 = ({ data }) => {
  const postsInCategory1 = data.allMdx.nodes.filter(
    (post) => post.frontmatter.category === "Category1"
  );

  return (
    <div>
      <h1>Category 1</h1>
      <ul>
        {postsInCategory1.map((post) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subpage1;
