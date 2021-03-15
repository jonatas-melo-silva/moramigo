import React from 'react';
import ReactDOM from 'react-dom';
import { Genero } from './App';
import { Animais } from './App';
import { Visitas } from './App';
import { Bebidas } from './App';
import { Fumantes } from './App';
import { Festas } from './App';


ReactDOM.render(
  <React.StrictMode>
    <Genero />
    <Animais />
    <Visitas />
    <Bebidas />
    <Fumantes />
    <Festas />
  </React.StrictMode>,
  
  document.getElementById('root')
);
