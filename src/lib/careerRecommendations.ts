import { TestResult, CareerPath } from '@/types/career';

// Веса для разных аспектов при подборе карьеры
const WEIGHTS = {
  skills: 0.4,
  interests: 0.3,
  personality: 0.3
};

// Матрица соответствия навыков и карьерных путей
const SKILL_CAREER_MATRIX: Record<string, string[]> = {
  analytical: ['Data Scientist', 'Business Analyst', 'Software Engineer', 'Research Scientist'],
  creative: ['UX Designer', 'Product Designer', 'Content Creator', 'Marketing Specialist'],
  technical: ['Software Engineer', 'DevOps Engineer', 'System Administrator', 'Network Engineer'],
  communication: ['Project Manager', 'Business Analyst', 'Marketing Manager', 'HR Specialist'],
  leadership: ['Project Manager', 'Team Lead', 'Product Manager', 'Business Development Manager'],
  problem_solving: ['Software Engineer', 'Data Scientist', 'Research Scientist', 'Business Analyst'],
  teamwork: ['Project Manager', 'Product Manager', 'HR Specialist', 'Marketing Manager'],
  innovation: ['Product Manager', 'UX Designer', 'Research Scientist', 'Business Development Manager']
};

// Матрица соответствия интересов и карьерных путей
const INTEREST_CAREER_MATRIX: Record<string, string[]> = {
  technology: ['Software Engineer', 'DevOps Engineer', 'Data Scientist', 'System Administrator'],
  design: ['UX Designer', 'Product Designer', 'Graphic Designer', 'UI Developer'],
  business: ['Business Analyst', 'Project Manager', 'Marketing Manager', 'Business Development Manager'],
  research: ['Research Scientist', 'Data Scientist', 'Business Analyst', 'Product Manager'],
  management: ['Project Manager', 'Team Lead', 'Product Manager', 'HR Specialist'],
  marketing: ['Marketing Manager', 'Content Creator', 'Product Manager', 'Business Development Manager']
};

// Матрица соответствия личностных качеств и карьерных путей
const PERSONALITY_CAREER_MATRIX: Record<string, string[]> = {
  analytical: ['Data Scientist', 'Business Analyst', 'Software Engineer', 'Research Scientist'],
  creative: ['UX Designer', 'Product Designer', 'Content Creator', 'Marketing Specialist'],
  organized: ['Project Manager', 'Business Analyst', 'HR Specialist', 'System Administrator'],
  social: ['HR Specialist', 'Marketing Manager', 'Business Development Manager', 'Project Manager'],
  detail_oriented: ['Software Engineer', 'Data Scientist', 'Business Analyst', 'System Administrator'],
  strategic: ['Product Manager', 'Business Development Manager', 'Project Manager', 'Marketing Manager']
};

export function getCareerRecommendations(result: TestResult): CareerPath[] {
  // Создаем карту для подсчета баллов карьерных путей
  const careerScores: Record<string, number> = {};

  // Оцениваем карьеры на основе навыков
  Object.entries(result.skills).forEach(([skill, score]) => {
    const careers = SKILL_CAREER_MATRIX[skill] || [];
    careers.forEach(career => {
      careerScores[career] = (careerScores[career] || 0) + score * WEIGHTS.skills;
    });
  });

  // Оцениваем карьеры на основе интересов
  Object.entries(result.interests).forEach(([interest, score]) => {
    const careers = INTEREST_CAREER_MATRIX[interest] || [];
    careers.forEach(career => {
      careerScores[career] = (careerScores[career] || 0) + score * WEIGHTS.interests;
    });
  });

  // Оцениваем карьеры на основе личностных качеств
  Object.entries(result.personality).forEach(([trait, score]) => {
    const careers = PERSONALITY_CAREER_MATRIX[trait] || [];
    careers.forEach(career => {
      careerScores[career] = (careerScores[career] || 0) + score * WEIGHTS.personality;
    });
  });

  // Сортируем карьеры по баллам
  const sortedCareers = Object.entries(careerScores)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([career]) => career);

  // Возвращаем топ-5 рекомендованных карьерных путей
  return sortedCareers.slice(0, 5).map(career => ({
    id: career.toLowerCase().replace(/\s+/g, '-'),
    title: career,
    description: getCareerDescription(career),
    skills: getRequiredSkills(career),
    demand: getCareerDemand(career),
    growth: getCareerGrowth(career),
    salary: getCareerSalary(career),
    companies: getTopCompanies(career),
    experience: getRequiredExperience(career),
    education: getRequiredEducation(career),
    certifications: getRecommendedCertifications(career)
  }));
}

// Вспомогательные функции для получения детальной информации о карьерных путях
function getCareerDescription(career: string): string {
  const descriptions: Record<string, string> = {
    'Software Engineer': 'Разработка программного обеспечения, создание и поддержка приложений',
    'Data Scientist': 'Анализ данных, машинное обучение, статистический анализ',
    'UX Designer': 'Проектирование пользовательского опыта, создание интерфейсов',
    'Project Manager': 'Управление проектами, координация команд, контроль сроков и бюджета',
    'Business Analyst': 'Анализ бизнес-процессов, оптимизация операций',
    // Добавьте описания для других карьерных путей
  };
  return descriptions[career] || 'Описание карьерного пути';
}

function getRequiredSkills(career: string): string[] {
  const skills: Record<string, string[]> = {
    'Software Engineer': ['Programming', 'Problem Solving', 'System Design', 'Testing'],
    'Data Scientist': ['Statistics', 'Machine Learning', 'Python', 'Data Analysis'],
    'UX Designer': ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    'Project Manager': ['Leadership', 'Communication', 'Risk Management', 'Agile'],
    'Business Analyst': ['Requirements Analysis', 'Process Modeling', 'Data Analysis', 'Communication'],
    // Добавьте навыки для других карьерных путей
  };
  return skills[career] || [];
}

function getCareerDemand(career: string): string {
  const demand: Record<string, string> = {
    'Software Engineer': 'Very High',
    'Data Scientist': 'High',
    'UX Designer': 'High',
    'Project Manager': 'High',
    'Business Analyst': 'Medium',
    // Добавьте спрос для других карьерных путей
  };
  return demand[career] || 'Medium';
}

function getCareerGrowth(career: string): string {
  const growth: Record<string, string> = {
    'Software Engineer': 'Rapid',
    'Data Scientist': 'Rapid',
    'UX Designer': 'High',
    'Project Manager': 'Steady',
    'Business Analyst': 'Steady',
    // Добавьте рост для других карьерных путей
  };
  return growth[career] || 'Steady';
}

function getCareerSalary(career: string): { min: number; max: number } {
  const salaries: Record<string, { min: number; max: number }> = {
    'Software Engineer': { min: 60000, max: 150000 },
    'Data Scientist': { min: 70000, max: 160000 },
    'UX Designer': { min: 50000, max: 120000 },
    'Project Manager': { min: 65000, max: 140000 },
    'Business Analyst': { min: 55000, max: 110000 },
    // Добавьте зарплаты для других карьерных путей
  };
  return salaries[career] || { min: 40000, max: 100000 };
}

function getTopCompanies(career: string): string[] {
  const companies: Record<string, string[]> = {
    'Software Engineer': ['Google', 'Microsoft', 'Amazon', 'Meta'],
    'Data Scientist': ['Google', 'Amazon', 'IBM', 'Microsoft'],
    'UX Designer': ['Apple', 'Google', 'Adobe', 'Figma'],
    'Project Manager': ['Microsoft', 'IBM', 'Oracle', 'SAP'],
    'Business Analyst': ['Deloitte', 'PwC', 'KPMG', 'EY'],
    // Добавьте компании для других карьерных путей
  };
  return companies[career] || [];
}

function getRequiredExperience(career: string): string {
  const experience: Record<string, string> = {
    'Software Engineer': '2-5 years',
    'Data Scientist': '3-5 years',
    'UX Designer': '2-4 years',
    'Project Manager': '3-6 years',
    'Business Analyst': '2-4 years',
    // Добавьте опыт для других карьерных путей
  };
  return experience[career] || '2-4 years';
}

function getRequiredEducation(career: string): string {
  const education: Record<string, string> = {
    'Software Engineer': 'Bachelor\'s in Computer Science',
    'Data Scientist': 'Master\'s in Data Science or related field',
    'UX Designer': 'Bachelor\'s in Design or related field',
    'Project Manager': 'Bachelor\'s degree + PMP certification',
    'Business Analyst': 'Bachelor\'s in Business or related field',
    // Добавьте образование для других карьерных путей
  };
  return education[career] || 'Bachelor\'s degree';
}

function getRecommendedCertifications(career: string): string[] {
  const certifications: Record<string, string[]> = {
    'Software Engineer': ['AWS Certified Developer', 'Google Cloud Professional'],
    'Data Scientist': ['AWS Machine Learning', 'Google Data Analytics'],
    'UX Designer': ['Google UX Design', 'Interaction Design Foundation'],
    'Project Manager': ['PMP', 'PRINCE2'],
    'Business Analyst': ['CBAP', 'ECBA'],
    // Добавьте сертификации для других карьерных путей
  };
  return certifications[career] || [];
} 