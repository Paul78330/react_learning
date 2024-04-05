import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utils/Utilities';

export function AddThoughtForm(props){
  const [text, setText] = useState('');

  const handleTextChange = ({target}) => {
    const {value} = target //référence à l'input, récupère la valeur de l'input
    setText(value) //modifie le state text en lui passant la valeur de l'input
  }

  const handleSubmit = (event) => {
    event.preventDefault() //empêche le rechargement de la page
    if(text.length){
      const thought = {
        id : generateId(),
        text : text,
        expiresAt : getNewExpirationTime()
      }
      props.addThought(thought);//appelle la fonction addThought de App.js en lui passant le thought nouvellement créé
  
      setText(''); //reset le champs par une chaîne vide
    }else{
      alert("Veuillez écrire une pensée");
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value = {text}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  )
}