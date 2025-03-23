const express = require('express');
const cors = require('cors');
const { Groq } = require('groq-sdk');

require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/chatbot', async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
