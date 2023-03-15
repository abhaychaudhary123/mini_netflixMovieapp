import React from "react";
import Amazon from "./Amazon";
import Card from "./Card";
import Carddata from "./Carddata";
import Hotstar from "./Hotstar";
import Netflixshows from "./Netflixshow";
import Otherseries from "./Otherseries";

const Alls = () => {
    return (
        <div class="flex-container">
        <div class="flex-item">
       
        <Card 
        key = {Carddata[0].id}
        img_card = {Carddata[0].img_card}
        title_card = {Carddata[0].title_card}
        genres_card = {Carddata[0].genres_card}
        watch_link = {Carddata[0].watch_link}
        alt_card = {Carddata[0].alt_card}
      />
        </div>
    
        <div class="flex-item">
        <Card 
        key = {Carddata[2].id}
        img_card = {Carddata[2].img_card}
        title_card = {Carddata[2].title_card}
        genres_card = {Carddata[2].genres_card}
        watch_link = {Carddata[2].watch_link}
        alt_card = {Carddata[2].alt_card}
      />
        </div>
    
        <div class="flex-item">
        <Card 
        key = {Carddata[3].id}
        img_card = {Carddata[3].img_card}
        title_card = {Carddata[3].title_card}
        genres_card = {Carddata[3].genres_card}
        watch_link = {Carddata[3].watch_link}
        alt_card = {Carddata[3].alt_card}
      />
        </div>
    
        <div class="flex-item">
        <Card 
        key = {Carddata[4].id}
        img_card = {Carddata[4].img_card}
        title_card = {Carddata[4].title_card}
        genres_card = {Carddata[4].genres_card}
        watch_link = {Carddata[4].watch_link}
        alt_card = {Carddata[4].alt_card}
      />
        </div>
    
        <div class="flex-item">
        <Card 
        key = {Carddata[6].id}
        img_card = {Carddata[6].img_card}
        title_card = {Carddata[6].title_card}
        genres_card = {Carddata[6].genres_card}
        watch_link = {Carddata[6].watch_link}
        alt_card = {Carddata[6].alt_card}
      />
        </div>
        
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

export default Alls;