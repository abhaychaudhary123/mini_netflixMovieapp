import React from "react";
import Card from "./Card";
import Carddata from "./Carddata";
  

const Otherseries = () => {
    return (
        <div class="flex-container">
      <div class="flex-item">
          <Card 
          key = {Carddata[1].id}
          img_card = {Carddata[1].img_card}
          title_card = {Carddata[1].title_card}
          genres_card = {Carddata[1].genres_card}
          watch_link = {Carddata[1].watch_link}
          alt_card = {Carddata[1].alt_card}
        />
      </div>
    </div>
    );
}

export default Otherseries;