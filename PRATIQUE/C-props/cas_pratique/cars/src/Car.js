// Car.js
import React from 'react';
import Wrapper from './Commons/Wrapper';
import ImgDim from './Commons/ImgDim';


const Car = ({ children, color, image}) => {
  const colorInfo = color ? color : 'Néant';

  return (
    <Wrapper>
      <p>Marque: {children} </p>
      <ImgDim src={image} alt={children} />
      <p>Couleur: {colorInfo}</p>
    </Wrapper>
  );
};

export default Car;

