type TranslationKey = string;
type TranslationValue = string | { [key: string]: string | { [key: string]: string | { [key: string]: string } } };

type Translations = Record<TranslationKey, TranslationValue>;

type TranslationType = {
  en: Translations;
  ko: Translations;
};

export const translations: TranslationType = {
  en: {
    // Hero Section
    heroTitle: "Welcome to CareerGlobal",
    heroSubtitle: "Your path to international career success",
    
    // Basic UI
    welcome: "Welcome to CareerGlobal",
    subtitle: "Your path to international career success",
    startTest: "Start Test",
    backToHome: "Back to Home",
    previous: "Previous",
    next: "Next",
    complete: "Complete Test",
    
    // Career Test
    careerTest: "Career Test",
    question: "Question",
    of: "of",
    results: "Your Results",
    testResults: "Your Career Recommendations",
    requirements: "Requirements",
    
    // Test Questions
    questions: {
      workPreference: {
        text: "How do you prefer to work?",
        options: {
          independent: "Independently, with minimal supervision",
          team: "In a team, collaborating with others",
          mixed: "A mix of independent and team work",
          leadership: "Leading and managing others"
        }
      },
      problemSolving: {
        text: "How do you approach problem-solving?",
        options: {
          analytical: "Through detailed analysis and research",
          creative: "Using creative and innovative solutions",
          practical: "With practical, hands-on approaches",
          strategic: "By developing long-term strategies"
        }
      },
      communication: {
        text: "What type of communication do you prefer?",
        options: {
          written: "Written communication (emails, reports)",
          verbal: "Verbal communication (meetings, presentations)",
          visual: "Visual communication (diagrams, charts)",
          technical: "Technical documentation and specifications"
        }
      },
      learningStyle: {
        text: "How do you prefer to learn new things?",
        options: {
          handsOn: "Through hands-on experience",
          theoretical: "Through theoretical study",
          mentorship: "Through mentorship and guidance",
          selfStudy: "Through self-directed learning"
        }
      },
      workEnvironment: {
        text: "What work environment do you prefer?",
        options: {
          office: "Traditional office setting",
          remote: "Remote work",
          hybrid: "Hybrid work arrangement",
          field: "Field work or client sites"
        }
      },
      stressManagement: {
        text: "How do you handle high-pressure situations?",
        options: {
          calm: "Stay calm and methodical",
          energetic: "Channel energy into solutions",
          collaborative: "Seek team support",
          strategic: "Develop contingency plans"
        }
      },
      technology: {
        text: "How do you feel about working with technology?",
        options: {
          expert: "I want to be a technology expert",
          user: "I'm comfortable using technology",
          learner: "I'm willing to learn new technologies",
          minimal: "I prefer minimal technology use"
        }
      },
      creativity: {
        text: "How important is creativity in your work?",
        options: {
          essential: "Essential for my work",
          important: "Important but not essential",
          occasional: "Occasionally needed",
          minimal: "Minimal creativity required"
        }
      },
      decisionMaking: {
        text: "How do you prefer to make decisions?",
        options: {
          data: "Based on data and analysis",
          intuition: "Using intuition and experience",
          consensus: "Through team consensus",
          guidance: "With supervisor guidance"
        }
      },
      workLifeBalance: {
        text: "What's your preferred work schedule?",
        options: {
          regular: "Regular 9-5 schedule",
          flexible: "Flexible hours",
          project: "Project-based deadlines",
          intensive: "Intensive work periods"
        }
      },
      leadership: {
        text: "How do you feel about leadership roles?",
        options: {
          aspiring: "I aspire to leadership positions",
          comfortable: "I'm comfortable leading when needed",
          supportive: "I prefer supporting roles",
          individual: "I prefer individual contributor roles"
        }
      },
      innovation: {
        text: "How do you approach innovation?",
        options: {
          pioneer: "I like to pioneer new ideas",
          improver: "I improve existing solutions",
          adapter: "I adapt innovations to needs",
          implementer: "I implement proven solutions"
        }
      },
      riskTaking: {
        text: "How do you feel about taking risks?",
        options: {
          calculated: "I take calculated risks",
          conservative: "I prefer conservative approaches",
          balanced: "I balance risk and reward",
          adventurous: "I'm comfortable with high risk"
        }
      },
      problemComplexity: {
        text: "What type of problems do you prefer to solve?",
        options: {
          complex: "Complex, multi-faceted problems",
          technical: "Technical challenges",
          people: "People-related issues",
          process: "Process improvement"
        }
      },
      careerGrowth: {
        text: "What's most important for your career growth?",
        options: {
          skills: "Developing new skills",
          position: "Advancing in position",
          impact: "Making an impact",
          stability: "Job stability"
        }
      },
      workStyle: {
        text: "What's your preferred work style?",
        options: {
          structured: "Highly structured and organized",
          flexible: "Flexible and adaptable",
          creative: "Creative and innovative",
          systematic: "Systematic and methodical"
        }
      },
      communicationStyle: {
        text: "What's your preferred communication style?",
        options: {
          direct: "Direct and straightforward",
          diplomatic: "Diplomatic and tactful",
          detailed: "Detailed and thorough",
          concise: "Concise and to the point"
        }
      }
    },
    
    // Skills and Experience
    requiredSkills: "Required Skills",
    experience: "Experience",
    education: "Education",
    certifications: "Recommended Certifications",
    skillsAssessment: "Skills Assessment",
    skillsAnalysis: "Skills Analysis",
    
    // Work Preferences
    workStyle: {
      independent: "Independently, with minimal supervision",
      team: "In a team, collaborating with others",
      mixed: "A mix of independent and team work"
    },
    
    // Leadership
    leadership: {
      role: "Leading and managing others",
      style: "Leading when needed",
      aspiring: "I aspire to leadership positions",
      comfortable: "I'm comfortable leading when needed",
      supportive: "I prefer supporting roles",
      individual: "I prefer individual contributor roles"
    },
    
    // Technical
    technical: {
      doc: "Technical documentation and specifications",
      challenge: "Technical challenges",
      analytical: "Technical and analytical",
      expert: "I want to be a technology expert",
      user: "I'm comfortable using technology",
      learner: "I'm willing to learn new technologies",
      minimal: "I prefer minimal technology use"
    },
    
    // Creative
    creative: {
      style: "Creative and innovative",
      work: "Creative and innovative",
      env: "Creative and innovative",
      pioneer: "I like to pioneer new ideas",
      improver: "I improve existing solutions",
      adapter: "I adapt innovations to needs",
      implementer: "I implement proven solutions"
    },
    
    // Collaborative
    collaborative: {
      support: "Seek team support",
      team: "Through team collaboration",
      inclusive: "Collaborative and inclusive"
    },
    
    // Structured
    structured: {
      work: "Highly structured and organized",
      process: "Following a structured process",
      systematic: "Systematic and methodical"
    },
    
    // Flexible
    flexible: {
      hours: "Flexible hours",
      adaptable: "Flexible and adaptable"
    },
    
    // Supportive
    supportive: {
      role: "I prefer supporting roles",
      mentoring: "Supportive and mentoring"
    },
    
    // Strategic
    strategic: {
      planning: "By developing long-term strategies",
      vision: "Strategic and visionary"
    },
    
    // Risk
    risk: {
      averse: "I'm risk-averse",
      calculated: "I take calculated risks",
      conservative: "I prefer conservative approaches",
      balanced: "I balance risk and reward",
      adventurous: "I'm comfortable with high risk"
    },
    
    // Schedule
    schedule: {
      guidance: "With supervisor guidance",
      regular: "Regular 9-5 schedule",
      project: "Project-based deadlines",
      intensive: "Intensive work periods"
    },

    // Marketing
    careerTesting: "Career Testing",
    careerTestingDesc: "Discover your perfect career path with our comprehensive assessment",
    marketAnalytics: "Market Analytics",
    marketAnalyticsDesc: "Explore global job market trends and opportunities",
    learningPaths: "Learning Paths",
    learningPathsDesc: "Get personalized recommendations for your career development",
    
    // Market Data
    topCompanies: "Top Companies",
    marketDemand: "Market Demand",
    currentDemand: "Current Demand",
    growthPotential: "Growth Potential",
    salaryRange: "Salary Range",
    averageSalary: "Average Salary",
    topCities: "Top Cities",
    salary: "Salary",
    demandLabel: "Demand",
    topCompany: "Top Company",
    growthLabel: "growth",
    
    // Analysis
    testQuestions: "Test Questions",
    analyzedSkills: "Analyzed Skills",
    regionalAnalysis: "Regional Analysis",
    marketOverview: "Market Overview",
    totalTechJobs: "Total Tech Jobs",
    marketGrowth: "Market Growth",
    topSkills: "Top Skills",
    countries: "Countries",
    companies: "Companies",
    avgExperience: "Average Experience",
    avgAge: "Average Age",
    
    // Company Info
    satisfactionRate: "Satisfaction Rate",
    careerPaths: "Career Paths",
    countriesCovered: "Countries Covered",
    successStories: "Success Stories",
    testimonial1: "CareerGlobal helped me find my dream job in Seoul. The career test was incredibly accurate and the market insights were invaluable.",
    testimonial1Author: "Sarah Kim, Software Engineer",
    testimonial2: "The platform provided me with a clear roadmap to transition into tech. I'm now working at a leading AI company in Tokyo.",
    testimonial2Author: "Michael Chen, AI Specialist",
    
    // About
    aboutUs: "About CareerGlobal",
    aboutDescription: "We are dedicated to helping young professionals find their ideal career paths in Asia's most dynamic markets",
    ourMission: "Our Mission",
    missionDescription: "To empower individuals with data-driven career insights and personalized guidance for success in Asian markets",
    ourVision: "Our Vision",
    visionDescription: "To become the leading career guidance platform connecting talent with opportunities across Asia",
    ourValues: "Our Values",
    valuesDescription: "Innovation, accuracy, and personalized support in career development",
    ourServices: "Our Services",
    careerTestDescription: "Take our comprehensive career test to discover your perfect career path",
    marketAnalyticsDescription: "Explore detailed market insights and trends across Asian markets",
    
    // CTA
    readyToStart: "Ready to Start Your Career Journey?",
    ctaDescription: "Take our career test now and discover your perfect career path in Asia",
    viewAnalytics: "View Market Analytics",
    ourImpact: "Our Impact",
    usersServed: "Users Served",

    // Navigation
    navigation: {
      careerTest: "Career Test",
      analytics: "Analytics",
      learning: "Learning",
      tracker: "Tracker",
      community: "Community",
      profile: "Profile",
      lightTheme: "Light Theme",
      darkTheme: "Dark Theme",
      toggleTheme: "Toggle theme"
    },

    // Analytics Page
    analytics: {
      title: "Global Job Market Analytics",
      koreaStats: {
        title: "Company Statistics in Korea",
        company: "Company",
        profession: "Profession",
        salary: "Salary (₩/year)",
        openings: "Openings",
        trend: "Trend"
      },
      tooltip: {
        salary: "Salary",
        demandGrowth: "Demand Growth"
      },
      chart: {
        salary: "Salary",
        demandGrowth: "Demand Growth, %"
      },
      countries: {
        KOR: "South Korea",
        JPN: "Japan",
        TWN: "Taiwan",
        CHN: "China"
      }
    },

    // Learning Page
    learning: {
      title: "Educational Paths",
      selectProfession: "Select a profession:",
      professions: {
        dataScientist: "Data Scientist",
        aiEngineer: "AI Engineer",
        cybersecurity: "Cybersecurity"
      },
      courses: {
        dataScience: "Data Science Specialization (Coursera)",
        machineLearning: "Machine Learning (Coursera, Andrew Ng)",
        pythonDataScience: "Python for Data Science (edX)",
        deepLearning: "Deep Learning Specialization (Coursera)",
        aiForEveryone: "AI For Everyone (Coursera, Andrew Ng)",
        aiNanodegree: "Artificial Intelligence Nanodegree (Udacity)",
        introCybersecurity: "Introduction to Cyber Security (Coursera)",
        networkSecurity: "Network Security (edX)",
        ethicalHacker: "Certified Ethical Hacker (CEH) (EC-Council)"
      }
    },

    // Tracker Page
    tracker: {
      title: "Career Tracker",
      progress: "Progress: {progress}%",
      steps: {
        learnPython: {
          title: "Learn Python",
          description: "Complete a basic Python course for data analysis."
        },
        internship: {
          title: "Complete Internship",
          description: "Get first work experience in an IT company."
        },
        certification: {
          title: "Get Certification",
          description: "Pass the exam and get an international certificate."
        },
        firstJob: {
          title: "Find First Job",
          description: "Get hired as a Junior Data Scientist."
        }
      },
      completed: "✓ Completed"
    },

    // Community Page
    community: {
      title: "Community",
      welcome: "Welcome to CareerGlobal community! Ask your question.",
      thanks: "Thank you for your question! We will answer soon.",
      input: {
        placeholder: "Type a message...",
        send: "Send"
      },
      roles: {
        mentor: "Mentor",
        you: "You"
      }
    },

    // Profile Page
    profile: {
      logout: "Logout",
      logoutConfirm: "Logout from profile (mock)"
    },

    // Career Recommendations
    recommendations: {
      title: "Recommended Careers",
      description: "Based on your answers, we recommend the following career paths:",
      dataScientist: {
        title: "Data Scientist",
        description: "Analyze complex data sets to help guide business decisions",
        skills: {
          skill1: "Python",
          skill2: "SQL",
          skill3: "Machine Learning",
          skill4: "Statistics",
          skill5: "Data Visualization"
        },
        salary: "Average salary: $120,000/year",
        growth: "High growth potential"
      },
      aiEngineer: {
        title: "AI Engineer",
        description: "Develop and implement artificial intelligence solutions",
        skills: {
          skill1: "Python",
          skill2: "TensorFlow",
          skill3: "Deep Learning",
          skill4: "Neural Networks",
          skill5: "Computer Vision"
        },
        salary: "Average salary: $130,000/year",
        growth: "Very high growth potential"
      },
      cybersecurity: {
        title: "Cybersecurity Specialist",
        description: "Protect systems and networks from digital attacks",
        skills: {
          skill1: "Network Security",
          skill2: "Ethical Hacking",
          skill3: "Security Analysis",
          skill4: "Incident Response",
          skill5: "Risk Assessment"
        },
        salary: "Average salary: $110,000/year",
        growth: "High growth potential"
      }
    }
  },
  ko: {
    // Hero Section
    heroTitle: "CareerGlobal에 오신 것을 환영합니다",
    heroSubtitle: "글로벌 커리어 성공을 위한 당신의 길",
    
    // Basic UI
    welcome: "CareerGlobal에 오신 것을 환영합니다",
    subtitle: "글로벌 커리어 성공을 위한 당신의 길",
    startTest: "테스트 시작하기",
    backToHome: "홈으로 돌아가기",
    previous: "이전",
    next: "다음",
    complete: "테스트 완료",
    
    // Career Test
    careerTest: "커리어 테스트",
    question: "질문",
    of: "/",
    results: "결과",
    testResults: "커리어 추천 결과",
    requirements: "요구사항",
    
    // Test Questions
    questions: {
      workPreference: {
        text: "어떤 방식으로 일하는 것을 선호하시나요?",
        options: {
          independent: "최소한의 감독 하에 독립적으로",
          team: "팀에서 다른 사람들과 협업하며",
          mixed: "독립적 작업과 팀 작업의 혼합",
          leadership: "다른 사람들을 이끌고 관리하는 것"
        }
      },
      problemSolving: {
        text: "문제 해결에 어떻게 접근하시나요?",
        options: {
          analytical: "상세한 분석과 연구를 통해",
          creative: "창의적이고 혁신적인 해결책 사용",
          practical: "실용적이고 실습적인 접근",
          strategic: "장기 전략 수립을 통해"
        }
      },
      communication: {
        text: "어떤 유형의 커뮤니케이션을 선호하시나요?",
        options: {
          written: "문서 커뮤니케이션 (이메일, 보고서)",
          verbal: "구두 커뮤니케이션 (회의, 발표)",
          visual: "시각적 커뮤니케이션 (다이어그램, 차트)",
          technical: "기술 문서와 명세서"
        }
      },
      learningStyle: {
        text: "새로운 것을 어떻게 배우는 것을 선호하시나요?",
        options: {
          handsOn: "실습 경험을 통해",
          theoretical: "이론적 학습을 통해",
          mentorship: "멘토십과 지도를 통해",
          selfStudy: "자기 주도적 학습을 통해"
        }
      },
      workEnvironment: {
        text: "어떤 업무 환경을 선호하시나요?",
        options: {
          office: "전통적인 사무실 환경",
          remote: "원격 근무",
          hybrid: "하이브리드 근무 방식",
          field: "현장 또는 고객사 방문"
        }
      },
      stressManagement: {
        text: "고압적인 상황을 어떻게 대처하시나요?",
        options: {
          calm: "침착하고 체계적으로",
          energetic: "에너지를 해결책으로 전환",
          collaborative: "팀 지원을 구함",
          strategic: "비상 계획 수립"
        }
      },
      technology: {
        text: "기술 작업에 대해 어떻게 생각하시나요?",
        options: {
          expert: "기술 전문가가 되고 싶음",
          user: "기술 사용에 편안함",
          learner: "새로운 기술을 배울 의향이 있음",
          minimal: "최소한의 기술 사용 선호"
        }
      },
      creativity: {
        text: "당신의 업무에서 창의성의 중요성은 어느 정도인가요?",
        options: {
          essential: "업무에 필수적",
          important: "중요하지만 필수는 아님",
          occasional: "가끔 필요함",
          minimal: "최소한의 창의성만 필요"
        }
      },
      decisionMaking: {
        text: "어떤 방식으로 의사결정을 선호하시나요?",
        options: {
          data: "데이터와 분석 기반",
          intuition: "직관과 경험 사용",
          consensus: "팀 합의를 통해",
          guidance: "상사의 지도 하에"
        }
      },
      workLifeBalance: {
        text: "선호하는 근무 일정은 무엇인가요?",
        options: {
          regular: "정규 9-5 일정",
          flexible: "유연한 근무 시간",
          project: "프로젝트 기반 마감일",
          intensive: "집중적인 근무 기간"
        }
      },
      leadership: {
        text: "리더십 역할에 대해 어떻게 생각하시나요?",
        options: {
          aspiring: "리더십 포지션을 지향함",
          comfortable: "필요할 때 리더십을 맡는 것에 편안함",
          supportive: "지원 역할 선호",
          individual: "개인 기여자 역할 선호"
        }
      },
      innovation: {
        text: "혁신에 어떻게 접근하시나요?",
        options: {
          pioneer: "새로운 아이디어를 선도하는 것을 좋아함",
          improver: "기존 해결책을 개선함",
          adapter: "혁신을 필요에 맞게 적용함",
          implementer: "검증된 해결책을 구현함"
        }
      },
      riskTaking: {
        text: "리스크 감수에 대해 어떻게 생각하시나요?",
        options: {
          calculated: "계산된 리스크를 감수함",
          conservative: "보수적인 접근 선호",
          balanced: "리스크와 보상을 균형있게 고려함",
          adventurous: "높은 리스크에 편안함"
        }
      },
      problemComplexity: {
        text: "어떤 유형의 문제 해결을 선호하시나요?",
        options: {
          complex: "복잡하고 다면적인 문제",
          technical: "기술적 도전",
          people: "인간관계 관련 이슈",
          process: "프로세스 개선"
        }
      },
      careerGrowth: {
        text: "커리어 성장에 가장 중요한 것은 무엇인가요?",
        options: {
          skills: "새로운 기술 개발",
          position: "직책 승진",
          impact: "영향력 발휘",
          stability: "직업 안정성"
        }
      },
      workStyle: {
        text: "선호하는 업무 스타일은 무엇인가요?",
        options: {
          structured: "매우 구조화되고 체계적인",
          flexible: "유연하고 적응력 있는",
          creative: "창의적이고 혁신적인",
          systematic: "체계적이고 방법론적인"
        }
      },
      communicationStyle: {
        text: "선호하는 커뮤니케이션 스타일은 무엇인가요?",
        options: {
          direct: "직접적이고 명확한",
          diplomatic: "외교적이고 세련된",
          detailed: "상세하고 철저한",
          concise: "간결하고 핵심적인"
        }
      }
    },
    
    // Skills and Experience
    requiredSkills: "필요한 기술",
    experience: "경험",
    education: "교육",
    certifications: "추천 자격증",
    skillsAssessment: "기술 평가",
    skillsAnalysis: "기술 분석",
    
    // Work Preferences
    workStyle: {
      independent: "최소한의 감독 하에 독립적으로",
      team: "팀에서 다른 사람들과 협업하며",
      mixed: "독립적 작업과 팀 작업의 혼합"
    },
    
    // Leadership
    leadership: {
      role: "다른 사람들을 이끌고 관리하는 것",
      style: "필요할 때 리더십을 맡음",
      aspiring: "리더십 포지션을 지향함",
      comfortable: "필요할 때 리더십을 맡는 것에 편안함",
      supportive: "지원 역할 선호",
      individual: "개인 기여자 역할 선호"
    },
    
    // Technical
    technical: {
      doc: "기술 문서와 명세서",
      challenge: "기술적 도전",
      analytical: "기술적이고 분석적인",
      expert: "기술 전문가가 되고 싶음",
      user: "기술 사용에 편안함",
      learner: "새로운 기술을 배울 의향이 있음",
      minimal: "최소한의 기술 사용 선호"
    },
    
    // Creative
    creative: {
      style: "창의적이고 혁신적인",
      work: "창의적이고 혁신적인",
      env: "창의적이고 혁신적인",
      pioneer: "새로운 아이디어를 선도하는 것을 좋아함",
      improver: "기존 해결책을 개선함",
      adapter: "혁신을 필요에 맞게 적용함",
      implementer: "검증된 해결책을 구현함"
    },
    
    // Collaborative
    collaborative: {
      support: "팀 지원을 구함",
      team: "팀 협업을 통해",
      inclusive: "협업적이고 포용적인"
    },
    
    // Structured
    structured: {
      work: "매우 구조화되고 체계적인",
      process: "구조화된 프로세스 준수",
      systematic: "체계적이고 방법론적인"
    },
    
    // Flexible
    flexible: {
      hours: "유연한 근무 시간",
      adaptable: "유연하고 적응력 있는"
    },
    
    // Supportive
    supportive: {
      role: "지원 역할 선호",
      mentoring: "지원적이고 멘토링"
    },
    
    // Strategic
    strategic: {
      planning: "장기 전략 개발을 통해",
      vision: "전략적이고 비전적"
    },
    
    // Risk
    risk: {
      averse: "위험 회피적",
      calculated: "계산된 리스크를 감수함",
      conservative: "보수적인 접근 선호",
      balanced: "리스크와 보상을 균형있게 고려함",
      adventurous: "높은 리스크에 편안함"
    },
    
    // Schedule
    schedule: {
      guidance: "상사의 지도 하에",
      regular: "정규 9-5 일정",
      project: "프로젝트 기반 마감일",
      intensive: "집중적인 근무 기간"
    },

    // Marketing
    careerTesting: "커리어 테스트",
    careerTestingDesc: "종합적인 평가를 통해 완벽한 커리어 경로를 발견하세요",
    marketAnalytics: "시장 분석",
    marketAnalyticsDesc: "글로벌 취업 시장 동향과 기회를 탐색하세요",
    learningPaths: "학습 경로",
    learningPathsDesc: "커리어 개발을 위한 맞춤형 추천을 받으세요",
    
    // Market Data
    topCompanies: "주요 기업",
    marketDemand: "시장 수요",
    currentDemand: "현재 수요",
    growthPotential: "성장 잠재력",
    salaryRange: "연봉 범위",
    averageSalary: "평균 연봉",
    topCities: "주요 도시",
    salary: "연봉",
    demandLabel: "수요",
    topCompany: "주요 기업",
    growthLabel: "성장",
    
    // Analysis
    testQuestions: "테스트 질문",
    analyzedSkills: "분석된 기술",
    regionalAnalysis: "지역별 분석",
    marketOverview: "시장 개요",
    totalTechJobs: "총 기술 일자리",
    marketGrowth: "시장 성장률",
    topSkills: "주요 기술",
    countries: "국가",
    companies: "회사",
    avgExperience: "평균 경력",
    avgAge: "평균 연령",
    
    // Company Info
    satisfactionRate: "만족도",
    careerPaths: "커리어 경로",
    countriesCovered: "서비스 국가",
    successStories: "성공 사례",
    testimonial1: "CareerGlobal은 제가 서울에서 꿈꾸던 일자리를 찾는 데 도움을 주었습니다. 커리어 테스트는 놀랍도록 정확했고 시장 인사이트는 매우 가치 있었습니다.",
    testimonial1Author: "김사라, 소프트웨어 엔지니어",
    testimonial2: "이 플랫폼은 제가 기술 분야로 전환하는 데 명확한 로드맵을 제공했습니다. 지금은 도쿄의 선도적인 AI 회사에서 일하고 있습니다.",
    testimonial2Author: "천마이클, AI 전문가",
    
    // About
    aboutUs: "CareerGlobal 소개",
    aboutDescription: "우리는 아시아의 가장 역동적인 시장에서 젊은 전문가들이 이상적인 커리어 경로를 찾을 수 있도록 돕는 데 전념하고 있습니다",
    ourMission: "우리의 미션",
    missionDescription: "아시아 시장에서의 성공을 위한 데이터 기반 커리어 인사이트와 맞춤형 가이드를 제공하는 것",
    ourVision: "우리의 비전",
    visionDescription: "아시아 전역의 인재와 기회를 연결하는 선도적인 커리어 가이드 플랫폼이 되는 것",
    ourValues: "우리의 가치",
    valuesDescription: "혁신, 정확성, 그리고 커리어 개발에 대한 맞춤형 지원",
    ourServices: "우리의 서비스",
    careerTestDescription: "종합적인 커리어 테스트를 통해 당신의 완벽한 커리어 경로를 발견하세요",
    marketAnalyticsDescription: "아시아 시장의 상세한 시장 인사이트와 트렌드를 탐색하세요",
    
    // CTA
    readyToStart: "커리어 여정을 시작할 준비가 되셨나요?",
    ctaDescription: "지금 커리어 테스트를 시작하고 아시아에서 당신의 완벽한 커리어 경로를 발견하세요",
    viewAnalytics: "시장 분석 보기",
    ourImpact: "우리의 영향력",
    usersServed: "서비스 이용자",

    // Navigation
    navigation: {
      careerTest: "커리어 테스트",
      analytics: "분석",
      learning: "학습",
      tracker: "트래커",
      community: "커뮤니티",
      profile: "프로필",
      lightTheme: "라이트 모드",
      darkTheme: "다크 모드",
      toggleTheme: "테마 변경"
    },

    // Analytics Page
    analytics: {
      title: "글로벌 취업 시장 분석",
      koreaStats: {
        title: "한국 기업 통계",
        company: "기업",
        profession: "직종",
        salary: "연봉 (₩/년)",
        openings: "채용공고",
        trend: "추세"
      },
      tooltip: {
        salary: "연봉",
        demandGrowth: "수요 증가율"
      },
      chart: {
        salary: "연봉",
        demandGrowth: "수요 증가율, %"
      },
      countries: {
        KOR: "대한민국",
        JPN: "일본",
        TWN: "대만",
        CHN: "중국"
      }
    },

    // Learning Page
    learning: {
      title: "교육 경로",
      selectProfession: "직업 선택:",
      professions: {
        dataScientist: "데이터 사이언티스트",
        aiEngineer: "AI 엔지니어",
        cybersecurity: "사이버 보안"
      },
      courses: {
        dataScience: "데이터 사이언스 전문 과정 (Coursera)",
        machineLearning: "머신러닝 (Coursera, Andrew Ng)",
        pythonDataScience: "데이터 사이언스를 위한 파이썬 (edX)",
        deepLearning: "딥러닝 전문 과정 (Coursera)",
        aiForEveryone: "모두를 위한 AI (Coursera, Andrew Ng)",
        aiNanodegree: "인공지능 나노디그리 (Udacity)",
        introCybersecurity: "사이버 보안 입문 (Coursera)",
        networkSecurity: "네트워크 보안 (edX)",
        ethicalHacker: "공인 윤리적 해커 (CEH) (EC-Council)"
      }
    },

    // Tracker Page
    tracker: {
      title: "커리어 트래커",
      progress: "진행률: {progress}%",
      steps: {
        learnPython: {
          title: "파이썬 학습",
          description: "데이터 분석을 위한 기본 파이썬 과정 완료"
        },
        internship: {
          title: "인턴십 완료",
          description: "IT 회사에서 첫 업무 경험 얻기"
        },
        certification: {
          title: "자격증 취득",
          description: "시험 통과 및 국제 자격증 취득"
        },
        firstJob: {
          title: "첫 직장 구하기",
          description: "주니어 데이터 사이언티스트로 취업"
        }
      },
      completed: "✓ 완료"
    },

    // Community Page
    community: {
      title: "커뮤니티",
      welcome: "CareerGlobal 커뮤니티에 오신 것을 환영합니다! 질문해 주세요.",
      thanks: "질문해 주셔서 감사합니다! 곧 답변 드리겠습니다.",
      input: {
        placeholder: "메시지를 입력하세요...",
        send: "전송"
      },
      roles: {
        mentor: "멘토",
        you: "나"
      }
    },

    // Profile Page
    profile: {
      logout: "로그아웃",
      logoutConfirm: "프로필에서 로그아웃 (모의)"
    },

    // Career Recommendations
    recommendations: {
      title: "추천 직업",
      description: "귀하의 답변을 바탕으로 다음과 같은 직업 경로를 추천합니다:",
      dataScientist: {
        title: "데이터 사이언티스트",
        description: "비즈니스 의사결정을 돕기 위해 복잡한 데이터 세트를 분석",
        skills: {
          skill1: "파이썬",
          skill2: "SQL",
          skill3: "머신러닝",
          skill4: "통계학",
          skill5: "데이터 시각화"
        },
        salary: "평균 연봉: 1억 2천만원/년",
        growth: "높은 성장 잠재력"
      },
      aiEngineer: {
        title: "AI 엔지니어",
        description: "인공지능 솔루션 개발 및 구현",
        skills: {
          skill1: "파이썬",
          skill2: "텐서플로우",
          skill3: "딥러닝",
          skill4: "신경망",
          skill5: "컴퓨터 비전"
        },
        salary: "평균 연봉: 1억 3천만원/년",
        growth: "매우 높은 성장 잠재력"
      },
      cybersecurity: {
        title: "사이버 보안 전문가",
        description: "디지털 공격으로부터 시스템과 네트워크 보호",
        skills: {
          skill1: "네트워크 보안",
          skill2: "윤리적 해킹",
          skill3: "보안 분석",
          skill4: "사고 대응",
          skill5: "위험 평가"
        },
        salary: "평균 연봉: 1억 1천만원/년",
        growth: "높은 성장 잠재력"
      }
    }
  }
}; 