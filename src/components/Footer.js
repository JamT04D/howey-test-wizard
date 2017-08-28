import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="rights">2017 Oracles. All rights reserved.</p>
      <Link className="logo" to='/'></Link>
      <div className="socials">
        <a href="#" className="social social_reddit"></a>
        <a href="#" className="social social_twitter"></a>
        <a href="#" className="social social_oracles"></a>
        <a href="#" className="social social_telegram"></a>
        <a href="#" className="social social_github"></a>
      </div>
    </div>
  </footer>
)
