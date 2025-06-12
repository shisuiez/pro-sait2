'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { t, setLanguage } from '@/lib/language';

export default function Home() {
  const [language, setLanguageState] = useState<'en' | 'ko'>('en');

  const handleLanguageChange = (newLang: 'en' | 'ko') => {
    setLanguageState(newLang);
    setLanguage(newLang);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => handleLanguageChange(language === 'en' ? 'ko' : 'en')}
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          {language === 'en' ? '한국어' : 'English'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            {t('hero.title', language)}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            {t('hero.subtitle', language)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link 
              href="/career-test"
              className="inline-block px-8 py-4 bg-blue-700 text-white text-xl rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('hero.startTest', language)}
            </Link>
            <Link 
              href="/market-analytics"
              className="inline-block px-8 py-4 bg-purple-700 text-white text-xl rounded-lg hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('hero.viewAnalytics', language)}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-white">
              {t('about.title', language)}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {t('about.description', language)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-700 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('about.mission.title', language)}
                </h3>
                <p className="text-gray-300">
                  {t('about.mission.description', language)}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-700 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('about.vision.title', language)}
                </h3>
                <p className="text-gray-300">
                  {t('about.vision.description', language)}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-700 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('about.values.title', language)}
                </h3>
                <p className="text-gray-300">
                  {t('about.values.description', language)}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              {t('about.impact.title', language)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl text-center"
              >
                <h3 className="text-4xl font-bold mb-2 text-green-400">50</h3>
                <p className="text-gray-300">{t('about.impact.stats.careerPaths', language)}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl text-center"
              >
                <h3 className="text-4xl font-bold mb-2 text-yellow-400">4</h3>
                <p className="text-gray-300">{t('about.impact.stats.countriesCovered', language)}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl text-center"
              >
                <h3 className="text-4xl font-bold mb-2 text-blue-400">50</h3>
                <p className="text-gray-300">{t('about.impact.stats.testQuestions', language)}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl text-center"
              >
                <h3 className="text-4xl font-bold mb-2 text-purple-400">20+</h3>
                <p className="text-gray-300">{t('about.impact.stats.analyzedSkills', language)}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              {t('services.title', language)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-700 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {t('services.careerTesting.title', language)}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t('services.careerTesting.description', language)}
                </p>
                <Link 
                  href="/career-test"
                  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  {t('services.careerTesting.startTest', language)}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-700 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {t('services.marketAnalytics.title', language)}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t('services.marketAnalytics.description', language)}
                </p>
                <Link 
                  href="/market-analytics"
                  className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
                >
                  {t('services.marketAnalytics.viewAnalytics', language)}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            {t('cta.title', language)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            {t('cta.description', language)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/career-test"
              className="inline-block px-8 py-4 bg-white text-blue-700 text-xl rounded-lg hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('cta.startTest', language)}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 