'use client';

import { useRouter } from 'next/navigation';
import { t } from '@/lib/language';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CareerPath } from '@/types/career';

const careers = ['dataScientist', 'aiEngineer', 'cybersecurity', 'ux-designer'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

type Skills = {
  [key: string]: string;
};

export default function ResultsPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [results, setResults] = useState<any>(null);
  const [bestMatch, setBestMatch] = useState<string | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('careerTestResults');
    if (savedResults) {
      const parsedResults = JSON.parse(savedResults);
      setResults(parsedResults);
      if (parsedResults.recommendedCareers && parsedResults.recommendedCareers.length > 0) {
        setBestMatch(parsedResults.recommendedCareers[0]);
      }
    }
  }, []);

  const getSkills = (career: string): string[] => {
    const skills = t(`recommendations.${career}.skills`, language);
    return Array.isArray(skills) ? skills : [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {t('testResults')}
            </h1>
            {bestMatch && (
              <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/50 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Best Career Match
                </h2>
                <p className="text-2xl text-blue-200 font-semibold">
                  {t(`recommendations.${bestMatch}.title`, language)}
                </p>
                <p className="text-gray-200 mt-2">
                  {t(`recommendations.${bestMatch}.description`, language)}
                </p>
              </div>
            )}
            <p className="text-gray-300 text-lg">
              {t('recommendations.description', language)}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {careers.map((career, index) => (
              <motion.div
                key={career}
                variants={itemVariants}
                className={`bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl p-8 shadow-2xl border backdrop-blur-sm transition-all duration-300 ${
                  career === bestMatch 
                    ? 'border-blue-400/50 bg-blue-900/30' 
                    : 'border-gray-700/50 hover:border-blue-400/50'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t(`recommendations.${career}.title`, language)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`recommendations.${career}.description`, language)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-emerald-400 font-semibold mb-1">
                      {t(`recommendations.${career}.salary`, language)}
                    </span>
                    <span className="text-violet-400 text-sm">
                      {t(`recommendations.${career}.growth`, language)}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-blue-300 font-semibold mb-3">
                    {t('requiredSkills', language)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getSkills(career).map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm border border-blue-700/50 hover:border-blue-400/50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <div className="flex space-x-4">
                    <span className="text-gray-300 text-sm">
                      {t('experience', language)}: {t(`recommendations.${career}.experience`, language)}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {t('education', language)}: {t(`recommendations.${career}.education`, language)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    {t('learnMore', language)}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-4 mt-12"
          >
            <motion.button
              onClick={() => router.push('/')}
              className="px-8 py-3 bg-gray-800/80 text-white rounded-lg hover:bg-gray-700/80 transition-colors border border-gray-700/50 hover:border-blue-400/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('backToHome', language)}
            </motion.button>
            <motion.button
              onClick={() => router.push('/market-analytics')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('viewAnalytics', language)}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 