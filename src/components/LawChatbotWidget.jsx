import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, X, Send } from 'lucide-react';

const LawChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [interactionCount, setInteractionCount] = useState(0);
  const messagesEndRef = useRef(null);

  const MAX_INTERACTIONS = 3;

  const toggleChat = () => setOpen((prev) => !prev);

  const sendMessage = async () => {
    if (!input.trim() || interactionCount >= MAX_INTERACTIONS) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post('https://lawyer-office-chi.vercel.app:5000/chatbot', { question: input });
      const botMessage = { sender: 'bot', text: res.data.answer };
      setMessages(prev => [...prev, botMessage]);

      const newInteractionCount = interactionCount + 1;
      setInteractionCount(newInteractionCount);

      if (newInteractionCount >= MAX_INTERACTIONS) {
        const finalMessage = {
          sender: 'bot',
          text: 'Za dodatna pitanja kontaktirajte nas na telefon: +381 60 123 4567 ili putem e-maila: office@petrovic.rs.',
        };
        setMessages(prev => [...prev, finalMessage]);
      }
    } catch (error) {
      const errorMessage = { sender: 'bot', text: 'Greška prilikom dohvatanja odgovora.' };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const inputDisabled = interactionCount >= MAX_INTERACTIONS;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="flex flex-col w-80 h-[450px] bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2">
            <span className="font-semibold">Pravni Chatbot</span>
            <button onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-auto px-4 py-3 space-y-2">
            {messages.length === 0 && (
              <div className="text-gray-400 text-xs text-center mt-4">
                Postavite pitanje našem chatbotu.
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white ml-auto'
                    : 'bg-gray-100 text-gray-800 mr-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="border-t p-3 flex gap-2">
            <input
              disabled={inputDisabled}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className={`w-full text-sm rounded-lg px-3 py-2 outline-none ${
                inputDisabled ? 'bg-gray-200 cursor-not-allowed' : 'border border-gray-300'
              }`}
              placeholder={
                inputDisabled ? 'Limit pitanja je dostignut.' : 'Vaše pitanje...'
              }
            />
            <button
              disabled={inputDisabled}
              onClick={sendMessage}
              className={`rounded-lg px-3 py-2 ${
                inputDisabled
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 hover:bg-blue-600 text-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default LawChatbotWidget;
