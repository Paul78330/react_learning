import React, {useState} from 'react';

function Contact(){

    //Définition de mot de passe
    const password = 'swordfish';

    //Utilisation du Hook d'état pour gérér l'autorisation
    const [authorized, setAuthorized] = useState(false);

    //Fonction de gestion de la soumission du formulaire
    function handleSubmit(e){
      //Récupération du mot de passe entré par l'utilisateur
      const enteredPassword = e.target.querySelector('input[type="password"]').value;

    //Vérification du mot de passe
    const auth  = enteredPassword == password; //true ou false

    //Mise à jour de l'état d'autorisation
    setAuthorized(auth); //true ou false
    }


    //Défition du formulaire de connexion
    const login = (
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="mot de passe" />
        <input type="submit" />
      </form>
    )
  
    // Définition des informations de contact
    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    //Rendu du composant
    return(
      <div id="authorization">
        <h1>{authorized ? "Contact" : "Entre the Password"}</h1>
        {authorized ? contactInfo : login}
      </div>
    )
}


export default Contact;