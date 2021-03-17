import React from 'react'
import './loop.css';
// import './loop.js' // this one works on first load

/* {
TODO: Animated text that loops along entire width of page.
very y2k

} */


export default function Loopingtext() {
    return (
        <div id="outer">
            
            {/* <!-- This div is important! It lets us specify margin-left as percentage later on. --> */}
            <div>
                <div id="loop"><div id="content">text with questionble purpose&nbsp;</div></div>
            </div>
        </div>
    )
}
