import React from "react";

function RTLogo(props) {
    return(
        <p><a href={props.rtLink} target="_blank" rel="noopener noreferrer"><img className="logo" src="./logo/rt_logo.png" alt=""/></a></p>
    );
}

export default RTLogo