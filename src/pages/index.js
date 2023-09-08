import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../utils/css/components/index.css"

import defaultBackgroundBlack from "../images/black-comp.jpg"; // Update the path to your default background image

const sections = [
  {
  title: "Pantheon Platform",
    image: "../images/pantheon-comp.jpg",
    link: "/pantheon-work",
    text: {
      title: "WORK",
      content: (
        <>
          <span className="highlight-word">Pantheon</span> is enterprise SaaS for powering the open web – securely manage a single website or thousands of websites
          across multiple teams in one platform.
        </>
      ),
      desc: (
        <>
          I’m currently designing developer experiences and{" "}
          <span className="highlight-word">leading design </span>on the Core Site Services team.
        </>
      ),
    },
  },
  {
    title: "Tempus Ex",
    image: "../images/txm-comp.jpg",
    link: "/txm-work",
      text: {
        title: "WORK",
        content: (
          <>
            Merging sports, video, and data with innovation,
            <span className="highlight-word">Tempus Ex</span> enables the creation of new interactive experiences around live events.
          </>
        ),
        desc: (
          <>
            I was rapidly translating{" "}
            <span className="highlight-word">product ideas into dynamic prototypes</span>.
          </>
        ),
      },
    },
    {
      title: "FreeWire Technologies",
    image: "../images/freewire-comp.jpg",
    link: "/freewire-tech-work",
        text: {
          title: "WORK",
          content: (
            <>
            <span className="highlight-word">FreeWire </span>
               is a leader in battery-integrated ultrafast electric vehicle charging and energy management solutions solving grid infrastructure constraints.
            </>
          ),
          desc: (
            <>
              I led design for the digital suite that <span className="highlight-word">seamlessly complemented</span> the battery-integrated ultrafast EV charging and energy management offerings.
            </>
          ),
        },
      },
      {
        title: "Alliance of American Football",
    image: "../images/aaf-comp.jpg",
    link: "/aaf-work/content/aaf-web",
          text: {
            title: "WERK",
            content: (
              <>
                The <span className="highlight-word"> Alliance of American Football </span> 
                left a legacy of pioneering advanced sport tech, including real-time fantasy app with interactive features that revolutionized the fan experience.
              </>
            ),
            desc: (
              <>
                I focused on crafting interactive experiences and <span className="highlight-word">enhancing fan engagement</span> both during games and in-between.
              </>
            ),
          },
        },
];

const IndexPage = () => {
  useEffect(() => {
    // Disable scrolling on the index page
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
    document.body.style.backgroundColor = "#000000"; 

    // Re-enable scrolling when the component unmounts
    return () => {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [mainStyle, setMainStyle] = useState({ overflowY: "hidden" });

  useEffect(() => {
    // Disable scrolling on the index page
    setMainStyle((prevStyle) => ({ ...prevStyle, overflowY: "hidden" }));

    // Re-enable scrolling when the component unmounts
    return () => {
      setMainStyle((prevStyle) => ({ ...prevStyle, overflowY: "auto" }));
    };
  }, []);

  const [backgroundImage, setBackgroundImage] = useState(defaultBackgroundBlack);
  const [heroText, setHeroText] = useState(sections[0].text);
  const [isHovering, setIsHovering] = useState(false);
  const defaultText = {
    title: "INTRO",
    content: (
      <>
        Hi there. I'm <span className="highlight-word">Serena</span>.
      </>
    ),
    desc: (
      <>
        I’m a designer working on <span className="highlight-word">infrastructure</span> and{" "}
        <span className="highlight-word">developer experiences</span>.
      </>
    ),
  };

  const handleSectionHover = (image, text) => {
    setBackgroundImage(image); // Set the CSS background-image property with the URL
    setHeroText(text);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(defaultBackgroundBlack); // Reset background image to empty string
    setHeroText(defaultText);
    setIsHovering(false);
  };

  return (
    <main style={mainStyle}>
      <div className="left-div">
        <div className="logo-container">
          <StaticImage
            src="../images/sx-logo.png"
            loading="eager"
            width={300}
            quality={80}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          <hr className="main-hr"></hr>
        </div>
      </div>

      {/* <div className="right-div" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="right-div" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="navigation-container">
          <h2 className="navigation-heading">MY WORK</h2>
          <nav className="vertical-nav">
            <ul>
              {sections.map((section, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleSectionHover(section.image, section.text)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={section.link} activeClassName="active"> {/* Use Gatsby Link component */}
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="hero-section">
          <div className={`hero-left ${isHovering ? "smooth-fade" : ""}`}>
            <h2>{isHovering ? heroText.title : defaultText.title}</h2>
            <p>{isHovering ? heroText.content : defaultText.content}</p>
            <p className="p-2">{isHovering ? heroText.desc : defaultText.desc}</p>
            

            <p className="mobile-disc">
              Still working on mobile-friendly. Come back to <span className="highlight-word">visit me on your desktop</span>. <span>&#128517;</span>
            </p>
          </div>
        </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Designed By Serena</title>;
