import React from 'react';
import { Briefcase, Scale, FileText, Shield } from 'lucide-react';

const servicesData = [
  {
    icon: <Briefcase size={32} />,
    title: 'Privredno pravo',
    description: 'Zastupanje privrednih društava i preduzetnika, ugovori, saveti u poslovnom pravu.'
  },
  {
    icon: <Scale size={32} />,
    title: 'Građansko pravo',
    description: 'Sudska i vansudska naplata potraživanja, odštetni zahtevi, obligacioni odnosi.'
  },
  {
    icon: <FileText size={32} />,
    title: 'Porodično pravo',
    description: 'Razvod braka, alimentacija, starateljstvo, podele imovine.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Krivično pravo',
    description: 'Odbrana okrivljenih i zastupanje oštećenih u krivičnom postupku.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-8">Usluge</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <div key={idx} className="p-6 border rounded shadow-sm flex flex-col items-center space-y-3 bg-gray-50">
              <div className="text-blue-600">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
