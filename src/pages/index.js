import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../utils/css/components/index.css"

const sections = [
  {
  title: "Pantheon Platform",
    image: "../images/pantheon-comp.jpg",
    text: {
      title: "Work",
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
      text: {
        title: "Work",
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
        text: {
          title: "Work",
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
          text: {
            title: "Work",
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
  const [backgroundImage, setBackgroundImage] = useState("");
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
    setBackgroundImage(`url(${image})`); // Set the CSS background-image property with the URL
    setHeroText(text);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(""); // Reset background image to empty string
    setHeroText(defaultText);
    setIsHovering(false);
  };

  return (
    <main>
      <div className="left-div">
        <div className="logo-container">
          <StaticImage
            src="../images/sx-logo.png"
            loading="eager"
            width={200}
            quality={80}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
      </div>

      {/* <div className="right-div" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div
        className={`right-div ${isHovering ? "hover" : ""}`}
        onMouseLeave={handleMouseLeave}
        style={{
          "--bg-image": backgroundImage,
        }}
      >
        <div className="navigation-container">
          <h2 className="navigation-heading">MY WORK</h2>
          <nav className="vertical-nav">
            <ul>
              {sections.map((section, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleSectionHover(section.image, section.text)}
                  onMouseLeave={handleMouseLeave} // Use the new event handler
                >
                  <a href={`#section${index + 1}`}>{section.title}</a>
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
          </div>
        </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Designed By Serena</title>;
