// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import 'sweetalert2/dist/sweetalert2.css'
import App from './components/App';

const element = <h1>Hello, Platzi Badges!</h1>;
//el tipo, atributos(props), contenido
const element1 = React.createElement('h1', {}, 'Hola! Soy un children')
const element2 = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a platzi')
const name = 'Andrea';
const element3 = React.createElement('h1', {}, `Hola, soy ${name}`)
//Lo mismo pero con jsx
const jsx = <h1>Hola, soy {name}</h1>
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<
    App /*  firstName="Andrea"
    lastName="Aldana"
    jobTitle="Jr Developer" */ />, container);
