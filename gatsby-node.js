const path = require("path")
const postTemplate = path.resolve(`./src/templates/post.jsx`)
const privatePostTemplate = path.resolve(`./src/templates/private/private-post.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            templateKey
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    const { slug, templateKey } = node.frontmatter

    if (templateKey === "private-post") {
      console.log("node frontmatter", node.frontmatter)
      createPage({
        // path: `content${slug}`,
        // component: privatePageTemplate,
        // context: { id: node.id },

        path: `content${node.frontmatter.slug}`,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: `${privatePostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
    } else {
      createPage({
        // path: `content${slug}`,
        // component: pageTemplate,
        // context: { id: node.id },

        path: `content${node.frontmatter.slug}`,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
    }
  })
}
