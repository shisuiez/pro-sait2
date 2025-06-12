import React, { useState } from 'react';
import { Question, Option, TestResult } from '@/types/career';
import { t } from '@/lib/language';
import { motion, AnimatePresence } from 'framer-motion';
import { getCareerRecommendations } from '@/lib/careerRecommendations';

interface CareerTestProps {
  questions: Question[];
  onComplete: (result: TestResult) => void;
}

export const CareerTest: React.FC<CareerTestProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const result: TestResult = {
      skills: {},
      interests: {},
      personality: {},
      recommendedCareers: []
    };

    // Анализируем ответы и заполняем result
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        // Определяем категорию вопроса и обновляем соответствующие поля
        if (question.text.includes('work')) {
          result.personality[answer] = (result.personality[answer] || 0) + 1;
        } else if (question.text.includes('learn')) {
          result.interests[answer] = (result.interests[answer] || 0) + 1;
        } else if (question.text.includes('technology')) {
          result.skills[answer] = (result.skills[answer] || 0) + 1;
        }
      }
    });

    // Получаем рекомендации на основе результатов
    const recommendations = getCareerRecommendations(result);
    result.recommendedCareers = recommendations.map(career => career.id);
    return result;
  };

  const handleTestComplete = () => {
    const result = calculateResults();
    onComplete(result);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            className="bg-blue-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-2 text-right">
          {`${t('question')} ${currentQuestion + 1}/${questions.length}`}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">
            {questions[currentQuestion].text}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={option.value}
                onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-6 rounded-lg transition-all duration-200 ${
                  answers[questions[currentQuestion].id] === option.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <motion.button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-lg transition-colors ${
            currentQuestion === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
          whileHover={{ scale: currentQuestion === 0 ? 1 : 1.05 }}
          whileTap={{ scale: currentQuestion === 0 ? 1 : 0.95 }}
        >
          {t('previous')}
        </motion.button>
        {currentQuestion === questions.length - 1 ? (
          <motion.button
            onClick={handleTestComplete}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('complete')}
          </motion.button>
        ) : (
          <motion.button
            onClick={handleNext}
            disabled={!answers[questions[currentQuestion].id]}
            className={`px-6 py-3 rounded-lg transition-colors ${
              !answers[questions[currentQuestion].id]
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            whileHover={{ scale: !answers[questions[currentQuestion].id] ? 1 : 1.05 }}
            whileTap={{ scale: !answers[questions[currentQuestion].id] ? 1 : 0.95 }}
          >
            {t('next')}
          </motion.button>
        )}
      </div>
    </div>
  );
}; 