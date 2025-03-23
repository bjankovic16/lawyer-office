import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-16">
      {/* Container with max-width and centered content */}
      <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-8">Kontakt</h2>
        
        {/* Contact Info */}
        <div className="space-y-6 text-lg text-gray-700 mb-12">
          <p><strong className="font-semibold text-gray-800">Adresa:</strong> Vojvode Savatija 31, Beograd</p>
          <p><strong className="font-semibold text-gray-800">Telefon:</strong> +381 67 7624 010</p>
          <p>
            <strong className="font-semibold text-gray-800">Email: </strong> 
            <a href="mailto:kontakt@petrovic-advokat.rs" className="text-blue-600 hover:text-blue-800">
              kontakt@petrovic-advokat.rs
            </a>
          </p>
        </div>
        
        {/* Map */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Vojvode+Savatija+31,+Beograd&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
