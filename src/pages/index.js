import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/postCard"
import { StaticImage } from "gatsby-plugin-image"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import "../utils/css/components/indexPage.css"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
    nodes {
      id
      frontmatter {
        title
        slug
        date
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
`)
  console.log( data.allMdx.nodes)
  const posts = data.allMdx.nodes
  let postCounter = 0
  return (
    <Layout title={data.site.siteMetadata.title}>
      <header className="page-head">
          <StaticImage
            src="../images/sx-logo.png"
            loading="eager"
            width={100}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <h1 className="page-head-title">Designed By Serena</h1>

          <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
            {/* {data.site.siteMetadata.description} */}
            Product Designer. Product Thinker. Passion for emerging tech.
          </h4>
        </header>
        <div>
        <div className="groups-container">
  <div className="group-container">
    <div className="group-content">
      <h2>Collaboration</h2>
      <p>dfalkdjglkadjgl</p>
    </div>
    <div className="group-image">
      <img src="your-image-src" alt="Your Image" />
    </div>
  </div>

  <div className="group-container reverse">
    <div className="group-image">
      <img src="your-image-src" alt="Your Image" />
    </div>
    <div className="group-content">
      <h2>Systems Thinking</h2>
      <p>dfalkdjglkadjgl</p>
    </div>
  </div>

  <div className="group-container">
    <div className="group-content">
      <h2>Efficient Processes</h2>
      <p>dfalkdjglkadjgl</p>
    </div>
    <div className="group-image">
      <img src="your-image-src" alt="Your Image" />
    </div>
  </div>
</div>



          <a href="https://www.linkedin.com/in/serenaxu/">See How I Operate</a>
        </div>
        <hr></hr>
        {<div className="post-feed">
          {posts.map(post => {
            postCounter++
            return (
              <PostCard
                key={post.id}
                count={postCounter}
                post={post}
                postClass={`post`}
              />
            )
          })}
        </div> }
    </Layout>
  )
}

export default BlogIndex
