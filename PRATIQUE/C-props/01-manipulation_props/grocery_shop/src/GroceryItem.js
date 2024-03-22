import React from 'react';

function GroceryItem({name}){

  //gestionnaire d'event onClick
  const handleClick = () => {
    alert(`${name} a été ajouté au panier.`)
  }


  // Rendu du bouton avec le nom de l'article d'épicerie
  return <button onClick={handleClick}>{name}</button>
}

export default GroceryItem;
