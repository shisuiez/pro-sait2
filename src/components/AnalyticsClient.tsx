"use client";

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, Legend } from 'recharts';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useState } from 'react';
import { t } from '@/lib/language';

const data = [
  { name: 'Data Scientist', company: 'Google', salary: 120000, trend: 12 },
  { name: 'AI Engineer', company: 'NVIDIA', salary: 130000, trend: 15 },
  { name: 'Cybersecurity Specialist', company: 'Kaspersky', salary: 110000, trend: 10 },
  { name: 'DevOps Engineer', company: 'Amazon', salary: 115000, trend: 8 },
  { name: 'Product Manager', company: 'Meta', salary: 125000, trend: 9 },
];

const geoUrl = '/world-countries.json';
const highlightCountries = ['KOR', 'JPN', 'TWN', 'CHN'];
const countryNames: Record<string, string> = {
  KOR: 'Южная Корея',
  JPN: 'Япония',
  TWN: 'Тайвань',
  CHN: 'Китай',
};

const koreaStats = [
  {
    company: "Samsung Electronics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    profession: "Data Scientist",
    salary: 65000000,
    openings: 12,
    trend: "+8%"
  },
  {
    company: "Naver",
    logo: "https://th.bing.com/th/id/ODLS.c3c3c40c-3147-435a-bf03-d1581d503af7?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
    profession: "AI Engineer",
    salary: 72000000,
    openings: 7,
    trend: "+12%"
  },
  {
    company: "Kakao",
    logo: "https://th.bing.com/th/id/OSK.123fbd5b1a17b40a23e8fe9a8447d24a?w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
    profession: "Cybersecurity Specialist",
    salary: 60000000,
    openings: 5,
    trend: "+6%"
  },
  {
    company: "LG CNS",
    logo: "https://th.bing.com/th/id/ODLS.490a10c4-4115-401a-8da7-46ef5d59898f?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
    profession: "DevOps Engineer",
    salary: 67000000,
    openings: 4,
    trend: "+9%"
  },
  {
    company: "SK hynix",
    logo: "https://th.bing.com/th/id/ODLS.1bfccb4f-eac0-460b-b61d-5eaf9ee3fdd7?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
    profession: "Product Manager",
    salary: 75000000,
    openings: 3,
    trend: "+7%"
  }
];

const CustomTooltip = ({ active, payload, label, language }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-gray-800 p-3 rounded shadow text-white text-sm">
        <div><b>{d.name}</b> ({d.company})</div>
        <div>{t('analytics.tooltip.salary', language)}: ${d.salary.toLocaleString()}</div>
        <div>{t('analytics.tooltip.demandGrowth', language)}: {d.trend}%</div>
      </div>
    );
  }
  return null;
};

export default function AnalyticsClient() {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-xl shadow-xl text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-bold mb-6">{t('analytics.title', language)}</h1>
      <div className="mb-8">
        <motion.div
          className="w-full bg-gray-700 rounded-lg flex flex-col items-center justify-center relative overflow-hidden p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-xl font-bold mb-4 text-cyan-300">{t('analytics.koreaStats.title', language)}</h2>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-cyan-200">
                  <th className="py-2 pr-4">{t('analytics.koreaStats.company', language)}</th>
                  <th className="py-2 pr-4">{t('analytics.koreaStats.profession', language)}</th>
                  <th className="py-2 pr-4">{t('analytics.koreaStats.salary', language)}</th>
                  <th className="py-2 pr-4">{t('analytics.koreaStats.openings', language)}</th>
                  <th className="py-2 pr-4">{t('analytics.koreaStats.trend', language)}</th>
                </tr>
              </thead>
              <tbody>
                {koreaStats.map((row) => (
                  <tr key={row.company} className="border-b border-gray-600 hover:bg-cyan-900/20 transition">
                    <td className="py-2 pr-4 flex items-center gap-2">
                      <img src={row.logo} alt={row.company} className="w-8 h-8 object-contain bg-white rounded p-1" />
                      <span>{row.company}</span>
                    </td>
                    <td className="py-2 pr-4">{row.profession}</td>
                    <td className="py-2 pr-4">{row.salary.toLocaleString()}</td>
                    <td className="py-2 pr-4">{row.openings}</td>
                    <td className="py-2 pr-4 font-semibold text-green-400">{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip content={(props) => <CustomTooltip {...props} language={language} />} />
              <Bar dataKey="salary" fill="#38bdf8" radius={[8, 8, 0, 0]} name={t('analytics.chart.salary', language)} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
      <div className="mt-8">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip content={(props) => <CustomTooltip {...props} language={language} />} />
            <Legend />
            <Line type="monotone" dataKey="trend" stroke="#22d3ee" strokeWidth={3} name={t('analytics.chart.demandGrowth', language)} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
} 