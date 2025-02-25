import React, { useState } from 'react';

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
    
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'general',
        message: '',
        lotInterest: '',
        schedule: ''
      });
      
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Solicita Información</h2>
      <p className="text-gray-600 text-center mb-6">Completa el formulario y un asesor se pondrá en contacto contigo.</p>
      
      {formStatus.submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
          <h3 className="text-lg font-semibold">¡Gracias por tu interés!</h3>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre Completo *</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Correo Electrónico *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Interés *</label>
            <select 
              name="interest" 
              value={formData.interest} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="general">Información General</option>
              <option value="specific-lot">Lote Específico</option>
              <option value="investment">Oportunidad de Inversión</option>
              <option value="visit">Programar Visita</option>
            </select>
          </div>
          
          {formData.interest === 'specific-lot' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Lote de Interés</label>
              <input 
                type="text" 
                name="lotInterest" 
                value={formData.lotInterest} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
                placeholder="Ej: Lote 24, Zona Norte"
              />
            </div>
          )}
          
          {formData.interest === 'visit' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Fecha y Hora preferida para visita</label>
              <input 
                type="text" 
                name="schedule" 
                value={formData.schedule} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
                placeholder="Ej: Sábado 15 de marzo, por la tarde"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4" 
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500" 
              placeholder="Escribe cualquier consulta adicional aquí"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;