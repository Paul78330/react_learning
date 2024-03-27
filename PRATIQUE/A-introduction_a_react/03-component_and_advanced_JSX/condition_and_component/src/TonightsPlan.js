//Objectif : créer un composant qui affiche un message différent, qui sera 50% du temps "true" et 50% du temps "false". En fonction de cette condition, le composant affichera "Tonight I'm going out WOOO" ou "Tonight I'm going to bed WOOO".

//1- importer mes dépendances
import React from "react";

const fiftyFifty = Math.random() < 0.5;
//Ce code génère un booléen fiftyFifty qui est true environ 50% du temps et false environ 50% du temps.

//2- Créer mon composant
function TonightsPlan(){
  return(
    <h1>
      Tonight I'm going {fiftyFifty ? "out" : "to bed"} WOOO
    </h1>
  )
}

//3- Exporter mon composant
export default TonightsPlan;