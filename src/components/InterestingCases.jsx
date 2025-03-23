import React, { useState } from 'react';

export default function InterestingCases() {
  const casesData = [
    {
      id: 1,
      title: 'Oportunitet u krivičnom pravu: Šta je i kada se može primeniti?',
      description: 'Oportunitet je koristan institut za pravosudni sistem...',
      link: '/cases/1',
      image: '/handcufs.jpeg',
    },
    {
      id: 2,
      title: 'Kazna “kućnog zatvora” u Srbiji: Uslovi i primena',
      description: 'Krivični zakonik Republike Srbije predviđa mogućnost...',
      link: '/cases/2',
      image: '/icon-arrested.jpg',
    },
    {
      id: 3,
      title: 'Starateljstvo nad detetom nakon razvoda braka',
      description: 'Starateljstvo nad detetom predstavlja jednu od posebno osetljivih tema...',
      link: '/cases/3',
      image: '/divorce.jpg',
    },
  ];

  // Carousel index for small screens
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + casesData.length) % casesData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % casesData.length);
  };

  const currentCase = casesData[currentIndex];

  return (
    <section className="py-16 bg-gray-50" id="interesting-cases">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif mb-8 text-center">
          Slučajevi u fokusu
        </h2>

        {/* ======== SMALL SCREENS (< md): ONE CARD with ARROWS ======== */}
        <div className="md:hidden relative flex items-center justify-center">
          {/* Prev Arrow */}
          <button
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow 
                       hover:bg-gray-100 transition-transform transform hover:scale-110
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            onClick={handlePrev}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            aria-label="Prethodni slučaj"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Single Card (fixed width for consistency) */}
          <div
            className="w-96 bg-white shadow-lg rounded-lg overflow-hidden 
                       cursor-pointer transform hover:scale-105 transition"
            onClick={() => (window.location.href = currentCase.link)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && (window.location.href = currentCase.link)}
            aria-label={`Pogledajte ${currentCase.title}`}
          >
            <img
              src={currentCase.image}
              alt={currentCase.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {currentCase.title}
              </h3>
              <p className="text-gray-700">{currentCase.description}</p>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow 
                       hover:bg-gray-100 transition-transform transform hover:scale-110
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            onClick={handleNext}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            aria-label="Sledeći slučaj"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        {/* ======== BIGGER SCREENS (≥ md): ALL 3 side by side ======== */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {casesData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden 
                         cursor-pointer transform hover:scale-105 transition"
              onClick={() => (window.location.href = item.link)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && (window.location.href = item.link)}
              aria-label={`Pogledajte ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
