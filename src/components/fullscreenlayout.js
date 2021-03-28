/* FULLSCREENLAYOUT
...more like a footer

TODO: make reacitve? dropdown menu?

Component that:
- displays links to About + Blog + Music

*/
import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby";
// import Loopingtext from './loopingtext';

import { rhythm } from "../utils/typography"


export default function FullscreenLayout() {

  return (

    <div
      css={css`width: 100%; 
      padding: ${rhythm(2)};
      position:absolute;
      bottom:0;`}
    >
      <h3
        css={css`font-family: 'Fira sans'; float: left;  color: black;`}
      >Roy Jara</h3>
      <Link
        to={`/music/`}
        css={css`float: right; 
        display: inline-block; 
        min-width: 6vw; 
        color: black;
        text-align: center;
        margin-right:2%; 
        `}
      >
        Music
      </Link>
      <Link
        to={`/blog/`}
        css={css`float: right; 
        display: inline-block; 
        min-width: 6vw; 
        color: black;
        text-align: center;
        margin-right:2%; 
        `}
      >
        Blog
      </Link>
      <Link
        to={`/about/`}
        css={css`float: right; 
        display: inline-block; 
        min-width: 6vw;  
        color: black;
        text-align: center;
        margin-right:2%; 
        `}
      >
        About
      </Link>
    </div>
  )
}