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
  console.log(data)
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
              <p>Product Design</p>
            </div>
            <div className="roles right">
              <h3>Team</h3>
              <p>Sr. Director of Product</p>
              <p>Tech Lead</p>
              <p>Edge Routing Engineering</p>
            </div>
          </div>
          <div className="label-w-desc">
            <div>
            <h3> Overview </h3>
            <p>
            High performance websites, serving millions of visitors a day utilize technologies at the edge for improved reliability and security.

            Pantheon customers tap into the power of the edge is through our Advanced Global CDN. However, it’s a managed service that customers cannot access by themselves. The workflow is unsatisfactory as customers have the strong desire to configure features on their own. To solve this major pain point, our product team created a product suite, allowing customers to self-service edge capabilities.
            </p>
            </div>
          </div>
      </div>

    <div className="right">
      <div className="head-image">
        <img className="mock-screen" src="/images/agcdn-verify-med.gif"></img>
        <img className="macbook" src="/images/mac-desktop.png"></img>
        
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
      }
    }
  }
`