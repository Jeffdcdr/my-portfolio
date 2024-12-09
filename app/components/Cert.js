"use client";

import React from "react";
import Image from "next/image";

const Cert = () => {
  return (
    <section id="cert" className="py-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6  text-slate-800">
        Certifications
      </h2>
      <p className="text-lg text-slate-600">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault(); // Prevent the default link behavior
            window.open(
              "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=EfCLeF3xUvhRrQ96Tbe1lbjt+r5ttM6PuY8VamgGAqhgaVka1hPaJw/DHPxLlUtd",
              "_blank", // Open in a new window or tab
              "width=800,height=600,scrollbars=yes,resizable=yes"
            );
          }}
          className="text-blue-600 hover:bg-amber-300 hover:text-gray-800 max-w-32 rounded-full"
        >
          Salesforce Certified Advanced Administrator
          
        </a>
        
      </p>
      <p className="text-lg text-slate-600">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            window.open(
              "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=EfCLeF3xUvhRrQ96Tbe1lbjt+r5ttM6PuY8VamgGAqhgaVka1hPaJw/DHPxLlUtd",
              "_blank", // Open in a new window or tab
              "width=800,height=600,scrollbars=yes,resizable=yes"
            );
          }}
          className="text-blue-600 hover:bg-amber-300 hover:text-gray-800 max-w-32 rounded-full"
        >
          Salesforce Certified Administrator
        </a>
      </p>
    </section>
  );
};
export default Cert;
