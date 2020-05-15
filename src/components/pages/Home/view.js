import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Home = () => {
  return (
    <section className="Home">
      <Link to={'/weather-charts'} className="Home__hero">
        <h2 className="Home__hero-title">Consulte el tiempo en diferentes lugares</h2>
        <span role="img" aria-label="" className="Home__hero-emojis">⛅ 🛰️ ❄️ 🌧️ 🌪️ 🌞 </span>
      </Link>
    </section>
  );
};

export default Home;
