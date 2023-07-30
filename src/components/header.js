import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="page-head-main">
        <div
        data-sal="slide-up" // Add the data-sal attribute with the animation name
        data-sal-delay="200" // Add optional data-sal-delay and data-sal-easing attributes
        data-sal-duration="300"
        data-sal-easing="ease"
        >
      <StaticImage
        src="../images/sx-logo.png"
        loading="eager"
        width={400}
        quality={80}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        />
        </div>
      
      <h2 className="page-head-title"
        data-sal="slide-up"
        data-sal-delay="800"
        data-sal-duration="600"
        data-sal-easing="ease"
      >Hi there. I'm <strong className="highlight-word">Serena.</strong></h2>

      <h2 className="page-head-title line"
        data-sal="slide-up"
        data-sal-delay="900"
        data-sal-duration="300"
        data-sal-easing="ease"
      >
        {/* {data.site.siteMetadata.description} */}
        I’m a <strong className="highlight-word">designer</strong> working on infrastructure and developer experiences.
      </h2>
    </header>
  );
};

export default Header;
