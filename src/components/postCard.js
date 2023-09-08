import React from "react";
import { Link } from "gatsby";

import "../utils/css/components/postCard.css"

export default ({ post, postClass }) => (
  <article
    className={`post-card ${
      postClass
    } ${post.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      post.frontmatter.thumbnail && {
        backgroundImage: `url(${
          post.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <ContentWithImage
      title={post.frontmatter.title}
      slug={post.frontmatter.slug}
      description={post.frontmatter.description} // Pass the description
    />
  </article>
);

const ContentWithImage = ({ slug, title, description }) => {
  return (
    <Link to={`content${slug}`} className="post-card-link">
      <div className="post-card-content">
        <div className="post-card-overlay">
          <div className="circle-overlay">
            <p className="view-project-text">View Project</p>
          </div>
          <h3 className="post-card-title">{title || slug}</h3>
          <p className="post-card-description">{description}</p> {/* Description */}
        </div>
      </div>
    </Link>
  );
};
