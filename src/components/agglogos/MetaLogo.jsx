import React from "react";

function MetaLogo(props) {
    return(
        <p><a href={props.metaLink} target="_blank" rel="noopener noreferrer"><img className="logo" src="./logo/meta_logo.png" alt=""/></a></p>
    );
}

export default MetaLogo