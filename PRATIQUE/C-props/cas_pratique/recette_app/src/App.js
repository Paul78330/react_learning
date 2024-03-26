import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import Recipe from './components/Recipe';
import Wrapper from './commons/Wrapper';
import Header from './commons/Header';
import './App.css';

function App() {
  const [selectedIngredients, SetselectedIngredients] = useState([]);

  const handleIngedientChange = (ingredient, isCheked) =>{
    if(isCheked){
      //Ajouter l'ingrédient sélectionnée
      SetselectedIngredients([...selectedIngredients, ingredient]);
    }else{
      //Retirer l'ingrédient déselectionné
      SetselectedIngredients(selectedIngredients.filter(i => i !== ingredient));
    }
  }

  return (
    <Wrapper>
      <Header title="Application de Recette de Cuisine"/>
      <IngredientSelector onIngredientChange={handleIngedientChange}/>
      <Recipe selectedIngredients={selectedIngredients}/>
    </Wrapper>
  )
}

export default App;
