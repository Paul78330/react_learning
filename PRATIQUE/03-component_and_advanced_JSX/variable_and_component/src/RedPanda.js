import React from 'react'; //Import de la librairie React

const redPanda = {
  title: "Super beau Panda",
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '400px'
};

function RedPanda(){

  return(
    <div>
      <h1>{redPanda.title}</h1>
      <img 
        src={redPanda.src}
        alt={redPanda.alt}
        width={redPanda.width}
      />
    </div>
  )
}

export default RedPanda; //Exportation du composant RedPanda