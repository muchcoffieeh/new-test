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
      <header className="page-head" data-sal="fade">
          <StaticImage
            src="../images/sx-logo.png"
            loading="eager"
            width={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <h1 className="page-head-title">Designed By Serena</h1>

          <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
            {/* {data.site.siteMetadata.description} */}
            Delightful experiences designed strategically.
          </h4>
        </header>
        <div>
        <div className="groups-container">
  <div className="group-container">
    <div className="group-content"
      data-sal="slide-left"
      data-sal-delay="950"
      data-sal-duration="100000000000000s"
      data-sal-easing="ease"
    >
      <div className="vert-divider"></div>
      <h2>Systems Thinking</h2>
      <p>I lean in and deeply analyze the complicated webs of relationships between technical components, people, pain points, and market factors to inform my design decisions.</p>
      <ul>
        <li>Market Research</li>
        <li>Competitive/Comparative Analysis</li>
        <li>Persona Classification/Definition</li>
      </ul>
    </div>
    <div className="group-image">
      <StaticImage
        src="../images/systems-icon.png"
        loading="eager"
        width={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
  </div>

  <div className="group-container reverse">
    <div className="group-image">
      <StaticImage
        src="../images/systems-icon.png"
        loading="eager"
        width={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
    
    <div className="group-content right"
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-duration="10000000s"
      data-sal-easing="ease"
    >
    <div className="vert-divider right"></div>
      <h2>Collaboration</h2>
      <p>Collaboration with cross-functional teams is my go-to for generating ideas and insights that give way to delightful customer experiences.</p>
      <ul className="ul-reverse">
        <li>Moderated/Unmoderated Interviews</li>
        <li>Participatory Design Workshops</li>
        <li>Information Architecture</li>
      </ul>
    </div>
  </div>

  <div className="group-container">
    <div className="group-content"
      data-sal="slide-left"
      data-sal-delay="300"
      data-sal-duration="10000000s"
      data-sal-easing="ease"
    >
    <div className="vert-divider"></div>
      <h2>Process Efficiency</h2>
      <p>Operate with a tried and true framework of research, conceptualize, and execute to deliver on key objectives while adjusting for the unique characteristics and constraints of each project.</p>
      <ul>
        <li>Product Requirements</li>
        <li>User Flow Iteration</li>
        <li>Prototype Testing</li>
      </ul>
    </div>
    
    <div className="group-image">
        <StaticImage
          src="../images/systems-icon.png"
          loading="eager"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
    </div>
  </div>
</div>


          <div className="groups-a">
            <a href="https://www.linkedin.com/in/serenaxu/">See How I Operate</a>
          </div>
        </div>
        <hr></hr>
        <div id="case-studies">
        <h2 className="section-h2">Case Studies</h2>
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
        </div>
    </Layout>
  )
}

export default BlogIndex
