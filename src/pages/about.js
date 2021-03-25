import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import { css } from "@emotion/react"

export default function About({ data }) {
  return (
    <Layout>
          <h1
          css={css`

            border-bottom: 1px solid;
            border-left: 1px solid;
            font-family: 'Archivo Narrow', sans-serif;
            letter-spacing: -3px;
          `}
        >
          About
        </h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`