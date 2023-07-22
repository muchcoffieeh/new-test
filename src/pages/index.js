import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Modal from 'react-modal';
import { Link } from "gatsby";

import Layout from "../components/layout"
// import PostCard from "../components/postCard"
import { StaticImage } from "gatsby-plugin-image"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import "../utils/css/components/indexPage.css"

Modal.setAppElement("#___gatsby");

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: {frontmatter: {date: DESC}}) {
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
  // console.log( data.allMdx.nodes)
  const posts = data.allMdx.nodes
  let postCounter = 0

  const [currentColor, setCurrentColor] = useState("color-default");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Add color classes to body based on scroll position
    const handleScroll = () => {
      const panels = document.querySelectorAll(".panel");
      const scroll = window.scrollY + window.innerHeight / 3;

      panels.forEach((panel) => {
        const panelTop = panel.offsetTop;
        const panelBottom = panelTop + panel.offsetHeight;

        if (scroll >= panelTop && scroll < panelBottom) {
          const newColor = panel.dataset.color;
          setCurrentColor(`color-${newColor}`);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    // useEffect(() => {
    //   // Lock scrolling when the modal is open
    //   const handleLockScrolling = () => {
    //     document.body.style.overflow = showModal ? "hidden" : "auto";
    //   };
  
    //   handleLockScrolling();
  
    //   return () => {
    //     document.body.style.overflow = "auto"; // Revert to default when unmounting
    //   };
    // }, [showModal]);

    const openModal = () => {
      setShowModal(true);
    };

    const closeModal = () => {
      setShowModal(false);
    };

  return (
    <div className={currentColor} data-color="default">
    <Layout title={data.site.siteMetadata.title}>
      
      <header className="page-head" data-sal="fade">
        <StaticImage
          src="../images/sx-logo.png"
          loading="eager"
          width={250}
          quality={80}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1 className="page-head-title">Delightful experiences designed strategically.</h1>

        <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
          {/* {data.site.siteMetadata.description} */}
          I'm a versatile and strategic designer, especially skilled at connecting the dots to find clarity in ambiguous/amorphous situations. With a deep set of skills ranging from visual design to frontend development, I craft intuitive and impactful experiences for users.
        </h4>
      </header>
        <div>
        <div className="groups-container panel" data-color="white">
          {/* --------------1st grp starts------------------ */}
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
            <div className="group-image"
              data-sal="slide-right"
              data-sal-delay="950"
              data-sal-duration="100000000000000s"
              data-sal-easing="ease"
            >
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
          {/* --------------2nd grp starts------------------ */}
          <div className="group-container reverse">
            <div className="group-image"
              data-sal="slide-left"
              data-sal-delay="400"
              data-sal-duration="100000000000000s"
              data-sal-easing="ease"
            >
              <StaticImage
                src="../images/collaboration.png"
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

          {/* --------------3rd grp starts------------------ */}
          <div className="group-container">
            <div className="group-content"
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-duration="10000000s"
              data-sal-easing="ease"
            >
            <div className="vert-divider"></div>
              <h2>Process Efficiency</h2>
              <p>I operate with a tried and true framework of research, conceptualize, and execute to deliver on key objectives while adjusting for the unique characteristics and constraints of each project.</p>
              <ul>
                <li>Product Requirements</li>
                <li>User Flow Iteration</li>
                <li>Prototype Testing</li>
              </ul>
            </div>
            
            <div className="group-image"
              data-sal="slide-right"
              data-sal-delay="400"
              data-sal-duration="100000000000000s"
              data-sal-easing="ease"
            >
                <StaticImage
                  src="../images/process.png"
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

        <div className="groups-a panel" data-color="violet">
              <button className="openModal-button" onClick={openModal}>See How I Operate</button>
              <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
              >
                <button onClick={closeModal}>X</button>
                <div className="modal-scrollable-content">
                  <div className="modal-h2-div">
                    <h2>Process Framework</h2>
                  </div>
                  <p>…patience while the lovely diagram loads….</p>
                <StaticImage
                  src="../images/test-process.jpg"
                  loading="eager"
                  width={4000}
                  quality={80}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  style={{ marginBottom: `var(--space-3)` }}
                />
                </div>
              </Modal>
            </div>
        </div>
        <hr></hr>
        
        <div id="case-studies" className="studies-div panel" data-color="white">
          <div className="other-sections">
            <h2 className="section-h2">My Work</h2>
            <h4>The following are selected examples of my work with various organizations. I've chosen these to highlight the process I follow to make an impact while being efficient. You'll see how I tailor my approach to match the uniqueness of each project, the stage of the organization, and the tight delivery timelines some required.</h4>
          </div>



        </div>
        
    </Layout>
    <Link to="/pantheon-work" className="subpage-link">
          <div className="subpage-content">
            <div className="subpage-img">
              <StaticImage
                src="../images/pantheon-comp.jpg"
                loading="eager"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>

            <div className="subpage-container">
              <h2>Pantheon Platform</h2>
              <h4>Pantheon powers the open web, running sites in the cloud for customers including Stitch Fix, Okta, Home Depot, Pernod Ricard, and The Barack Obama Foundation.</h4>
              <p>I’m currently designing developer experiences and leading design on the Core Site Services team.</p>
            </div>
          </div>
        </Link>

        <Link to="/txm-work" className="subpage-link reverse">
          <div className="subpage-content reverse">
            <div className="subpage-img reverse">
              <StaticImage
                src="../images/txm-comp.jpg"
                loading="eager"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>

            <div className="subpage-container reverse">
              <h2>Tempus Ex</h2>
              <h4>Fully-integrated ultrafast electric vehicle charging solutions that free customers from the limitations of the electric grid.</h4>
              <p>Design for optimizing host pricing strategies and overall app experience. This was also my transition from marketing into product design.</p>
            </div>
          </div>
        </Link>

        <Link to="/freewire-tech-work" className="subpage-link">
          <div className="subpage-content">
            <div className="subpage-img">
              <StaticImage
                src="../images/freewire-comp.jpg"
                loading="eager"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>

            <div className="subpage-container">
              <h2>FreeWire Technologies</h2>
              <h4>Fully-integrated ultrafast electric vehicle charging solutions that free customers from the limitations of the electric grid.</h4>
              <p>Design for optimizing host pricing strategies and overall app experience. This was also my transition from marketing into product design.</p>
            </div>
          </div>
        </Link>

        <Link to="/aaf-work" className="subpage-link reverse">
          <div className="subpage-content reverse">
            <div className="subpage-img reverse">
              <StaticImage
                src="../images/aaf-comp.jpg"
                loading="eager"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </div>

            <div className="subpage-container reverse">
              <h2>Alliance of American Football</h2>
              <h4>Fully-integrated ultrafast electric vehicle charging solutions that free customers from the limitations of the electric grid.</h4>
              <p>Design for optimizing host pricing strategies and overall app experience. This was also my transition from marketing into product design.</p>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default BlogIndex
