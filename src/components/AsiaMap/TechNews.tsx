import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  source: string;
  category: 'AI' | 'Robotics' | 'Biotech' | 'GreenTech' | 'Quantum';
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Samsung представила новый чип для ИИ',
    description: 'Компания Samsung Electronics представила новый процессор для искусственного интеллекта, который обещает революцию в области машинного обучения.',
    date: '2024-03-15',
    source: 'TechCrunch',
    category: 'AI'
  },
  {
    id: 2,
    title: 'Прорыв в квантовых вычислениях',
    description: 'Корейские ученые достигли нового рекорда в стабильности квантовых битов, что приближает нас к созданию практических квантовых компьютеров.',
    date: '2024-03-14',
    source: 'Nature',
    category: 'Quantum'
  },
  {
    id: 3,
    title: 'Новые достижения в робототехнике',
    description: 'Исследователи из KAIST представили нового робота, способного выполнять сложные манипуляции с предметами.',
    date: '2024-03-13',
    source: 'Science Robotics',
    category: 'Robotics'
  },
  {
    id: 4,
    title: 'Биотехнологии: новый метод генной терапии',
    description: 'Южнокорейские биотехнологи разработали инновационный способ доставки генов для лечения редких заболеваний.',
    date: '2024-03-12',
    source: 'BioTech Asia',
    category: 'Biotech'
  },
  {
    id: 5,
    title: 'Зеленые технологии: рекорд по солнечной энергии',
    description: 'В Сеуле установлен новый рекорд по выработке солнечной энергии на городских крышах.',
    date: '2024-03-11',
    source: 'GreenTech News',
    category: 'GreenTech'
  },
  {
    id: 6,
    title: 'ИИ в медицине: диагностика рака',
    description: 'Искусственный интеллект помогает врачам диагностировать рак на ранних стадиях с точностью 98%.',
    date: '2024-03-10',
    source: 'MedAI Journal',
    category: 'AI'
  },
  {
    id: 7,
    title: 'Роботы-ассистенты в школах',
    description: 'В корейских школах начали использовать роботов-ассистентов для помощи учителям и ученикам.',
    date: '2024-03-09',
    source: 'EdTech Korea',
    category: 'Robotics'
  },
  {
    id: 8,
    title: 'Квантовые коммуникации: первый тест',
    description: 'Проведен первый успешный тест квантовой защищенной связи между университетами Сеула и Пусана.',
    date: '2024-03-08',
    source: 'Quantum World',
    category: 'Quantum'
  }
];

export const TechNews: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="relative w-[420px] max-w-full"
      style={{ pointerEvents: 'auto' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition text-2xl"
        aria-label="Новости"
      >
        <span>📰</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900/80 shadow-2xl rounded-2xl p-6 pt-8 backdrop-blur-md text-white flex flex-col gap-3"
            style={{ maxHeight: 600, minHeight: 180, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#3b82f6 #222' }}
          >
            <h2 className="text-xl font-bold mb-2">Технологические новости</h2>
            <div className="flex flex-col gap-3">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-gray-800/70 rounded-lg p-3 hover:bg-gray-700 transition flex flex-col gap-1 shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-semibold text-sm sm:text-base truncate max-w-full sm:max-w-[70%]">{news.title}</span>
                    <span className="text-xs text-blue-400">{news.category}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 line-clamp-2">{news.description}</span>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-gray-500 mt-1 gap-1">
                    <span>{news.date}</span>
                    <span>{news.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 