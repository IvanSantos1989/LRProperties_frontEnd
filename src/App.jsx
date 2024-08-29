import React from 'react';
import Navbar from './components/Navbar';
import '/src/index.css';
import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import NewestDeals from './components/NewestDeals';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BestDeals from './components/BestDeals';

const App = () => {
  return (
    <><div className="App">
      <div className="w-11/12 md:w-4/5 m-auto">
      <Search />
      <NewestDeals />
      <AboutUs />
      <BestDeals />
      </div>
      <Footer />
    </div>

    <div className="app">
        <Navbar />
        <header className="header">
          <h1></h1>
        </header>
        <div className="properties-listing">
          <div className="filter-bar">
            <span>Todos</span>
            <button className="add-filter">Filtrar</button>
            <span>8 propriedades encontradas</span>
          </div>
          <div className="properties">
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
            <PropertyCard
              title="Alojamento Local"
              location="Porto, Portugal"
              description="Um apartamento muito grande quase 100 m, com cozinha 14 m e casa de banho grande."
              price="€50,00 por noite" />
          </div>
        </div>
        <footer>
          <p>© 2024 LR Properties | Todos os Direitos Reservados</p>
        </footer>
      </div></>
  );
}



function PropertyCard({ title, location, description, price }) {
  return (
    <div className="property-card">
      <div className="property-image" />
      <div className="property-details">
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button className="btn">Reservar</button>
        <button className="saiba-mais-button">Saiba Mais</button>
      </div>
    </div>
  );
}

export default App;