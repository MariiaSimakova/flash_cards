import './App.css';
import React from "react";
import data from './data';
import Header from './components/Header/Header';
import VocabList from './components/VocabList/VocabList';
import Footer from './components/Footer/Footer';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <>
          <Header />
          <main className="main">
            <CardList data={data} />
            <VocabList data={data} />
          </main>
          <Footer />
    </>
  );
}

export default App;
