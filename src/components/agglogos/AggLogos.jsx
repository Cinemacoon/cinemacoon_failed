import React from "react";
import ImdbLogo from "./ImdbLogo";
import MetaLogo from "./MetaLogo";
import RTLogo from "./RTLogo";

function AggLogos(props) {
    return(
        <div className="col-2 agg_logos">
        <ImdbLogo imdbLink={props.imdbLink}/>
        <MetaLogo metaLink={props.metaLink}/>
        <RTLogo rtLink={props.rtLink}/>
      </div>
    );
}

export default AggLogos