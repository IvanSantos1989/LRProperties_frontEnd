import React from 'react';
import Navbar from './components/Navbar';
import '/src/index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1></h1>
      </header>
      <div className="properties-listing">
        <div className="filter-bar">
          <span>All rentals</span>
          <button className="add-filter">Add filter option</button>
          <span>6 properties match</span>
          <button className="export">Export</button>
        </div>
        <div className="properties">
          <PropertyCard
            title="3 Industrial Road"
            location="Boston, MA"
            description="Very big flat almost 100 m, with kitchen 14 m and big bathroom. New task..."
            price="$1,250,000"
          />
          <PropertyCard
            title="Tenuta di Petriolo"
            location="NYC - Manhattan"
            description="Once-in-a-lifetime opportunity to create a 52-ft wide megamansion in the..."
            price="$410,000"
          />
          <PropertyCard
            title="5 BD Condo in Tribeca"
            location="New York"
            description="Very big flat almost 100 m, with kitchen 14 m and big bathroom. New task..."
            price="$2,100,000"
          />
          <PropertyCard
            title="Reflecting the rich"
            location="USA, Edenshore"
            description="Very big flat almost 100 m, with kitchen 14 m and big bathroom. New task..."
            price="$4,050,000"
          />
        </div>
      </div>
    </div>
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
      </div>
    </div>
  );
}

export default App;