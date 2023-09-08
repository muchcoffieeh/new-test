import React, { Component } from "react";
import { Link } from "gatsby"

export default ({post, postClass}) => (
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
  <ContentWithImage title={post.frontmatter.title} slug={post.frontmatter.slug}/>
      {/* {
        props.node.frontmatter.thumbnail
          ?(<ContentWithImage props={props}/>)
          :(<ContentNoImage props={props}/>)
          props.node.frontmatter.thumbnail <ContentWithImage props={props}/>
      } */}
  </article>
)

const ContentWithImage = ({slug, title}) => {
  return (
    <Link to={`content${slug}`} className="post-card-link">
      <div className="post-card-content">
        <div className="post-card-overlay">
          <h3 className="post-card-title">
            {title || slug}
          </h3>
        </div>
      </div>
    </Link>
  );
}

// DESTRUCTURING
// const post = {
//   frontmatter: {
//     title: "sometitle",
//     slug: "/slug"
//   }
// }

// console.log(post.frontmatter.title)

// const { frontmatter: { title, slug } } = post

// console.log(title, slug)