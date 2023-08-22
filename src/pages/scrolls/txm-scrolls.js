import React, { useState, useEffect } from "react";
import "../../utils/css/components/scrolls.css";

const MacBookPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    {
      image: "../../images/pantheon-comp.jpg",
      text: "This is a scrolling text that will scroll alongside the MacBook.",
    },
    {
      image: "../../images/txm-comp.jpg",
      text: "This is another scrolling text that will scroll alongside the MacBook.",
    },
    {
      image: "../../images/pan-comp.jpg",
      text: "Yet another scrolling text that will scroll alongside the MacBook.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(parseInt(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const sectionElements = document.querySelectorAll(".scroll-text-div");
    sectionElements.forEach((section, index) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="macbook-page">
      <div className="macbook-background">
        {/* Background MacBook image */}
      </div>
      <div className="content-layer" style={{ top: `${scrollPosition * 0.5}px` }}>
        {/* Dynamic content layer */}
        <p>{sections[activeSection].text}</p>
        <img src={sections[activeSection].image} alt={`Image ${activeSection}`} />
      </div>
      <div className="scrolling-text">
        <div className="scroll-text-div" data-index={0}>
          <p>This is a scrolling text that will scroll alongside the MacBook.</p>
        </div>
        <div className="scroll-text-div" data-index={1}>
          <p>This is another scrolling text that will scroll alongside the MacBook.</p>
        </div>
        <div className="scroll-text-div" data-index={2}>
          <p>Yet another scrolling text that will scroll alongside the MacBook.</p>
        </div>
      </div>
    </div>
  );
};

export default MacBookPage;
