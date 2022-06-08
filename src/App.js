import React, { useEffect, useState,  } from "react";
import "./App.css";

function App() {
  const [values, setValue] = useState("");
  const[results, setResults]=useState([]);

  const fetchImages = () => {
    
    fetch(
      `https://api.unsplash.com/search/photos?client_id=ou3CgJdF6-TxpWpAWNwlV_d_BML0ef2Ah_34WNyUsd0&query=${values}&orientation=squarish&per_page=200`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }
;
  return (
    <div className="App">
      <div className="box">
        <span>search:</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={values}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => fetchImages()}>send</button>
      </div>
      <div className="gallery">
        {
          results.map((item)=>{
            return <img className="items" key={item.id} src={item.urls.regular}  />
        })
      }
      </div>
    </div>
  );
}

export default App;
