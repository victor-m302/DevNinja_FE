import React from 'react';

import Menu from './components/menu.jsx'
import Section from './components/Section.jsx'
import Header from './components/Header.jsx'
import Test from './components/Test.jsx'
import './App.css';


function App() {
  return (
    <div>

      <nav>
        <Menu/>
      </nav>
      <Header/>
      <Test/>
      <section>
        <Section Conteudo="Destaques"/>
      </section>
      </div>

  );
}

export default App;
