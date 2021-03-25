// TODO 

// ADD: Styled Components to links?
// Currently: Used as a HEADER 

import React from 'react'
import './loop.css';
import { css } from "@emotion/react"
import { Link } from "gatsby";
// import './loop.js' // this one works on first load

export default function Loopingtext() {
    return (
        <div id="outer">
            
            {/* <!-- This div is important! It lets us specify margin-left as percentage later on. --> */}
            <div>
                <div id="loop"><div id="content">roy jara&nbsp;</div></div>
            </div>
                <Link
                    to={`/about/`}
                    css={css`float: right; 
                    display: inline-block; 
                    min-width: 6vw; 
                    margin-right:2%; 
                    color: black;
                    text-align: center;`}
                >
                    About
                </Link>
                <Link
                    to={`/blog/`}
                    css={css`float: right; 
                    display: inline-block; 
                    min-width: 6vw; 
                    margin-right:2%; 
                    color: black;
                    text-align: center;
                    `}
                >
                    Blog
                </Link>
                <Link
                    to={`/music/`}
                    css={css`float: right; 
                    display: inline-block; 
                    min-width: 6vw; 
                    margin-right:2%; 
                    color: black;
                    text-align: center;`}
                >
                    Music
                </Link>
        </div>
    )
}
