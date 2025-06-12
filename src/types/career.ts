export interface Question {
  id: number;
  text: string;
  options: Array<{
    value: string;
    text: string;
  }>;
}

export interface Option {
  id: number;
  text: string;
  score: number;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  demand: string;
  growth: string;
  salary: {
    min: number;
    max: number;
  };
  companies?: string[];
  experience?: string;
  education?: string;
  certifications?: string[];
}

export interface TestResult {
  skills: Record<string, number>;
  interests: Record<string, number>;
  personality: Record<string, number>;
  recommendedCareers: string[];
} 