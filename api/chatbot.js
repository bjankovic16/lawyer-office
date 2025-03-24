const { Groq } = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

module.exports = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: 'Ti si chatbot koji daje pravne savete. Odgovaraj jasno, kratko i precizno na srpskom jeziku.',
        },
        { role: 'user', content: question },
      ],
      model: "llama-3.3-70b-versatile",
    });
    res.json({ answer: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Greška na serveru.' });
  }
};
