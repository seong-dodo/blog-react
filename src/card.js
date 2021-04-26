import image from './image.JPG';
import heeya from './heeya.JPG';
import CardDetail from './cardDetail.js';
import React, { useState } from 'react';
import './App.css';

function Card(props) {
  const [cardDetailUI, onCardDetailUI] = useState(false);

  return (
    <div className="Card">
      <div className="UserDate"><img src={heeya} width='15' height='15'></img>   heeya </div>
      <h3> {  props.title.title } </h3>
      <p> { props.title.time } </p>
      <img src={image} width='250' height='250' />
      <div className="Connection"><span className="Like">🧡 </span><span onClick={() => { onCardDetailUI(!cardDetailUI) }} className="TextBtn">🙋🏻‍♀️</span></div>
      {
        cardDetailUI === true
          ? <CardDetail />
          : null
      }

    </div>
  )
}


export default Card