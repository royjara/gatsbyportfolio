// INDEX/HOMEPAGE : 

//       Make big bright y2k title for both desktop & mobile
// overlay footer - scroll down

import React from "react"
import { css } from "@emotion/react"
import FullscreenLayout from "../components/fullscreenlayout"

export default function Home() {
  return (
    <div>
      <h1
        css = {css`
        font-family: 'Helvetica';
        font-weight: normal;
        font-size: 25.5vw;
        letter-spacing: -2vw;
        text-align: center;
        min-height: 100vh;
        line-height: 33vh;
        color: orange
        `}
        >TENSE SALT NATION
      </h1>
      <FullscreenLayout />
    </div>
    
  )
}