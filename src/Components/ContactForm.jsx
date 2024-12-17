import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Assets/CSS/main.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisation d'EmailJS pour envoyer le message
    emailjs.sendForm(
      'service_o28wr4v', // Remplace par ton ID de service EmailJS
      'template_yb7x14r', // Remplace par ton ID de template EmailJS
      e.target,
      'QMztctzDgtgZEQwdx' // Remplace par ton ID utilisateur EmailJS
    )
    .then((result) => {
      setStatus('Message envoyé avec succès!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setStatus('Une erreur est survenue. Veuillez réessayer.');
      console.error(error);
    });
  };

  return (
    <div className="contact-form">
      <h2 className='contact'>Contactez-moi</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;