const h1 = <h1>Hello world</h1>;
/**
 * de quoi s'agit-il ?

  *La réponse est… un fichier JavaScript ! Malgré ce à quoi il ressemble, votre code ne contient en réalité aucun code HTML.

  *La partie qui ressemble à HTML, <h1>Hello world</h1>s'appelle JSX. 
 */

  //JSX Elements:
  <h1>Hello world</h1>

  //Cet élément JSX ressemble exactement à HTML ! La seule différence notable est que vous le trouverez dans un fichier JavaScript plutôt que dans un fichier HTML

  //Les éléments JSX sont traités comme des expressions JavaScript . Ils peuvent aller partout où les expressions JavaScript peuvent aller. Cela signifie qu'un élément JSX peut être enregistré dans une variable, passé à une fonction, stocké dans un objet ou un tableau… vous pouvez l'appeler.

  //Voici un exemple d'élément JSX enregistré dans une variable :
  const navBar = <nav>I am à navBar</nav>

  //Je peux donc stoker plusieurs éléments JSX dans un objet ou un tableau
  const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

  const myClub = [ <h1>My Club</h1>, <ul>{myTeam.center}</ul>];
  
  //Attributs dans JSX
  // Un attribut JSX est écrit en utilisant une syntaxe de type HTML : un nom , suivi d'un signe égal, suivi d'une valeur . La valeur doit être placée entre guillemets, comme ceci : my-attribute-name="my-attribute-value"

  //Exemple d'éléments JSX avec des attributs
  <a href="http://www.example.com">Welcome to the Web</a>

  //Un seul élément JSX peut avoir plusieurs attributs, comme ceci :
  const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

  //Voici un exemple d'élément JSX <h1>, imbriqué à l'intérieur d'un élément JSX <a>:
  <a href="http://www.example.com"><h1>Click me!</h1></a>;

  //Pour rendre cela plus lisible, vous pouvez utiliser des sauts de ligne et une indentation de style HTML :
  <a href="http://www.example.com">
  <h1>
    Click me!
  </h1>
  </a> //Erreur de compilation

//Si une expression JSX occupe plusieurs lignes, vous devez alors placer l'expression JSX multiligne entre parenthèses. Cela semble étrange au début, mais on s'y habitue :
(
  <a href="http://www.example.com">
  <h1>
    Click me!
  </h1>
  </a>
)

//Les expressions JSX imbriquées peuvent être enregistrées en tant que variables, transmises à des fonctions, etc., tout comme les expressions JSX non imbriquées ! Voici un exemple d' expression JSX imbriquée enregistrée en tant que variable :
const theExemple = (
  <a href="http://www.example.com">
  <h1>
    Click me!
  </h1>
  </a>
)

//Elements externes JSX

//Il existe une règle que nous n'avons pas mentionnée : une expression JSX doit avoir exactement un élément le plus externe. En d'autres termes, ce code fonctionnera :
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
); //syntaxe OK

//Mais ce code ne fonctionnera pas :
// const paragraphs = (
//   <p>I am a paragraph.</p> //Le plus externe
//   <p>I, too, am a paragraph.</p>
// ); //Syntaxe KO

/**
 * La première balise d'ouverture et la balise de fermeture finale d'une expression JSX doivent appartenir au même élément JSX !

  *Il est facile d’oublier cette règle et de se retrouver avec des erreurs difficiles à diagnostiquer.

  *Si vous remarquez qu'une expression JSX comporte plusieurs éléments externes, la solution est généralement simple : enveloppez l'expression JSX dans un élément <div>.
 */

  //Restituer une expression JSX = la faire apparaître à l'écran
  const container = document.getElementById('app');
  const root = reactDOM.createRoot(container);
  root.render(<h1>Hello world</h1>); //Le code suivant affichera une expression JSX : <h1>Hello world</h1> dans le DOM.