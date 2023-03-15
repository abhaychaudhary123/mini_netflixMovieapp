
import { useState } from "react";
import "./App.css";
import Alls from "./components/All";
import Amazon from "./components/Amazon";
import Hotstar from "./components/Hotstar";
import Netflixshows from "./components/Netflixshow";
import Otherseries from "./components/Otherseries";

// const netflixcard = (val) =>
// {
//   return(
//     <>
//     <Card 
//       img_card = {val.img_card}
//       title_card = {val.title_card}
//       genres_card = {val.genres_card}
//       watch_link = {val.watch_link}
//       alt_card = {val.alt_card}
//     />

     
//     </>
    
          
//   )
// }











const App = () => {
  
  
  const [curr,setChange] = useState("all");

  
 
  const changeEve = (e) => {
    var option = e.target.value;
    setChange(option);
    console.log(option);
   
  }

  
const Show = () => {
  if(curr === "netflix")
  {
    return ( <Netflixshows />);
  }
  else if(curr === "hotstar")
  {
    return(<Hotstar />);

  }
  else if(curr === "all")
  {
    return(<Alls />);

  }
  else if(curr === "amazon")
  {
    return(<Amazon />);

  }
  else
  {
    return(<Otherseries />);
  }
  }

 

  return (
    <>
      <div className="backHead">
      <h1 className="topHead">Top Series of All Time 📺</h1>
          <div className="choose"><select className="choose" onChange={changeEve}>
              <option value="all">All</option>
              <option value="netflix">Netflix</option>
              <option value="hotstar">Hotstar</option>
              <option value="amazon">Amazon</option>
              <option value="other">Other</option>
            </select>
          </div>
      </div>

      {/* {Carddata.map(netflixcard)} */}

      <Show />
    </>
  );

}

export default App;