import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import PhotoCard from "./Components/PhotoCard"


function App() {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {

      axios.get(`https://api.nasa.gov/planetary/apod?api_key=Sd5n5ASCULappBOEteSS7gUvxl6Tbul4MKD9dtYS`)
      .then(res => {
        console.log(res.data);
        setNasaImg(res.data);
      });
  
    }, []);
    
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <PhotoCard title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date} /> 

    </div>
  );
}
export default App;