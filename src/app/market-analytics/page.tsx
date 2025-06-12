'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { t } from '@/lib/language';
import AsiaMap from '@/components/AsiaMap/AsiaMap';
import { TechNews } from '@/components/AsiaMap/TechNews';
import CareerGrowthChart from './CareerGrowthChart';

export default function MarketAnalyticsPage() {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  // Дополнительные данные для Market Overview
  const countriesCount = 14;
  const companiesCount = 1200;
  const avgExperience = '3-5 years';
  const avgAge = 29;
  const topCities = ['Seoul', 'Tokyo', 'Singapore'];

  // Дополнительные данные для Top Skills
  const skillsDetails = [
    {
      name: 'AI/ML',
      description: 'Machine learning and artificial intelligence are key technologies for automation and data analysis.',
      avgSalary: '$85,000',
      demand: 'Very High',
      growth: '+22%',
      topCompany: 'Naver'
    },
    {
      name: 'Cloud Computing',
      description: 'Cloud technologies allow companies to scale infrastructure and services.',
      avgSalary: '$80,000',
      demand: 'High',
      growth: '+18%',
      topCompany: 'Samsung SDS'
    },
    {
      name: 'Cybersecurity',
      description: 'Cybersecurity protects data and systems from threats and attacks.',
      avgSalary: '$78,000',
      demand: 'High',
      growth: '+15%',
      topCompany: 'SK Telecom'
    },
    {
      name: 'Data Science',
      description: 'Analysis and processing of big data for business decision-making.',
      avgSalary: '$82,000',
      demand: 'Very High',
      growth: '+20%',
      topCompany: 'Kakao'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t('analytics.title', language)}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Map Section */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-6">
                {t('analytics.regionalAnalysis.title', language)}
              </h2>
              <div className="w-full h-[300px] flex items-center justify-center">
                <AsiaMap />
              </div>
            </div>

            {/* Market Overview */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6">
                  {t('analytics.marketOverview.title', language)}
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 mb-2">{t('analytics.marketOverview.totalTechJobs', language)}</p>
                    <p className="text-3xl font-bold text-blue-400">1.2M+</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">{t('analytics.marketOverview.averageSalary', language)}</p>
                    <p className="text-3xl font-bold text-green-400">$74,500</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">{t('analytics.marketOverview.marketGrowth', language)}</p>
                    <p className="text-3xl font-bold text-yellow-400">16.2%</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-gray-400 text-sm">{t('analytics.marketOverview.countriesLabel', language)}</p>
                      <p className="text-lg font-semibold">{countriesCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('analytics.marketOverview.companiesLabel', language)}</p>
                      <p className="text-lg font-semibold">{companiesCount}+</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('analytics.marketOverview.avgExperienceLabel', language)}</p>
                      <p className="text-lg font-semibold">{avgExperience}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('analytics.marketOverview.avgAgeLabel', language)}</p>
                      <p className="text-lg font-semibold">{avgAge}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400 text-sm">{t('analytics.marketOverview.topCitiesLabel', language)}</p>
                      <p className="text-lg font-semibold">{topCities.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6">
                  {t('analytics.topSkills.title', language)}
                </h2>
                <div className="space-y-4">
                  {skillsDetails.slice(0, 10).map((skill: any, index: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/60 rounded-lg p-4 flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-semibold">{skill.name}</span>
                        <span className="text-xs text-blue-400">{skill.growth} {t('analytics.topSkills.growthLabel', language)}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{t(`analytics.topSkills.descriptions.${skill.name.replace(/\s|\//g, '')}`, language)}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-green-400">{t('analytics.topSkills.salaryLabel', language)} {skill.avgSalary}</span>
                        <span className="text-yellow-400">{t('analytics.topSkills.demandLabel', language)} {skill.demand}</span>
                        <span className="text-purple-400">{t('analytics.topSkills.topCompanyLabel', language)} {skill.topCompany}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* TechNews Column */}
            <div>
              <TechNews />
            </div>
          </div>
        </motion.div>
        <CareerGrowthChart />
      </div>
    </div>
  );
} 