import React from 'react';
import reactDom from 'react-dom';

//import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';


const divRoot= document.querySelector('#root');


reactDom.render( <CounterApp value = {4} />, divRoot);