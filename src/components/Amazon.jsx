import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";
  

const Amazon = () => {
    return (
        <div class="flex-container">
        <div class="flex-item">
            <Card 
            key = {Carddata[5].id}
            img_card = {Carddata[5].img_card}
            title_card = {Carddata[5].title_card}
            genres_card = {Carddata[5].genres_card}
            watch_link = {Carddata[5].watch_link}
            alt_card = {Carddata[5].alt_card}
          />
        </div>
      </div>
    );
}

export default Amazon;