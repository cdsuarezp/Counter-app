// los componentes se escriben con mayusculas la primera inicial de la palabra

import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ( {saludo, subtitulo} ) => {

    console.log(saludo)

    return(
      <> 
        <h1> {saludo} </h1>
        <p> {subtitulo}</p>
      </>  
     
    ) ;
}

PrimeraApp.propTypes = {

        saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps ={
    subtitulo: 'soy un subtitulo',
}


export default PrimeraApp;