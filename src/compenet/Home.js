import React from "react";
import Titel from './Titel';
import Cards from './Cards';
import Footer from './Footer';

import './Home.css';

import NavbarComp from './NavbarComp';


import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () =>{
    const scrollToBottom = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });

    };
    return(
        <>
                <div className="home-bg">
           
            
                
                <NavbarComp scrollToBottom={scrollToBottom}/>
                <Titel/>
                <Cards/>
                
                <Footer/>
               


                
                
                


                
                </div>
                </>



                
                


            

        
    );
};
export default Home;