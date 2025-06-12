'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/lib/translations';

interface MarketData {
  career: string;
  demand: 'Very High' | 'High' | 'Medium';
  growth: 'Very High' | 'High' | 'Medium';
  salary: {
    min: number;
    max: number;
    average: number;
  };
  skills: {
    name: string;
    demand: number;
    growth: number;
  }[];
  companies: {
    name: string;
    hiring: number;
    growth: number;
  }[];
  trends: {
    year: number;
    demand: number;
    salary: number;
  }[];
}

const sampleMarketData: Record<string, MarketData> = {
  "Data Scientist": {
    career: "Data Scientist",
    demand: "Very High",
    growth: "High",
    salary: {
      min: 70000000,
      max: 100000000,
      average: 85000000
    },
    skills: [
      { name: "Python", demand: 95, growth: 15 },
      { name: "Machine Learning", demand: 90, growth: 20 },
      { name: "SQL", demand: 85, growth: 10 },
      { name: "Data Analysis", demand: 88, growth: 12 },
      { name: "Statistics", demand: 82, growth: 8 }
    ],
    companies: [
      { name: "Samsung", hiring: 120, growth: 25 },
      { name: "LG", hiring: 85, growth: 20 },
      { name: "SK Telecom", hiring: 95, growth: 22 },
      { name: "Naver", hiring: 110, growth: 28 },
      { name: "Kakao", hiring: 90, growth: 23 }
    ],
    trends: [
      { year: 2020, demand: 75, salary: 75000000 },
      { year: 2021, demand: 82, salary: 78000000 },
      { year: 2022, demand: 88, salary: 82000000 },
      { year: 2023, demand: 92, salary: 85000000 }
    ]
  },
  "AI Engineer": {
    career: "AI Engineer",
    demand: "Very High",
    growth: "Very High",
    salary: {
      min: 80000000,
      max: 120000000,
      average: 95000000
    },
    skills: [
      { name: "Deep Learning", demand: 98, growth: 25 },
      { name: "TensorFlow", demand: 92, growth: 22 },
      { name: "PyTorch", demand: 90, growth: 20 },
      { name: "Computer Vision", demand: 88, growth: 18 },
      { name: "NLP", demand: 85, growth: 15 }
    ],
    companies: [
      { name: "Naver", hiring: 150, growth: 35 },
      { name: "Kakao", hiring: 120, growth: 30 },
      { name: "Hyundai", hiring: 100, growth: 28 },
      { name: "LG AI Research", hiring: 90, growth: 25 },
      { name: "Samsung Research", hiring: 110, growth: 32 }
    ],
    trends: [
      { year: 2020, demand: 80, salary: 80000000 },
      { year: 2021, demand: 88, salary: 85000000 },
      { year: 2022, demand: 92, salary: 90000000 },
      { year: 2023, demand: 95, salary: 95000000 }
    ]
  }
};

interface MarketAnalyticsProps {
  language: 'en' | 'ko';
}

export function MarketAnalytics({ language }: MarketAnalyticsProps) {
  const [selectedCareer, setSelectedCareer] = useState<string>("Data Scientist");
  const t = translations[language];
  const data = sampleMarketData[selectedCareer];

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Career Selector */}
      <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0">
        {Object.keys(sampleMarketData).map((career) => (
          <motion.button
            key={career}
            onClick={() => setSelectedCareer(career)}
            className={`px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap text-sm sm:text-base ${
              selectedCareer === career
                ? 'bg-primary text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {career}
          </motion.button>
        ))}
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-background-dark"
        >
          <h3 className="text-lg font-medium mb-4">Market Demand</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Current Demand</p>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${
                      data.demand === 'Very High' ? 'bg-red-500' :
                      data.demand === 'High' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${data.demand === 'Very High' ? 95 : data.demand === 'High' ? 75 : 50}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className="text-sm font-medium">{data.demand}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Growth Potential</p>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${
                      data.growth === 'Very High' ? 'bg-green-500' :
                      data.growth === 'High' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${data.growth === 'Very High' ? 95 : data.growth === 'High' ? 75 : 50}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className="text-sm font-medium">{data.growth}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-lg bg-background-dark"
        >
          <h3 className="text-lg font-medium mb-4">Salary Range</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Average Salary</p>
              <p className="text-2xl font-bold text-primary">
                {new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
                  .format(data.salary.average)
                  .replace('KRW', 'KRW')}
              </p>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Min: {new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
                .format(data.salary.min)
                .replace('KRW', 'KRW')}</span>
              <span>Max: {new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
                .format(data.salary.max)
                .replace('KRW', 'KRW')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-6 rounded-lg bg-background-dark"
        >
          <h3 className="text-base sm:text-lg font-medium mb-4">Top Companies</h3>
          <div className="space-y-3">
            {data.companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
              >
                <span className="text-gray-300 text-sm sm:text-base">{company.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-green-400">+{company.growth}%</span>
                  <span className="text-xs sm:text-sm text-gray-400">({company.hiring} positions)</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-lg bg-background-dark"
      >
        <h3 className="text-lg font-medium mb-4">Skills Analysis</h3>
        <div className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <div className="flex gap-4">
                  <span className="text-sm text-orange-400">Demand: {skill.demand}%</span>
                  <span className="text-sm text-green-400">Growth: +{skill.growth}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.demand}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Market Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-lg bg-background-dark"
      >
        <h3 className="text-lg font-medium mb-4">Market Trends</h3>
        <div className="space-y-4">
          {data.trends.map((trend, index) => (
            <motion.div
              key={trend.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-between items-center"
            >
              <span className="text-gray-300">{trend.year}</span>
              <div className="flex gap-4">
                <span className="text-sm text-orange-400">Demand: {trend.demand}%</span>
                <span className="text-sm text-primary">
                  Salary: {new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
                    .format(trend.salary)
                    .replace('KRW', 'KRW')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 