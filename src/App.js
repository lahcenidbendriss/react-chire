import React from 'react';
import './App.css'
import {   BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './compenet/Home';
import Product from './compenet/Product';
import Info from "./info_produit/info";
import Register from "./Register/Register"
import Contact from './compenet/Contact';


function App(){
    return(
        <>
        

            <Router>
                <div>
                <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/info/:id" element={<Info/>} />
                <Route path="/register" element={<Register/>} />
                </Routes>
                </div>

            </Router>



        
        

        </>
    );
}
export default App;
