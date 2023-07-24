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
      
      <h1 className="page-head-title"
        data-sal="slide-up"
        data-sal-delay="800"
        data-sal-duration="600"
        data-sal-easing="ease"
      >Delightful experiences designed strategically.</h1>

      <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}
        data-sal="slide-up"
        data-sal-delay="900"
        data-sal-duration="300"
        data-sal-easing="ease"
      >
        {/* {data.site.siteMetadata.description} */}
        I'm a versatile and strategic designer, especially skilled at connecting the dots to find clarity in ambiguous/amorphous situations. With a deep set of skills ranging from visual design to frontend development, I craft intuitive and impactful experiences for users.
      </h4>
    </header>
  );
};

export default Header;
