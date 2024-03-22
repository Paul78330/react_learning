import React from 'react';
import GroceryItem from './GroceryItem';
import './App.css';

function App() {
  return (
    <div>
      <h1>Epicerie en ligne</h1>
      <GroceryItem name='Eggs' />
      <GroceryItem name='Banana' />
      <GroceryItem name='Strawberry' />
      <GroceryItem name='Bread' />
    </div>
  );
}

export default App;
