/*  GENERIC LAYOUT:

TODO: STICK BUTTONS INTO loopingtext RECTANGLE

Component that:
- displays <loopingtext />
- displays title ("TENSE SALT WORLDWIDE") + link to "/"
- displays links to Blog + About
- displays {children}

*/  

import React from "react"
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

  return (
    <div
      css={css`
        max-width: 100%;
        padding-right: ${rhythm(1)};
        padding-left: ${rhythm(1)};
      `}
    >
      <Loopingtext />
      
      <Link to={`/`}>
        <h3
          css={css`

            font-family: 'helvetica';
            padding-top: 2%;
            font-size: 50px;
            letter-spacing: -5px;
            text-align: center;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      {children}
    </div>
  )
}