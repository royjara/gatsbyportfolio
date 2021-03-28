// INDEX/HOMEPAGE : 

// Desktop 
// - very close to completion. 
// - need to stop text from collapsing if window width is too large

// Mobile
// - still needs some work. 
// - compress title, make footer show up w/o scrolling

import React from "react"
import { css } from "@emotion/react"
import FullscreenLayout from "../components/fullscreenlayout"
import bgimage from "../images/home_bg2.gif"

export default function Home() {

  return (

    <div
    css={css`
    min-height: 100vh;
    background: url(${bgimage});
    background-repeat: no-repeat;
    background-position: center; 
    `}>
      <h1
        css = {css`
        font-family: 'cambria';
        font-weight: light;
        font-size: 10rem;
        letter-spacing: -1vw;
        text-align: center;
        line-height: 35vh;
        color: orange
        `}
        >TENSE SALT NATION
      </h1>
      <FullscreenLayout css={css`
        position: absolute;
        bottom:0;
      `} />
    </div>
    
  )
}
