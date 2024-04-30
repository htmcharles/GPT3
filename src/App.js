import React from 'react';

import { Footer,Blog,Possibility,Feature,WhatGTP3,Header} from './containers';
import { Cta,Brand,Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Feature />
      <Possibility />
      <Cta />~
      <Blog />
      <Footer />
    </div>
  )
}

export default App
