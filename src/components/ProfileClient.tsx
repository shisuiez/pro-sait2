"use client";
import { motion } from 'framer-motion';
import { t } from '@/lib/language';
import { useState } from 'react';

const user = {
  name: 'Иван Ким',
  email: 'ivan.kim@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

export default function ProfileClient() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  return (
    <motion.div
      className="w-full max-w-md mx-auto p-4 sm:p-8 bg-gray-800 rounded-xl shadow-xl text-white flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <img
        src={user.avatar}
        alt="avatar"
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mb-4 border-4 border-cyan-400 shadow-lg"
      />
      <h1 className="text-xl sm:text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-sm sm:text-base text-gray-300 mb-6">{user.email}</p>
      <motion.button
        className="w-full sm:w-auto px-6 py-2 bg-cyan-400 text-gray-900 rounded font-semibold hover:bg-cyan-300 transition"
        onClick={() => alert(t('profile.logoutConfirm', language))}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
      >
        {t('profile.logout', language)}
      </motion.button>
    </motion.div>
  );
} 