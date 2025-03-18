import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let foodItems = {'dal', 'salad','roti','rice','milk'};
  
  return (
  <>
  <h1>Food Charts</h1>

  <ul class="list-group">
  <li class="list-group-item">{foodItems}</li>

  </ul>

  </>
  );
}

export default App;
