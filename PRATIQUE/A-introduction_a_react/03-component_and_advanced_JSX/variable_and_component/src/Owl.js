import React from "react";

const owl = {
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};

function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img src={owl.src} alt="owl" />
    </div>
  );
}


export default Owl; //Exportation du composant Owl