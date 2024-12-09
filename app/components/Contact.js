import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6  text-slate-800">Contact Me</h2>
      <p className="text-lg text-slate-600">
        Email:{' '}
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          jeffry.ancheta@example.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
