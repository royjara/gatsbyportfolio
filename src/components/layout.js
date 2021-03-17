import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby";
import Loopingtext from './loopingtext';

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    const Container = styled.div`
    nax-width: 600px;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    `

  return (
    <Container>
    <div
      css={css`
        max-width: 100%;
        padding: ${rhythm(2)};
      `}
    >
      <Loopingtext />
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-family: 'helvetica', sans-serif;
            padding: 2%;
            font-size: 50px;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          padding: 2%;
          color: black;
        `}
      >
        About
      </Link>
      {children}
    </div>
    </Container>
  )
}