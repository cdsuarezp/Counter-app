import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) =>{

   
    const [ counter, setCounter ] = useState(value);

    const aumentarContador = () =>{
        setCounter(counter+1);
        // setCounter((c) => c+1)  otra forma de hacerlo
    } 

    const reiniciar = () =>{
        setCounter(value);
    } 

    const disminuirContador = () =>{
        setCounter(counter-1);
    } 

   return <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={aumentarContador}> Aumentar </button>
    <button onClick={reiniciar}> Reiniciar </button>
    <button onClick={disminuirContador}> Disminuir </button>
    </>


}






CounterApp.propTypes = {

    value: PropTypes.number.isRequired,
};

export default CounterApp;