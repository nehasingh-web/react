import  React from 'react';
import ContactForm from '../../components/contactForm';
import './Contact.css'

const Contact = () => {
    return (
        <div className="flex-center"> 
        <h5>CRUD Operation</h5>
        <ContactForm/>
        </div>
    )
}
export default Contact;