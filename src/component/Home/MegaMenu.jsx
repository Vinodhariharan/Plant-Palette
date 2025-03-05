// Import React
import React from 'react';
import '../../assets/css/MegaMenu.css'; // Make sure to import your CSS file
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

// Define your MegaMenu component
const MegaMenu = () => {
  return (
    <div className="wrapper">
      <Container>
      <nav>
            <div class="logo"><a href="#">  Categories:</a></div>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <ul className="links">
            <li>
              <Link to='/productList/trendingPlants' className="desktop-link">Plants</Link>
              <input type="checkbox" id="show-plants" />
              <label htmlFor="show-plants">Plants</label>
              <ul>
                <li><Link className='pagemaps' to='/productList/flowers'>Flowers</Link></li>
                <li><Link className='pagemaps' to='/productList/shrubs'>Shrubs</Link></li>
                <li><Link className='pagemaps' to='/productList/trees'>Trees</Link></li>
                <li><Link className='pagemaps' to='/productList/indoorPlants'>Indoor Plants</Link></li>
                <li><Link className='pagemaps' to='/productList/seeds'>Seeds (Flower, Vegetable, Herb)</Link></li>
              </ul>
            </li>
            <li>
            <Link to='/productList/tools' className="desktop-link">Tools</Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">Tools</label>
              <ul>
                <li><Link className='pagemaps' to='/productList/EssentialTools'>Essential Tools</Link></li>
                <li><Link className='pagemaps' to='/productList/HelpfulTools'>Helpful Tools</Link></li>
                <li><Link className='pagemaps' to='/productList/UsefulTools'>Useful Tools</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/productList/containers' className="desktop-link">Containers</Link>
              <input type="checkbox" id="show-containers" />
              <label htmlFor="show-containers">Containers</label>
              <ul>
              </ul>
            </li>
            <li>
            <Link to='/productList/fertilizers' className="desktop-link">Fertilizers</Link>
              <input type="checkbox" id="show-soil-fertilizers" />
              <label htmlFor="show-soil-fertilizers">Soil and Fertilizers</label>
            </li>
          </ul>
        </div>
      </nav>
      </Container>

    </div>
  );
};

export default MegaMenu;
