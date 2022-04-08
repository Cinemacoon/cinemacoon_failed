import React from "react";

function ImdbLogo(props) {
    return(
        <p><a href={props.imdbLink} target="_blank" rel="noopener noreferrer"><img className="logo" src="./logo/imdb_logo.png" alt=""/></a></p>
    );
}

export default ImdbLogo