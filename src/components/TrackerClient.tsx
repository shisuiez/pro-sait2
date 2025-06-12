"use client";
import { motion } from 'framer-motion';
import { t } from '@/lib/language';
import { useState } from 'react';

const steps = [
  {
    key: 'learnPython',
    icon: '🐍',
    done: true,
  },
  {
    key: 'internship',
    icon: '💼',
    done: true,
  },
  {
    key: 'certification',
    icon: '📜',
    done: false,
  },
  {
    key: 'firstJob',
    icon: '🚀',
    done: false,
  },
];

export default function TrackerClient() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const progress = (steps.filter(s => s.done).length / steps.length) * 100;
  
  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 bg-gray-800 rounded-xl shadow-xl text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">{t('tracker.title', language)}</h1>
      <div className="mb-8">
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-gray-300 mt-2">{t('tracker.progress', language).replace('{progress}', Math.round(progress).toString())}</p>
      </div>
      <ol className="relative border-l-4 border-cyan-400 ml-4">
        {steps.map((step, i) => (
          <motion.li
            key={step.key}
            className="mb-10 ml-6 transition-colors hover:bg-cyan-900/30 p-2 rounded-lg relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`absolute flex items-center justify-center w-10 h-10 rounded-full -left-6 ring-4 ring-cyan-400 ${step.done ? 'bg-cyan-400 text-gray-900' : 'bg-gray-700 text-cyan-400'}`}>
              {step.icon}
            </span>
            <h3 className={`text-xl font-semibold ${step.done ? 'text-cyan-300' : 'text-gray-200'}`}>
              {t(`tracker.steps.${step.key}.title`, language)}
            </h3>
            <p className="text-gray-400">
              {t(`tracker.steps.${step.key}.description`, language)}
            </p>
            {step.done && <span className="text-green-400 text-sm">{t('tracker.completed', language)}</span>}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
} 