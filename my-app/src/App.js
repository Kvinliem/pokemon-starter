import React from 'react'
import Header from './components/header'
import Nav from './components/nav'
import Main from './components/main'
import Footer from './components/footer'
import './App.css';

const App = () => {
  return (
    <>
      <Header title={'Pokemon starter'} class='header'/>
      <Nav />
      <Main class='main'/>
      <Footer class='footer'/>
    </>
  );
}

export default App;
