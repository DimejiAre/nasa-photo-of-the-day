import React from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {
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
