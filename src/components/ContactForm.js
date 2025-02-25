import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'general',
    message: '',
    lotInterest: '',
    schedule: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate API call
    setTimeout(() => {
      // Success case
      setFormStatus({ submitting: false, submitted: true, error: null });
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'general',
        message: '',
        lotInterest: '',
        schedule: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      <h2>Solicita Información</h2>
      <p>Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad</p>
      
      {formStatus.submitted ? (
        <div className="form-success">
          <h3>¡Gracias por tu interés!</h3>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="interest">Tipo de Interés *</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="general">Información General</option>
              <option value="specific-lot">Lote Específico</option>
              <option value="investment">Oportunidad de Inversión</option>
              <option value="visit">Programar Visita</option>
            </select>
          </div>
          
          {formData.interest === 'specific-lot' && (
            <div className="form-group">
              <label htmlFor="lotInterest">Lote de Interés</label>
              <input
                type="text"
                id="lotInterest"
                name="lotInterest"
                value={formData.lotInterest}
                onChange={handleChange}
                placeholder="Ej: Lote 24, Zona Norte"
              />
            </div>
          )}
          
          {formData.interest === 'visit' && (
            <div className="form-group">
              <label htmlFor="schedule">Fecha y Hora preferida para visita</label>
              <input
                type="text"
                id="schedule"
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                placeholder="Ej: Sábado 15 de marzo, por la tarde"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Escribe cualquier consulta adicional aquí"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
          
          {formStatus.error && (
            <div className="form-error">
              <p>{formStatus.error}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;