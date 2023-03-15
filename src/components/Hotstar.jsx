import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";
  

const Hotstar = () => {
    return (
        <div class="flex-container">
        <div class="flex-item">
        <Card 
        key = {Carddata[7].id}
        img_card = {Carddata[7].img_card}
        title_card = {Carddata[7].title_card}
        genres_card = {Carddata[7].genres_card}
        watch_link = {Carddata[7].watch_link}
        alt_card = {Carddata[7].alt_card}
      />
        </div>
    </div>
    );
}

export default Hotstar;