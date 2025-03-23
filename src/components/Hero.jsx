import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>


      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif uppercase mb-4">
          Advokatska kancelarija Petrović
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Iskustvo. Posvećenost. Pravo rešenje za vaš pravni problem.
        </p>
      </div>
    </section>
  );
}
