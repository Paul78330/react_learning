// Importation des dépendances et des données
import { animals } from './animals';
import React from 'react';

// Titre initial
const title = '';

// Image de fond
const background = <img className="background" alt='ocean' src='/images/ocean.jpg'/>;

// Fonction pour afficher un fait aléatoire sur l'animal cliqué
function displayFact(e){

  //Récupération de l'animal à partir de l'attribut alt de l'image cliquée
  const animal = e.target.alt; //starfish

  // Sélection d'un fait aléatoire sur l'animal
  const index = Math.floor(Math.random() * animals[animal].facts.length)
  const funFact = animals[animal].facts[index];

  //Affichage du fait dans l'élement avec l'ID 'fact'
  const p = document.getElementById('fact');
  p.innerHTML = "Here's a fun fact : " + funFact //innerHTML permet d'écrire dans une balise
  
}


// Création des images pour chaque animal
const images = [];

//Boucle de création des images
for(const animal in animals){
    const image = (

      <img
        onClick={displayFact}
        key={animal} //1er tour de boucle = dolphin
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
      />
    );
    images.push(image); //grace à la méthode push propre au Array, je peux pousser image dans le tableau images
  }

const showBackground = true;


// Composant principal
function AnimalFacts() {
  return (
    <div>
      <h1>{title}</h1>
      {showBackground && background} 
      {/* Affichage de l'image de fond si et seulement si showBackground est vrai (true) */}
      <p id='fact'></p>
      <div className='animals'>{images}</div>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default AnimalFacts;

