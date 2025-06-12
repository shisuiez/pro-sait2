"use client";
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { t } from '@/lib/language';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "/career-test", key: "careerTest" },
  { href: "/analytics", key: "analytics" },
  { href: "/learning", key: "learning" },
  { href: "/tracker", key: "tracker" },
  { href: "/community", key: "community" },
  { href: "/profile", key: "profile" },
];

export default function AnimatedNav() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="w-full bg-gray-900 text-white shadow-md mb-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="hover:text-primary px-2 py-1 rounded transition-colors"
                whileHover={{ scale: 1.13, backgroundColor: "#164e63" }}
                whileTap={{ scale: 0.97 }}
              >
                {t(`navigation.${item.key}`, language)}
              </motion.a>
            ))}
          </div>

          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`navigation.${item.key}`, language)}
                </motion.a>
              ))}
              <div className="px-3 py-2">
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 