import React from "react";
import Images from "./Images";

const butt = {
marginTop : "10px",
fontFamily : 'Roboto Condensed'
}

const Card = (props) => {
    console.log(props);
    return (
        <>
            <div className="outer-card">
                <div className="inner-card">
                    <Images img_card={props.img_card} alt_card={props.alt_card}/>

                        <div className="s-info">
                            <span><h2 className="size">{props.title_card}</h2></span>
                            <span className="gen">{props.genres_card}</span><br />
                            <a href={props.watch_link} rel="noreferrer" target="_blank">
                                <button style={butt} className="btn">Watch Now</button>
                            </a>
                        </div>
                </div>
            </div>
               

       



        </>
    );

}

export default Card;