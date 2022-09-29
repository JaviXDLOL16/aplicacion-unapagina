
import React from 'react'
import Pinturas from './Pinturas'
import Imagen1 from '../src/assets/images/Campo-de-trigo.jpg'
import Imagen2 from '../src/assets/images/Guernica.jpg'
import Imagen3 from '../src/assets/images/Mona-Lisa.jpg'
import Imagen4 from '../src/assets/images/Persistencia-de-la-memoria.jpg'
import '../src/css/body.css'


function Body() {

    return(
   <div className='Recuadro'>
    
    <div className='left'>
      <h1>Galeria de arte</h1>
    
      <div className=''>
        <p className='texto'>
        Las galerías de arte son espacios culturales que se suelen encontrar en cualquier municipio. 
        Seguramente has visitado alguna, aunque denominada como “sala de exposiciones”; la función 
        es la misma. Los artistas pueden ser invitados a presentar sus obras o, por el contrario,
         pueden alquilar una zona para exponerlas. Las funciones de estos espacios tienen que ver 
         con el tipo de galerías que hay. A continuación, te exponemos más detalladamente su 
         funcionamiento.
        <p><br /> </p>
        Si te apasiona el mundo del arte y al acabar este artículo te imaginas siendo comisario 
        de una exposición de arte, no cierres esta página todavía. Echa un vistazo a nuestro Curso 
        de Tasación de Obras de Arte. Estudia a tu ritmo para conseguir tus aspiraciones profesionales.
        <p><br /></p>
        Muchas galerías de arte pueden realizarse de manera improvisada, sin necesidad de que ocupen un 
        espacio permanente. Muchas empresas e instituciones, con el fin de promover el arte o el mercado, 
        instalan una eventualmente. 
        </p>
      </div>
    </div>


        <div className='right'>
    <Pinturas
    img = {Imagen1}
    nombre = 'Campo de trigo'
    
    autor = 'Van gogh'
    fecha = 'julio de 1889'
    descripcion= 'Vicent Van Gogh ingresa en 1889 en el Hospital Psiquiátrico de Sint-Rémy, donde mirando una y otra vez por la ventana, descubre su obsesión por los cipreses. En una de las cartas que escribe a su hermano Theo, le dice: “Los cipreses me siguen preocupando. Me gustaría hacer algo con ellos, como los cuadros de los girasoles, porque me sorprende que nadie los haya pintado aún como yo los veo.'/>

    <Pinturas
    img = {Imagen2}
    nombre = 'Guernica'
    
    autor = 'Pablo Picasso'
    fecha = 'junio de 1937,'
    descripcion= 'Título alude al bombardeo de Guernica, ocurrido el 26 de abril de dicho año, durante la guerra civil española. Fue realizado por encargo del director general de Bellas Artes, Josep Renau, a petición del Gobierno de la Segunda República Española para ser expuesto en el pabellón español durante la Exposición Internacional de 1937 en París, con el fin de atraer la atención del público hacia la causa republicana en plena guerra civil española.'/>

<Pinturas
    img = {Imagen3}
    nombre = 'Mona Lisa'
    
    autor = 'Leonardo da Vinci'
    fecha = 'el año aproximado de 1503-1519'
    descripcion= 'El retrato de una dama florentina llamada Lisa Gherardini y que se realizó a pedido del marido de esta, Francesco del Giocondo.La enorme fama de la pintura se debe a una combinación de factores. Por un lado, la sutil ambigüedad de la expresión de la retratada sumada a la conocida excentricidad de da Vinci la rodearon de una aureola de misterio. Por otra parte, la maestría pictórica de Leonardo, que empleó en esta obra técnicas novedosas de una manera magistral '/>

<Pinturas
    img = {Imagen4}
    nombre = 'Persistencia de la memoria'
    
    autor = 'Salvador Dalí'
    fecha = 'aproximadamente el año de 1931'
    descripcion= 'Este cuadro fue realizado un día en que Dalí se encontraba indispuesto para ir al cine con su mujer y sus amigos. Mientras estaba solo en casa, el artista pintó el que sería uno de los cuadros más famosos de la historia del arte. En efecto, la obra se exhibe en el Museo de Arte Moderno (MoMa) de Nueva York desde 1934.'/>
    </div>
    </div>
    )
}

export default Body;