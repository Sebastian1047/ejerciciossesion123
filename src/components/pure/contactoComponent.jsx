import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
           <h1>
            Contacto:
           </h1> 
           <h2>
            Nombre: {contacto.nombre}
           </h2>
           <h2>
            Apellido: {contacto.apellido}
           </h2>
           <h2>
            Email: {contacto.email}
           </h2>
           <h2>
            Conectado: {contacto.conectado?'contacto en linea':'Contacto No Disponible'}
           </h2>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
