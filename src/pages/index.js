import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div      
        css = {css`
        background-color: teal;
        padding: 10% 5%;
        `}
      >
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            border-left: 1px solid;
            font-family: 'Archivo Narrow', sans-serif;
            letter-spacing: -3px;
          `}
        >
          {data.site.siteMetadata.description}
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: #{rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{""}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`