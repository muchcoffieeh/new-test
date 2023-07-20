import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../../components/layout"
import Toc from '../../components/toc'

const shortcodes = { Link } // Provide common components here

export default function PrivatePageTemplate({ data, children }) {
  const post = data.mdx
  const [password, setPassword] = useState("")
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  console.log("the children", children)

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
    <Layout>
      {isPasswordCorrect ? (
        <>
          <Toc post={post.tableOfContents} />
          <article className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}>
            <div>
              <header className="post-content-header">
                <h2 className="post-content-title">{data.mdx.frontmatter.title}</h2>
              </header>
            </div>

            <div>
              {post.frontmatter.description && (
                <h4 className="post-content-excerpt">{post.frontmatter.description}</h4>
              )}
            </div>

            <MDXProvider components={shortcodes}>
              <div className="post-content-body">{children}</div>
            </MDXProvider>

            <footer className="post-content-footer"></footer>
          </article>
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