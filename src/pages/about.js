import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/react"

export default function About() {
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
      <p
      css={css`
        text-align: center;

      `}>
        Electrical engineer, creative technologist.
      </p>
      <h3>
        Skills
      </h3>
      <p>
        Electrical engineer, creative technologist.
      </p>
      <h3>
        Professional Experience
      </h3>
      <p>
        Electrical engineer, creative technologist.
      </p>
      <h3>
        Research Experience
      </h3>
      <p>
        Electrical engineer, creative technologist.
      </p>
    </Layout>
  )
}
