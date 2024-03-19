//Utiliser une condition dans un composant de fonction
function TodaysPlan(){
  let task;
  let apocalypse = false;
  if(!apocalypse){
    task = 'learn React.js';
  }else{
    task = 'run around';
  }
  return <h1> Today I am going to {task}!</h1>
  
  }

//Encapsuler la fonction dasn un élément JSX
const element = <TodaysPlan />;

// Utilisez ReactDOM.render pour rendre l'élément dans un élément DOM spécifique
ReactDOM.render(element, document.getElementById('app'));
