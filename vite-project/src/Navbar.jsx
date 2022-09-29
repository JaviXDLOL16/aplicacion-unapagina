import React from 'react'
import '../src/css/navbar.css'
import image from './assets/images/Obras-arte.png'


function Navbar() {

    return (
            
            <div className='navbar'>
            <input type="Buscador" className='Buscador'  placeholder="¿Que pintura desea buscar?" />
                <div className='titulo'>
                    <h1>Collective pigment</h1>
                </div>
                <div className='container-img'>
                    <img src={image} />

                </div>




            </div>

    )

}

export default Navbar