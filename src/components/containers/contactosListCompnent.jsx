import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contactoComponent';



const ContactosListCompnent = () => {
    const nuevoContacto= new Contacto('sebas','casta','sebas@gmail.com',true);
    return (
        <div>
            <ContactoComponent contacto={nuevoContacto}></ContactoComponent>
            
        </div>
    );
};





export default ContactosListCompnent;
