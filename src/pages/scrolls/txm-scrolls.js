import React, { useState, useEffect } from "react";
import "../../utils/css/components/scrolls.css"; 

const MacBookPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
    console.log("Active section:");

    const sectionElements = document.querySelectorAll(".scroll-text-div");
    sectionElements.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

    //   if (scrollY >= sectionTop && scrollY < sectionBottom) {
    //     const sectionId = section.getAttribute("id"); // Get the ID of the current section
    //     const sectionIndex = parseInt(sectionId.replace("scroll", "")) - 1; // Convert ID to index
    //     console.log("Active section:", sectionId);
    //     setActiveSection(sectionIndex);
    //   }

      if (scrollY >= 200) {
        const sectionId = section.getAttribute("id"); // Get the ID of the current section
        const sectionIndex = 1; // Convert ID to index
        console.log("Active section:", sectionId);
        setActiveSection(sectionIndex);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    "../../images/pantheon-comp.jpg", // Replace with actual image path
    "../../images/txm-comp.jpg", // Replace with actual image path
    "../../images/pan-comp.jpg"  // Replace with actual image path
  ];

  return (
    <div className="macbook-page">
      <div className="macbook-background">
        {/* Background MacBook image */}
      </div>
      <div className="content-layer" style={{ top: `${scrollPosition * 0.5}px` }}>
        {/* Dynamic content layer */}
        <img src={images[activeSection]} alt={`Image ${activeSection}`} />
      </div>
      <div className="scrolling-text">
        <div className="scroll-text-div" id="scroll1">
          <p>This is a scrolling text that will scroll alongside the MacBook.</p>
        </div>
        <div className="scroll-text-div" id="scroll2">
          <p>This is another scrolling text that will scroll alongside the MacBook.</p>
        </div>
        <div className="scroll-text-div" id="scroll3">
          <p>Yet another scrolling text that will scroll alongside the MacBook.</p>
        </div>
      </div>
    </div>
  );
};

export default MacBookPage;
