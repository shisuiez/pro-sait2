import { motion } from 'framer-motion';
import { CountryStats, ScientificAchievements, TechInnovations, Publications, Collaborations } from './types';

interface NumberStatProps {
  label: string;
  value: number;
  index: number;
  maxValue: number;
}

export const NumberStat: React.FC<NumberStatProps> = ({ label, value, index, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800/50 p-4 rounded-lg"
    >
      <h6 className="text-sm font-semibold mb-2">{label}</h6>
      <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-2 bg-blue-500 rounded-full mt-2"
      />
    </motion.div>
  );
};

interface ComplexStatProps {
  label: string;
  value: ScientificAchievements | TechInnovations | Publications | Collaborations | { total: number; topCenters: any[] } | undefined;
  index: number;
  maxValue: number;
}

export const ComplexStat: React.FC<ComplexStatProps> = ({ label, value, index, maxValue }) => {
  const getDisplayValue = (): string => {
    if (!value) return 'N/A';
    
    if (label === 'scientificAchievements' && 'nobelPrizes' in value) {
      return `${value.nobelPrizes} Nobel Prizes`;
    }
    if (label === 'techInnovations' && 'total' in value) {
      return `${value.total} Innovations`;
    }
    if (label === 'researchCenters' && 'total' in value) {
      return `${value.total} Centers`;
    }
    if (label === 'publications' && 'total' in value) {
      return `${value.total} Publications`;
    }
    if (label === 'collaborations' && 'total' in value) {
      return `${value.total} Collaborations`;
    }
    return 'N/A';
  };

  const getGraphValue = (): number => {
    if (!value) return 0;
    
    if (label === 'publications' && 'yearlyBreakdown' in value) {
      return Object.values(value.yearlyBreakdown).reduce((sum: number, count: any) => sum + (typeof count === 'number' ? count : 0), 0);
    }
    if (label === 'collaborations' && 'total' in value) {
      return value.total;
    }
    return 0;
  };

  const displayValue = getDisplayValue();
  const graphValue = getGraphValue();
  const percentage = (graphValue / maxValue) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800/50 p-4 rounded-lg"
    >
      <h6 className="text-sm font-semibold mb-2">{label}</h6>
      <p className="text-2xl font-bold">{displayValue}</p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-2 bg-blue-500 rounded-full mt-2"
      />
    </motion.div>
  );
};

export const renderStats = (stats: CountryStats, maxValue: number) => {
  return Object.entries(stats).map(([key, value], index) => {
    if (typeof value === 'number') {
      return (
        <NumberStat
          key={key}
          label={key}
          value={value}
          index={index}
          maxValue={maxValue}
        />
      );
    }
    return (
      <ComplexStat
        key={key}
        label={key}
        value={value}
        index={index}
        maxValue={maxValue}
      />
    );
  });
}; 