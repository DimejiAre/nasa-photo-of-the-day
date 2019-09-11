import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {

  const [data, setData] = useState({})

  useEffect(()=>{
    axios.get('https://lambda-github-api-server.herokuapp.com/')
    .then(response => {
      setData(response.data)
    })
  },[])

  return (
    <div className="App">
      <Header />
      <Image 
      title={data.title}
      imageUrl={data.url}
      explanation={data.explanation}/>
      <Footer 
      copyright={data.copyright}
      date={data.date}/>
    </div>
  );
}

export default App;
