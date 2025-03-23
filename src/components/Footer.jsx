import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-center text-gray-500 py-6 border-t mt-10">
      <p>&copy; {new Date().getFullYear()} Advokatska kancelarija Petrović. Sva prava zadržana.</p>
    </footer>
  );
}
