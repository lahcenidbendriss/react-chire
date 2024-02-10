import React from "react";
import NavbarComp from './NavbarComp';
import Rouge from '../imageys/Rouge12.png';
import './Product.css';
import Cards from "./Cards"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css'

const Product = () =>{
    return(
        <>
                <div>
                <NavbarComp/>
        <div><Link to="/"><button className="back1"><FontAwesomeIcon icon={faLeftLong} /> Back</button></Link></div>    
          <div className="about">
            <div className="text-main"> <img src={Rouge} alt="imageys"  className="min-png"/>
            <div className="text-about"><h5 className="chiare-titel">Chairs Online at the Best Prices</h5>
            <p className="paragraphe-style">Everyone wants to feel comfortable, right? Well, trying to find comfort in a table
              chair is a difficult task! We make it simple for you at ofppt. Do you want to buy chairs online to help unwind 
              after a long day at work. Or you need a perfect chair for the office that will let you work long hours undisturbed. 
              You can find the perfect chair at ofppt. 
              It makes a difference to have a good chair! We believe that chairs can make or break a room, 
              and within the Ofppt furniture range, ofppt has the best chair for you. We provide options 
              that are affordable, long-lasting, and fashionable. Our extensive collection has designer 
              chairs for every back in the home! Our clever chair designs will gel with your minimal, modern, 
              contemporary, or extravagant aesthetics. Our chair collection features stylish ofppt chairs for 
              the living room to an office chair. Buy chairs online that are comfortable, attractive, and reasonably priced!
              </p>
              <Link to={Cards}><button className="buy-btn-card">Let's Buy</button></Link>
            </div>
            </div>


           </div>

        </div>
        </>

    );
};
export default Product;