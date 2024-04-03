// Ce module exporte une fonctionnalité de récupération de fausses données.
// Dans une vraie application, cela récupérerait des données sur Internet, mais
// ce module attend juste un peu avant de répondre.

//Importattion des données factices
import DATA from "./data";

//Fonction pour simuler une requête réseau (GET)
export function get(endpoint) {
  //générer un délai aléatoire pour simuler une latence réseau entre 0 et 1000 ms
  const delay = Math.floor(Math.random() * 1000);

  //Retourner une nouvelle promesse
  return new Promise((resolve, reject) => {
    //Exécute le code après un certain délai spécifié
    setTimeout(() => {
      //Vérifie si le point de terminaison est valide
      if(!DATA.hasOwnProperty(endpoint)) {
        //Si le point de terminaison n'est pas valide, génère une liste de points de terminaison valides
        const validEndpoints = Object.keys(DATA) //Récupère les clés de l'objet DATA
          .map((endpoint) => ` - ${endpoint}`) //Transforme chaque clé en une châine de caractères
          .join("\n"); //Joint toutes les chaînes en une seule chaîne de caractères avec un saut de ligne entre chaque élément. cela créer une liste formatée de points de terminaison valides, où chaque point de terminaison est sur une nouvelle ligne

          /**
         * Dans ce contexte, endpoint est une chaîne de caractères qui représente un point de terminaison d'une API. Un point de terminaison d'API est une URL spécifique où une API peut être accédée. Par exemple, dans une API météo, vous pourriez avoir un point de terminaison /daily pour obtenir les prévisions quotidiennes et un point de terminaison /hourly pour obtenir les prévisions horaires.

        Dans ce code, endpoint est utilisé pour récupérer des données spécifiques de l'objet DATA. Si DATA a une propriété qui correspond à endpoint, alors ces données sont renvoyées. Si DATA n'a pas cette propriété, alors endpoint n'est pas un point de terminaison valide et une erreur est générée.
         */

        //Rejette la promesse avec un message d'erreur
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
        }
        // Si le point de terminaison est valide, crée une reponse avec les données correspondantes
        const response = {
          status: 200, //Code de statut HTTP 200 OK
          data: DATA[endpoint], //Données correspondantes au point de terminaison
        };

        //Résout la promesse avec la réponse
        resolve(response);
    }, delay);
  })

}

//Donc, si DATA contient les points de terminaison daily et hourly, validEndpoints sera une chaîne de caractères qui ressemble à ceci :
// - "/daily"
// - "/hourly"