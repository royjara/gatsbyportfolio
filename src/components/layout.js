import React from "react"
import { css, keyframes } from "@emotion/react"
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

    // const bounce = keyframes`
    //         from, 20%, 53%, 80%, to {
    //           transform: translate3d(0,0,0);
    //         }
    //         40%, 43% {
    //           transform: translate3d(0, -30px, 0);
    //         }
    //         70% {
    //           transform: translate3d(0, -15px, 0);
    //         }
    //         90% {
    //           transform: translate3d(0, -4px, 0);
    //         }
    // `

  return (
    <div
      css={css`
        background-color: pink;
        max-width: 100%;
        max-height: 100%;
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
  )
}