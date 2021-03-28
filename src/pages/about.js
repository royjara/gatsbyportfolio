import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import decoimage from "../images/decorations/about_deco.gif";


export default function About() {
  return (
    <Layout>
          <h1
          css={css`
            font-family: 'Archivo Narrow', sans-serif;
            letter-spacing: -3px;
            text-align: left;
            background: url(${decoimage});
            background-size: cover;
            color: white;
            padding: 2%;
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
