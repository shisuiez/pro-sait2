"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { t } from '@/lib/language';

const professions = [
  {
    name: 'dataScientist',
    courses: [
      { title: 'dataScience', link: 'https://www.coursera.org/specializations/jhu-data-science', done: false },
      { title: 'machineLearning', link: 'https://www.coursera.org/learn/machine-learning', done: false },
      { title: 'pythonDataScience', link: 'https://www.edx.org/learn/python', done: false },
    ],
  },
  {
    name: 'aiEngineer',
    courses: [
      { title: 'deepLearning', link: 'https://www.coursera.org/specializations/deep-learning', done: false },
      { title: 'aiForEveryone', link: 'https://www.coursera.org/learn/ai-for-everyone', done: false },
      { title: 'aiNanodegree', link: 'https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898', done: false },
    ],
  },
  {
    name: 'cybersecurity',
    courses: [
      { title: 'introCybersecurity', link: 'https://www.coursera.org/learn/intro-cyber-security', done: false },
      { title: 'networkSecurity', link: 'https://www.edx.org/learn/network-security', done: false },
      { title: 'ethicalHacker', link: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/', done: false },
    ],
  },
];

export default function LearningClient() {
  const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(Array(professions[selected].courses.length).fill(false));
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = Number(e.target.value);
    setSelected(idx);
    setChecked(Array(professions[idx].courses.length).fill(false));
  };

  const handleCheck = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 bg-gray-800 rounded-xl shadow-xl text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">{t('learning.title', language)}</h1>
      <div className="mb-6 flex flex-col items-center">
        <label htmlFor="profession" className="mb-2 text-lg">{t('learning.selectProfession', language)}</label>
        <select
          id="profession"
          value={selected}
          onChange={handleProfessionChange}
          className="p-2 rounded bg-gray-700 text-white border border-gray-600"
        >
          {professions.map((prof, idx) => (
            <option value={idx} key={prof.name}>{t(`learning.professions.${prof.name}`, language)}</option>
          ))}
        </select>
      </div>
      <ul className="space-y-4">
        {professions[selected].courses.map((course, i) => (
          <motion.li
            key={course.title}
            className="flex items-center bg-gray-700 rounded-lg p-4 transition-colors hover:bg-cyan-900/40"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => handleCheck(i)}
              className="mr-4 accent-cyan-400 w-5 h-5 transition-all duration-200 hover:scale-110"
            />
            <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-lg hover:underline transition-colors">
              {t(`learning.courses.${course.title}`, language)}
            </a>
            {checked[i] && <span className="ml-3 text-green-400">✓</span>}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
} 