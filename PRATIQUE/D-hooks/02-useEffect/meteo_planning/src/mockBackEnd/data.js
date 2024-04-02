// Dans ce module, nous utilisons certaines fonctions comme Math.random(), 
// Math.floor(), et Array.from() pour générer des fausses données.
// Lors de la construction des interfaces utilisateur, il peut être utile de
// simuler des versions simplifiées des données que notre code
// ira finalement chercher sur les serveurs backend

//Fonction pour générer un identifiant aléatoire
const getRandomId = () => `${Math.random()}-${Math.random()}`;

//Fonction pour générer un nombre aléatoire dans une plage donnée
const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

//Tableau des résumés météorologiques possibles
const summaries = [
  "Rainy",
  "Cloudy",
  "Partly Cloudy",
  "Partly Sunny",
  "Mostly Sunny",
  "Sunny"
];

//Fonction pour sélectionner un élement aléatoire d'une liste
const randomFromList = list => list[getRandomNumber(0, list.length)];

//Fonction pour générer une température aléatoire
const getTemp = () => {
  const avg = getRandomNumber(60, 30)

  return {
    avg,
    min: avg - 10,
    max: avg + 10
  }
};

//Fonction pour générer un élement météorologique aléatoire
const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100),
});


//Export des données météorologiques factices
export default {
  "/daily": Array.from({ length: 5 }, getWeatherItem), //Génère 5 jours de données
  "/hourly": Array.from({ length: 24 }, getWeatherItem), //Génère 24 heures de données
}