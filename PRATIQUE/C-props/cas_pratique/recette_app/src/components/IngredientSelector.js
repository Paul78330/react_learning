import React from 'react';


const IngredientSelector = ({onIngredientChange}) => {

  //Liste des ingrédients disponibles
  const ingredients = ["Farine", "Sucre", "Oeufs", "Lait"];

  //Le composant doit retourner une liste de cases à cocher pour chaque ingrédient
  return (
    <div>
      <h3>Sélectionnez vos ingrédients :</h3>
      {
        ingredients.map(ingredient => (
          //Pour chaque ingrédient, on crée une case à cocher avec le nom de l'ingrédient comme label
          <label key={ingredient} style={{display : 'block', margin: '5px'}}>
            <input 
              type="checkbox"
              value={ingredient}
              //Lorsque la case à cocher est cliquée, on appelle la fonction onIngredientChange avec le nom de l'ingrédient et l'état de la case à cocher (cochée ou non)
              onChange={(e) => onIngredientChange(e.target.value, e.target.checked)}
            /> {ingredient}
          </label>

        ))}
    </div>
  )
}


export default IngredientSelector