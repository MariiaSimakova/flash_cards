import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import data from './data';
import Layout from '../src/components/Layout/Layout'
import VocabList from './components/VocabList/VocabList';
import CardList from './components/CardList/CardList';
import Page404 from './components/Page404/Page404'


function App() {
  return (
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<VocabList />}/>
                <Route path="vocabulary" element={<VocabList />}/>
                <Route path="cards" element={<CardList data={data} />}/>
                {/* <Route path="/categories" element={}/> */}
                <Route path="*" element={<Page404 />} />
                <Route index element={<VocabList />} />
              </Route>
          </Routes>
        </>
      </BrowserRouter>
  );
}

export default App;
