//Ce composant crée un tableau d'objets représentant des voitures et les affiche en utilisant le composant Car. Chaque voiture a une marque et une couleur spécifiées.

import React from "react";
import Car from "./Car";
import MyHeader from "./Commons/MyHeader";

const Garage = (props) => {
  const cars = [
    {
      brand: "Peugeot",
      color: "rouge",
      image: "https://www.largus.fr/images/images/peugeot-3008-2020-gt-rouge-vue-av.jpg"
    },
    {
      brand: "Citroën",
      color: "bleu",
      image: "http://www.actu-automobile.com/wp-content/gallery/citroen_c4_hdi_150_exclusive_plus/Citroen_C4_HDI_150_18.jpg"
    },
    {
      brand: "Tesla",
      color: "",
      image:"https://tse3.mm.bing.net/th?id=OIP.wWTeVHFJIyVHUqE3hb-mRAHaE8&pid=Api&P=0&h=180"
    },
  ];

  return (
    <MyHeader myStyle={props.color}>
      {props.title}
      {cars.map((car, index) => (
        <Car key={index} color={car.color} image={car.image}>
          {car.brand}
        </Car>
      ))}
    </MyHeader>
  );
};

export default Garage;
