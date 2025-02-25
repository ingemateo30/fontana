import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulación de envío a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Mensaje enviado correctamente.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h1>
      <p className="text-gray-600 text-lg text-center max-w-lg">
        ¿Tienes alguna pregunta? Contáctanos y te responderemos lo antes posible.
      </p>

      <div className="mt-8 bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-lg transition ${
              submitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
            }`}
            disabled={submitted}
          >
            {submitted ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        {/* Información de contacto */}
        <div className="space-y-4 text-gray-700">
          <h3 className="text-2xl font-semibold text-orange-500">Información de contacto</h3>
          <p>
            <strong>📞 Teléfono:</strong> +57 123 456 7890
          </p>
          <p>
            <strong>📧 Email:</strong> contacto@empresa.com
          </p>
          <p>
            <strong>📍 Dirección:</strong> Calle 123, Ciudad, País
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

