import React, { useEffect } from "react";
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faSmile, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import {fetchchair } from "../redux/actionChair";
import { useDispatch } from "react-redux";






function Cards(){
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchchair())
    },[dispatch])
    
    const products=useSelector(state=>state.products)

  const coralColor = 'rgb(252, 70, 4)'
    return(
        <>
        <div className="container">
<div class="row">
  {products.map((p)=>{return(<div class="column">
    <div class="card">
      <img src={p.image} alt="imageys"  className="Rouge01"/>
      <p>{p.name} </p>
    <Link to={`/info/${p.id}`}><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>)})}
  {/* <div class="column">
    <div class="card">
      <div></div>
      <img src={Rouge} alt="imageys"  className="Rouge01"/>
      <p>Chaise Rouge ThunderX3 Gamer red </p>
    <Link to="/info/1"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={noir} alt="imageys"  className="noir02"/>
      <p>Cougar noir Armor  Gaming ONE Black </p>
    <Link to="/info/2"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={bluue} alt="imageys"  className="bluue03"/>
      <p>Chaise for play ThunderX3 Gamer Blue </p>
    <Link to="/info/3"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={jaune} alt="imageys"  className="jaune04"/>
      <p>Chaise yellow ThunderX3 Gamer jaune </p>
    <Link to="/info/4"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={vers} alt="imageys"  className="vers05"/>
      <p>Chaise for play Thunder Gamer Green </p>
    <Link to="/info/5"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={pink} alt="imageys"  className="pink06"/>
      <p>Chaise Rose Thunder4-D Gamer Pink </p>
    <Link to="/info/6"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={orange} alt="imageys"  className="orange07"/>
      <p>Chaise for Play Thunder4-D  Orange </p>
    <Link to="/info/7"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div> </div>
      <img src={blue} alt="imageys"  className="blue08"/>
      <p>Chaise Blue-Ciel ThunderX3 Gamer blue </p>
    <Link to="/info/8"><button className="buy-btn-card">Buy NOW</button></Link>
    </div>
  </div> */}
  

</div>
</div> 
<div className="descriptions-container">
        <div className="description">
          <FontAwesomeIcon icon={faTruck} size="4x" color={coralColor} />
          <h3>Livraison à Domicile</h3>
          <p>Profitez de la livraison rapide et sécurisée directement à votre domicile.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faCreditCard} size="4x"  color={coralColor} />
          <h3>Paiement</h3>
          <p>Choisissez parmi nos options de paiement sécurisées pour une expérience sans souci.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faSmile} size="4x" color={coralColor} />
          <h3>Satisfaction Client</h3>
          <p>Votre satisfaction est notre priorité. Nous nous efforçons de vous offrir la meilleure expérience.</p>
        </div>
        <div className="description">
          <FontAwesomeIcon icon={faHeadset} size="4x" color={coralColor} />
          <h3>Service Client</h3>
          <p>Notre équipe de service client est disponible pour répondre à vos questions et résoudre vos problèmes.</p>
        </div>
      </div>









        

        </>

    );
}
export default Cards