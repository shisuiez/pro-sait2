export interface ScientificAchievements {
  nobelPrizes: number;
  topUniversities: string[];
  researchCenters: number;
}

export interface TechInnovations {
  total: number;
  patents: number;
  startups: number;
}

export interface ResearchCenter {
  name: string;
  location: string;
  focus: string;
  publications: number;
  citations: number;
}

export interface Publications {
  total: number;
  yearlyBreakdown: { [key: string]: number };
  topJournals: string[];
}

export interface Collaboration {
  country: string;
  projects: number;
  publications: number;
}

export interface Collaborations {
  total: number;
  byCountry: { [key: string]: number };
  topPartners: Collaboration[];
}

export interface CountryStats {
  techJobs: number;
  averageSalary: number;
  growth: number;
  demand: number;
  startupEcosystem: number;
  digitalInfrastructure: number;
  talentPool: number;
  innovationIndex: number;
  researchOutput: number;
  aiPublications: number;
  techPatents: number;
  universityRankings: number;
  rdInvestment: number;
  stemGraduates: number;
  scientificAchievements?: ScientificAchievements;
  techInnovations?: TechInnovations;
  researchCenters?: {
    total: number;
    topCenters: ResearchCenter[];
  };
  publications?: Publications;
  collaborations?: Collaborations;
}

export interface CountryData {
  name: string;
  stats: CountryStats;
} 