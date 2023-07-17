import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Toc from '../components/toc'

const shortcodes = { Link } // Provide common components here

export default function PrivatePageTemplate({ data, children }) {
  const post = data.mdx

  

  console.log(data)
  return (
    <Layout>
      <Toc post={post.tableOfContents} />
      <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="300000ms"
            data-sal-easing="ease-out-cubic"
          >
            <header className="post-content-header">
              <h2 className="post-content-title">{data.mdx.frontmatter.title}</h2>
            </header>
          </div>

          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="300000ms"
            data-sal-easing="ease-out-cubic"
          >
            {post.frontmatter.description && (
              <h4 class="post-content-excerpt">
                {post.frontmatter.description}
              </h4>
            )}
          </div>

          <MDXProvider components={shortcodes}>
            <div className="post-content-body">
              {children}
            </div>
          </MDXProvider>

          <footer className="post-content-footer">
          </footer>
        </article>
      

    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        slug
        date
        description
      }
    }
  }
`