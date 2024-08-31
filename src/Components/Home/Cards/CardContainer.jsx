
import Card from "./Card";
import { CardContainer } from "./Card.style";
import "./CardContainer.css";
import React from 'react';

const Cards = () => {
  return (
    <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
    </CardContainer>
  )
}

export default React.memo(Cards);
