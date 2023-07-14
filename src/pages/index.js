import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from "../components/postCard"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
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
      <h1>Hi people</h1>
      <header className="page-head">
          <img className="mainLogo" src={`sx-logo.png`} />
          <h1 className="page-head-title">Designed By Serena</h1>

          <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
            {data.site.siteMetadata.description}
          </h4>
        </header>
        {<div className="post-feed">
          {posts.map(node => {
            postCounter++
            return (
              <PostCard
                key={node.id}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div> }
    </Layout>
  )
}

export default BlogIndex
