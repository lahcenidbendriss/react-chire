import React, { useEffect, useState} from "react";
import Navbarcomp from "../compenet/NavbarComp";
import './info.css';
import { useDispatch,useSelector } from "react-redux";
import { deleteChair, fetchchair } from "../redux/actionChair";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cards from "../compenet/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';


function Info() {
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(fetchchair())
    },[dispatch])
    
    const products=useSelector(state=>state.products)
    const erreur=useSelector(state=>state.erreur)
    const loading=useSelector(state=>state.loading)
    const {id}=useParams()
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }else{
            setCount(0);
        }
    };




    return (
        <>
            <Navbarcomp />
            <div>
                <h1> Chaise  <Link to={Cards}><button className="back"><FontAwesomeIcon icon={faLeftLong} /> Back</button></Link></h1>
                {loading &&<p style={{fontSize:"50px",marginLeft:"500px"}}>chargement.....</p>}
                {erreur &&<p style={{color:"red"}}>{erreur}</p>}
                {(loading===false && !erreur)&&<div>
                <table border="1" className="tabel-content">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Categorie</th>
                            <th>Quantity</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.filter(p=>p.id===parseInt(id)).map(p=>{
                            return(<tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.Price}</td>
                            <td>{p.type}</td>
                            <td>{p.categorie}</td>
                            <td>
                                <button className="inc" onClick={increment}>+</button>
                                <span>{count}</span>
                                <button className="inc" onClick={decrement}>-</button>
                            </td>
                            <td><button className="b1"  onClick={()=>dispatch(deleteChair(p.id))}>delete</button></td>
                        </tr>)})}
                    </tbody>
                </table>
                <h2 style={{marginLeft:"50px",marginTop:"40px"}}>- All Products :</h2>
                <table border="1" className="tabel-content-1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Categorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p,index)=>{return(<tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td className="desc">{p.description}</td>
                            <td>{p.Price}</td>
                            <td>{p.type}</td>
                            <td>{p.categorie}</td>
                            {/* <td><button onClick={()=>dispatch(deleteChair(p.id))}>delete</button></td> */}
                        </tr>)})}
                    </tbody>
                </table>
                </div>}
            </div>
        </>
    );
}

export default Info;