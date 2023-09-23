import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Toc from '../components/toc'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }) {
  const [isTocVisible, setIsTocVisible] = useState(false);

  useEffect(() => {
    // Function to check if an element is out of view
    function isOutOfView(element) {
      const rect = element.getBoundingClientRect();
      return rect.bottom < 0;
    }

    // Check the scroll position on scroll
    function handleScroll() {
      const postMainHead = document.querySelector(".post-main-head");
      if (postMainHead) {
        setIsTocVisible(isOutOfView(postMainHead));
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on component mount
    handleScroll();

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const post = data.mdx
  const { title, description, role, team, overview, macbookImage, gifImage } = post.frontmatter;

  return (
    <div>
      <div className="post-main-head">
      <div
            // data-sal="slide-right"
            // data-sal-delay="100"
            // data-sal-duration="300000ms"
            // data-sal-easing="ease-out-cubic"
          >
            <header className="post-content-header">
              <h1 className="post-content-title">{data.mdx.frontmatter.title}</h1>
            </header>
          </div>

          <div
            // data-sal="slide-left"
            // data-sal-delay="100"
            // data-sal-duration="300000ms"
            // data-sal-easing="ease-out-cubic"
          >
            {post.frontmatter.description && (
              <h4 class="post-content-excerpt">
                {post.frontmatter.description}
              </h4>
            )}
          </div>
        <div className="overview">
        <div className="left">
          <div className="label-w-desc">
            <div className="roles left">          
              <h3>Role</h3>
              <p>{role}</p>
            </div>
            <div className="roles right">
              <h3>Team</h3>
              {team.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
            </div>
          </div>
          <div className="label-w-desc">
            <div>
            <h3> Overview </h3>
            <p>{overview}</p>
            </div>
          </div>
      </div>

    <div className="right">
      <div className="head-image">
      <img className="mock-screen" src={gifImage}/>
            <img className="macbook" src={macbookImage}/>
        
      </div>
    </div>
      </div>
    </div>
    
    <Layout>
    {isTocVisible && <Toc post={post.tableOfContents} />}
      <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >

          <MDXProvider components={shortcodes}>
            <div className="post-content-body">
              {children}
            </div>
          </MDXProvider>

          <footer className="post-content-footer">
          </footer>
        </article>
      

    </Layout>
    </div>
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
        role
        team
        overview
        macbookImage
        gifImage
      }
    }
  }
`