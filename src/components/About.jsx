import React from 'react';
import aboutImg from '/about.jpg';

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={aboutImg} alt="about" className="w-full h-auto rounded-lg shadow-md object-cover" />
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-lg text-gray-700">
          <h2 className="text-4xl font-semibold font-serif text-gray-900">O nama</h2>
          
          <p className="text-lg leading-relaxed">
            Naša kancelarija pruža visok nivo pravne sigurnosti i zastupanja u svim oblastima prava.
            Zastupamo pravna i fizička lica uz profesionalan i posvećen pristup svakom predmetu.
          </p>

          <p className="text-lg leading-relaxed">
            Dugogodišnje iskustvo i stalno usavršavanje omogućavaju nam da vam ponudimo najbolja pravna rešenja.
            Naš tim stručnjaka je posvećen pružanju kvalitetnih usluga i zaštiti interesa naših klijenata, sa posebnim
            akcentom na detalje i etički standard.
          </p>

          <p className="text-lg leading-relaxed">
            Bilo da se suočavate sa poslovnim, porodičnim ili krivičnim pravnim pitanjima, naš tim je tu da vas vodi kroz sve
            faze postupka sa potpunim razumevanjem vaših potreba i ciljeva. Kontaktirajte nas danas i dozvolite da postanemo
            vaši pravni savetnici i zaštitnici u svim važnim životnim odlukama.
          </p>
        </div>
      </div>
    </section>
  );
}
