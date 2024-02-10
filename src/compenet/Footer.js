import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <>
        <div className="general-footer">
        <footer>
      <div className="footer">
        <div className="row">
          <a href="https://example.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://example.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://example.com"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://example.com"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="row">
          <ul>
            <li><a href="https://example.com">Contact us</a></li>
            <li><a href="https://example.com">Our Services</a></li>
            <li><a href="https://example.com">Privacy Policy</a></li>
            <li><a href="https://example.com">Terms & Conditions</a></li>
            <li><a href="https://example.com">Career</a></li>
          </ul>
        </div>
        <div className="row">
          INFERNO Copyright © 2024 Inferno - All rights reserved   || Designed By: Lahcen idbedriss   &   Yassin Hammouche
        </div>
      </div>
    </footer>
    </div>
        </>
    )
}
export default Footer