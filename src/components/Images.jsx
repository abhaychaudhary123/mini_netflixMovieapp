import React from "react";

const Images = (props) => {
    return <img className="io" src={props.img_card} alt={props.alt_card} style={{fontSize:"17px",fontFamily:'Roboto Condensed'}} />;
}

export default Images;