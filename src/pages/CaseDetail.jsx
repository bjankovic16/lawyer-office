import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { casesDetailData } from '../data/CaseDetailData.jsx';
import Contact from '../components/Contact.jsx';

export default function CaseDetail() {
  const { id } = useParams();
  const caseInfo = casesDetailData[id];

  if (!caseInfo) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-600">
        <h2 className="text-2xl font-semibold">Slučaj nije pronađen</h2>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">Nazad na početnu</Link>
      </section>
    );
  }

  return (
    <main className="bg-gray-200 min-h-screen py-3">
      <section className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-indigo-950 text-white px-8 py-6">
          <h1 className="text-4xl font-bold">{caseInfo.title}</h1>
          <div className="mt-2 text-sm">
            <span className="mr-4">Datum: {caseInfo.date}</span>
            <span>Tema: {caseInfo.topic}</span>
          </div>
        </header>

        <article className="prose prose-lg prose-indigo px-8 py-8">
          <div dangerouslySetInnerHTML={{ __html: caseInfo.html }} />
        </article>

        <footer className="px-8 pb-8">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            ← Povratak na slučajeve
          </Link>
        </footer>
      </section>
    </main>
  );
}
