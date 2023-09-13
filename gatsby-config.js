/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Designed By Serena`,
    siteUrl: `https://www.designedbyrena.com`
  },
  plugins: ["gatsby-plugin-image", 
  {
    resolve: "gatsby-plugin-mdx",
    options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2500,
              linkImagesToOriginal: true,
              quality: 100
            },
          },
          `gatsby-remark-autolink-headers`
        ],
        
      },
  },
  {
    resolve: "gatsby-remark-embed-video",
    options: {
      width: 800,
      ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
      height: 400, // Optional: Overrides optional.ratio
      related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
      noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
      loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.

      containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
      iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
      sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
    },
  },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-4G5MQR53HJ",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    }, 
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 100,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
  }, "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/public/images`,
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./src/content/blog"
    },
    __key: "content"
  },
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
      once: true, // Defines if animation needs to be launched once
      disable: false, // Flag for disabling animations

      // Advanced Options
      selector: "[data-sal]", // Selector of the elements to be animated
      animateClassName: "sal-animate", // Class name which triggers animation
      disabledClassName: "sal-disabled", // Class name which defines the disabled state
      rootMargin: "0% 50%", // Corresponds to root's bounding box margin
      enterEventName: "sal:in", // Enter event name
      exitEventName: "sal:out", // Exit event name
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/sx-logo.png',
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.designedbyrena.com',
      sitemap: 'https://www.designedbyrena.com/sitemap.xml',
      policy: [
        {
          userAgent: "Googlebot",
          disallow: "/",
        },
        {
          userAgent: "*",
          disallow: "/",
        },
      ]
    }
  }
]
};