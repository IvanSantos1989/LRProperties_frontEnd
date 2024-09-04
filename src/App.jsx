import React from 'react';
import '/src/index.css';
import Search from './components/Search';
import NewestDeals from './components/NewestDeals';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className="App">
      <div className="w-11/12 md:w-4/5 m-auto">
      <Search />
      <NewestDeals />
      <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;