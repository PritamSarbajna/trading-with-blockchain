import React from 'react';
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
