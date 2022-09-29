import React from 'react';
import '../src/css/pinturas.css';

function Pinturas(props) {
  return (
    <div className='contenedor-pinturas'>
       <img className="imagen-pinturas" src={props.img} />
      <div className='contenedor-texto-pinturas'>
        <p className='nombre-pinturas'>
          <strong>{props.nombre}</strong> 
        </p>
        <p className='fecha-pinturas'>
          {props.autor} en <strong>{props.fecha}</strong>
        </p>
        <p className='descripcion-pinturas'>"{props.descripcion}"</p>
      </div>
    </div>
  );
}

export default Pinturas;