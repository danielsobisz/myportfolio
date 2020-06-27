import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__credits-container">
        <a href="tel:721404114" className="credits__phone-number">
          +48 721 404 114
        </a>
      </div>
      <div className="footer__credits-container footer__credits-container--bigger-width">
        <p className="credits__name">
          <span className="name--border-bottom"> made by: daniel sobisz</span>
        </p>
      </div>
      <div className="footer__credits-container">
        <p className="credits__copyrights">&copy; all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
