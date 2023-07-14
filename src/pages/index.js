import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const BlogIndex = ({ data }, location) => {
  const siteTitle = data.

  return (
    <Layout title={siteTitle}>
      <header className="page-head">
          <img className="mainLogo" src={`sx-logo.png`} />
          <h1 className="page-head-title">Designed By Serena</h1>

          <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
            {data.site.siteMetadata.description}
          </h4>
        </header>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      distinct(field: frontmatter___tags)
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <useStaticQuery
    query={indexQuery}
    render={data => (
      <div>
        <BlogIndex location={props.location} props data={data} {...props} />
      </div>
    )}
  />
)

