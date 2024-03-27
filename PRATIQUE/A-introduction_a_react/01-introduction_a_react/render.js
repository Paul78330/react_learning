//Le rendu JSX expliqué
//Examinons le code que vous venez d'écrire dans les dernière lignes de app-1.js.
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<h1>Hello world</h1>);

//Avant de commencer, il est essentiel de comprendre que React s'appuie sur deux choses pour restituer:      - quel contenu restituer - où placer le contenu.

//1er ligne :
//const container = document.getElementById('app');
//Utiliser l'objet document pour obtenir l'élément DOM avec l'ID app. Cet élément est l'endroit où vous voulez que votre contenu soit restitué.

//2ème ligne :
//const root = reactDOM.createRoot(container);
//Nous utilisons la méthode createRoot de reactDOM pour créer un objet root. Cet objet root est responsable de la gestion de la restituation du contenu dans l'élément DOM que vous avez récupéré à l'étape 1.
//createRoot() est issue de la bibliothèque react-dom/client, qui crée une racine React à partir de container et la stocke dans root. 
//root peut être utilisé pour restituer une expression JSX. Il s'agit de la partie « où placer le contenu » du rendu React.

//3ème ligne :
//root.render(<h1>Hello world</h1>);
//Nous utilisons la méthode render de l'objet root pour restituer une expression JSX.
//render() restitue le contenu transmis en argument. Ici, nous passons un élément <h1> qui affiche Hello world. Il s'agit de la partie « quel contenu rendre » du rendu React.

//Passer une variable à render()
/**
 * Précédement, nous avons vu comment créer une racine React en utilisant createRoot() de reactDOM, et utiliser sa méthode render() pour rendre JSX .

  *L'argument de la méthode render() n'a pas besoin d'être JSX, mais il doit être évalué comme une expression JSX. L'argument peut également être une variable, à condition que cette variable soit évaluée comme une expression JSX.
 */

  const toDoList = (
    <ul>
      <li>Learn React</li>
      <li>Write a tutorial</li>
      <li>Ship it!</li>
    </ul>
  );

  //Dans cet exemple, nous enregistrons une expression JSX en tant que variable nommée toDoList. On passe alors toDoList comme argument de render():
  const container2 = document.getElementById('app');
  const root2 = ReactDOM.createRoot(container2);
  root2.render(toDoList);

  //Le DOM virtuel vs le DOM réel
  //Le DOM réel est une répresentation de la page web telle qu'elle est affichée dans le navigateur. il s'agit concretement d'une réprentation structurée et programmable d'un document HTML. Il est essenntiellement une interface qui permet aux programmes et scripts de manipuler la structure, le style et le contenu d'une page web.

  //le DOM virtuel est une répresentation en mémoire du DOM réel. Il est essentiellement une copie du DOM réel, mais il est plus rapide à manipuler. Le DOM virtuel est utilisé par React pour déterminer les changements à apporter au DOM réel. React compare le DOM virtuel avec le DOM réel pour déterminer les changements à apporter au DOM réel. Il permet à React de faire des modifications dans cette copie avant de les appliquer au DOM réel.

  //Une particularité de la méthode render() est qu'elle ne modifie pas directement le DOM réel. Au lieu de cela, elle modifie le DOM virtuel. Lorsque vous appelez render(), React compare le DOM virtuel avec le DOM réel, puis applique les changements nécessaires au DOM réel. Ellle met à jour uniquement les éléments DOM qui ont changé, ce qui rend le processus de rendu plus rapide.

  const hello = <h1>Hello World</h1>

  //Ceci affichera "Hello world" à l'écran :
  root.render(hello, document.getElementById('app'));

  //Ceci ne fera rien :
  root.render(hello, document.getElementById('app'));

  //C'est significatif ! Seule la mise à jour des éléments DOM nécessaires constitue une grande partie du succès de React. Ceci est accompli en utilisant le DOM virtuel de React .



  