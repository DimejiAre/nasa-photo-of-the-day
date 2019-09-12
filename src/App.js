import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
// import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";
import DatePicker from "./components/DatePicker";

const StyledApp = styled.div`
  text-align: center;
  margin: 0 auto;
  background-color: whitesmoke;
`;

function App() {

  const todaysDate = new Date().toISOString().substr(0, 10);

  const [data, setData] = useState({});
  const [date, setDate] = useState(todaysDate);

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + '&date=' + date)
    .then(response => {
      setData(response.data)
    })
  },[date])

  return (
    <StyledApp>
      <Header />
      <DatePicker 
      date={date}
      setDate={setDate}/>
      <Image 
      title={data.title}
      imageUrl={data.url}
      explanation={data.explanation}/>
      <Footer 
      copyright={data.copyright}
      date={data.date}/>
    </StyledApp>
  );
}

export default App;
