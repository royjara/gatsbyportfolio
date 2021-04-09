import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import decoimage from "../images/decorations/blog_deco.gif";


export default function Blog({ data }) {
  return (
    <div
    css={css`
      display: flex;
      flex-direction: column;
    `}>
    <Layout>
    <h1
          css={css`
            font-family: 'Archivo Narrow', sans-serif;
            letter-spacing: -3px;
            background: url(${decoimage});
            background-size: cover;
            color: white;
            padding: 2%;
          `}
        >
          Blog
        </h1>
      <div
        css = {css`
          background-color: gainsboro;
          min-height: 60vh;
          padding: 5% 5%;
          width: 100%;
          left: 0;
          overflow: hidden;
          position: fixed;
        `}
      >
        
        <h4>
          {data.allMarkdownRemark.totalCount} Posts</h4>
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
              <p>{node.frontmatter.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
    </div>
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
            description
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