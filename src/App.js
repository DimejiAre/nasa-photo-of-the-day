import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    axios.get('https://lambda-github-api-server.herokuapp.com/')
    .then(response => {
      setData(response.data)
    })
  },[])

  console.log(data)

  return (
    <div className="App App-header">
      <Header />
      <Image 
      title='Test title'
      ImageUrl='Test Url'
      explanation='No explanation'/>
      <Footer 
      copyright='Dimeji'
      date='11/11/11'/>
    </div>
  );
}

export default App;
