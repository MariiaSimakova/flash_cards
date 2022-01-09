import './App.css';
import React from "react";
import data from './data';
import Header from './components/Header';
import VocabList from './components/VocabList';
import Card from './components/Сard';
import Footer from './components/Footer';

function App() {
  return (
    <>
          <Header />
          <main className="main">
            <Card {...data[5]} />
            <VocabList/>
          </main>
          <Footer />
    </>
  );
}

export default App;
