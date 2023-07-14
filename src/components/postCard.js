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

// class ContentNoImage extends Component {
//   render() {
//     const{props}=this.props;
//     return (
//       <div className="post-card-content">
//         <div>
//         <Tags tags={props.node.frontmatter.tags}/>
//         </div>
//         <div>
//         <Link to={props.node.fields.slug} className="post-card-link">
//           <h2 className="post-card-title">
//             {props.node.frontmatter.title || props.node.fields.slug}
//           </h2>
//         </Link>
//         </div>
//         <div className="post-card-date">
//         {props.node.frontmatter.date}
//         </div> 
//         <div className="post-card-body">
//         {props.node.frontmatter.description || props.node.excerpt}
//         </div>
//         <div>
//         <Link to={props.node.fields.slug} className="post-card-link post-card-readmore">
//           {
//             props.node.frontmatter.description || props.node.excerpt
//               ?("Read more")
//               :(null)
//           }
//         </Link>
//         </div>
//       </div>
//     );
//   }
// }

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