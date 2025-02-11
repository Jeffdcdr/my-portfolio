import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (name.length < 4) formErrors.name = 'Name must be at least 4 characters long.';
    if (!email.includes('@')) formErrors.email = 'Please enter a valid email address.';
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      formErrors.phone = 'Enter a valid phone number.';
    }
    return formErrors;
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formErrors = validateForm();
  //   if (Object.keys(formErrors).length === 0) {
  //     alert('Thank you for sending your information, our team will contact you soon.');
  //     setShowForm(false);
  //     setName('');
  //     setEmail('');
  //     setPhone('');
  //     setErrors({});
  //   } else {
  //     setErrors(formErrors);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      console.log('Sending data:', { name, email, phone }); // Debugging log
  
      try {
        const response = await axios.post('http://localhost:5000/api/contact', {
          name,
          email,
          phone
        });
  
        console.log('Response from server:', response.data); // Debugging log
        alert('Thank you! Your information has been saved.');
        setShowForm(false);
        setName('');
        setEmail('');
        setPhone('');
        setErrors({});
      } catch (error) {
        console.error('Error sending data:', error.response || error);
        alert('Error saving contact. Try again.');
      }
    } else {
      setErrors(formErrors);
    }
  };
  

  return (
    <section id="contact" className="py-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-slate-800"></h2>
      <button
        onClick={() => setShowForm(true)}
        className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Contact Me
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-slate-800"></h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-left font-semibold text-slate-700">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-lg text-black"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>
              <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Submit
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
