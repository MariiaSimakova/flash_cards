import './App.css';
import React from "react";
import Header from './components/header';
import VocabList from './components/vocab_list';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
