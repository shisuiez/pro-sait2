"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { t } from '@/lib/language';
import { Send } from 'lucide-react';

interface Message {
  author: string;
  text: string;
  isAI?: boolean;
}

export default function CommunityClient() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [messages, setMessages] = useState<Message[]>([
    {
      author: 'AI Assistant',
      text: 'Hello! I am your AI career assistant. I can help you with:\n- Career path selection\n- Professional development advice\n- Labor market analysis\n- Interview preparation\n\nHow can I help you today?',
      isAI: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      author: 'Вы',
      text: newMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9yoJSriUj94nxK23i2U4GY6ukSHfdCAM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: newMessage
                }
              ]
            }
          ]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        console.error('API Error Response:', data.error);
        throw new Error(data.error.message);
      }

      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
        console.error('Unexpected API Response Format:', data);
        throw new Error('Неожиданный формат ответа от API');
      }

      const aiResponse = data.candidates[0].content.parts[0].text;

      const aiMessage: Message = {
        author: 'AI Assistant',
        text: aiResponse,
        isAI: true
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Fetch Error:', error);
      const errorMessage: Message = {
        author: 'AI Assistant',
        text: 'Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз или переформулируйте вопрос.',
        isAI: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">ИИ-ассистент по карьере</h2>
          <p className="text-sm text-gray-400 mt-1">Задайте любой вопрос о карьере и профессиональном развитии</p>
        </div>
        
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isAI
                      ? 'bg-gray-700 text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">{message.author}</div>
                  <div className="text-sm whitespace-pre-line">{message.text}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white rounded-lg p-3">
                <div className="animate-pulse">AI печатает...</div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Введите ваш вопрос о карьере..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 