import { TranslationType } from '@/types/translations';

type TranslationKey = string;
type TranslationValue = string | string[] | Record<string, string | string[] | Record<string, any>>;

type Translations = Record<TranslationKey, TranslationValue>;

export const translations: TranslationType = {
  en: {
    // Navigation
    navigation: {
      careerTest: "Career Test",
      analytics: "Analytics",
      learning: "Learning",
      tracker: "Progress Tracker",
      community: "AI Assistant",
      profile: "Profile",
      toggleTheme: "Toggle Theme",
      lightTheme: "Light Theme",
      darkTheme: "Dark Theme"
    },

    // Hero Section
    hero: {
      title: "Discover Your Perfect Career Path",
      subtitle: "Take our comprehensive career test to find the best career match based on your skills, interests, and personality.",
      startTest: "Start Test",
      viewAnalytics: "View Analytics"
    },

    // About Section
    about: {
      title: "About Us",
      description: "CareerGlobal is a leading platform for career guidance and professional development, helping individuals worldwide discover and pursue their ideal career paths.",
      mission: {
        title: "Our Mission",
        description: "To empower individuals worldwide with the tools and insights they need to make informed career decisions and achieve professional success."
      },
      vision: {
        title: "Our Vision",
        description: "To become the global leader in career guidance, connecting talent with opportunity through innovative technology and data-driven insights."
      },
      values: {
        title: "Our Values",
        description: "We believe in data-driven decisions, continuous learning, and personalized guidance to help you achieve your career goals."
      },
      impact: {
        title: "Our Impact",
        stats: {
          careerPaths: "100+ Career Paths",
          countriesCovered: "50+ Countries",
          testQuestions: "500+ Test Questions",
          analyzedSkills: "1000+ Skills Analyzed"
        }
      }
    },

    // Services Section
    services: {
      title: "Our Services",
      careerTesting: {
        title: "Career Testing",
        description: "Take our comprehensive career test to discover your ideal career path based on your skills, interests, and personality.",
        startTest: "Start Test"
      },
      marketAnalytics: {
        title: "Market Analytics",
        description: "Access detailed market insights and trends to make informed decisions about your career path.",
        viewAnalytics: "View Analytics"
      }
    },

    // CTA Section
    cta: {
      title: "Ready to Start Your Journey?",
      description: "Take our career test today and discover your perfect career path.",
      startTest: "Start Test"
    },

    // Test Results
    testResults: "Test Results",
    BestCareerMatch: "Best Career Match",
    
    // Recommendations Section
    recommendations: {
      description: "Based on your test, here are some career recommendations:",
      uxDesigner: {
        title: "UX Designer",
        description: "Combines creativity with technical skills to design user-friendly interfaces.",
        salary: "Average Salary:",
        growth: "Growth:",
        experience: "Experience:",
        education: "Education:"
      },
      dataScientist: {
        title: "Data Scientist",
        description: "Analyzes complex data to extract insights and inform business decisions.",
        salary: "Average Salary:",
        growth: "Growth:",
        experience: "Experience:",
        education: "Education:"
      },
      aiEngineer: {
        title: "AI Engineer",
        description: "Develops and implements artificial intelligence models and applications.",
        salary: "Average Salary:",
        growth: "Growth:",
        experience: "Experience:",
        education: "Education:"
      },
      cybersecurity: {
        title: "Cybersecurity Specialist",
        description: "Protects computer systems and networks from threats and attacks.",
        salary: "Average Salary:",
        growth: "Growth:",
        experience: "Experience:",
        education: "Education:"
      }
    },

    requiredSkills: "Required Skills",
    learnMore: "Learn More",
    backToHome: "Back to Home",
    viewAnalytics: "View Analytics"
  },
  ko: {
    // Navigation
    navigation: {
      careerTest: "커리어 테스트",
      analytics: "분석",
      learning: "학습",
      tracker: "진도 추적",
      community: "AI Assistant",
      profile: "프로필",
      toggleTheme: "테마 전환",
      lightTheme: "밝은 테마",
      darkTheme: "어두운 테마"
    },

    // Hero Section
    hero: {
      title: "완벽한 직업 경로를 찾아보세요",
      subtitle: "여러분의 기술, 관심사, 성격을 기반으로 최적의 직업 매칭을 찾기 위해 종합 직업 테스트를 진행하세요.",
      startTest: "테스트 시작",
      viewAnalytics: "분석 보기"
    },

    // About Section
    about: {
      title: "회사 소개",
      description: "커리어글로벌은 전 세계 개인들이 이상적인 직업 경로를 발견하고 추구하도록 돕는 직업 지도 및 전문성 개발을 위한 선도적인 플랫폼입니다.",
      mission: {
        title: "우리의 미션",
        description: "전 세계 개인들에게 정보에 기반한 직업 결정을 내리고 전문적인 성공을 달성하는 데 필요한 도구와 통찰력을 제공하는 것입니다."
      },
      vision: {
        title: "우리의 비전",
        description: "혁신적인 기술과 데이터 기반 통찰력을 통해 인재와 기회를 연결하는 글로벌 직업 지도 분야의 선두 주자가 되는 것입니다."
      },
      values: {
        title: "우리의 가치",
        description: "우리는 데이터 기반 의사 결정, 지속적인 학습 및 개인화된 지도를 통해 여러분의 직업 목표 달성을 돕습니다."
      },
      impact: {
        title: "우리의 영향",
        stats: {
          careerPaths: "100+ 직업 경로",
          countriesCovered: "50+ 국가",
          testQuestions: "500+ 테스트 질문",
          analyzedSkills: "1000+ 분석된 기술"
        }
      }
    },

    // Services Section
    services: {
      title: "우리의 서비스",
      careerTesting: {
        title: "직업 테스트",
        description: "당신의 기술, 관심사, 성격을 기반으로 이상적인 직업 경로를 발견하기 위한 종합적인 직업 테스트를 진행하세요.",
        startTest: "테스트 시작"
      },
      marketAnalytics: {
        title: "시장 분석",
        description: "당신의 직업 경로에 대한 정보에 기반한 결정을 내리기 위한 상세한 시장 통찰력과 트렌드에 접근하세요.",
        viewAnalytics: "분석 보기"
      }
    },

    // CTA Section
    cta: {
      title: "여정을 시작할 준비가 되셨나요?",
      description: "오늘 직업 테스트를 시작하고 당신의 완벽한 직업 경로를 찾아보세요.",
      startTest: "테스트 시작"
    },

    // Test Results
    testResults: "테스트 결과",
    BestCareerMatch: "최고의 직업 매칭",

    // Recommendations Section
    recommendations: {
      description: "테스트 결과에 따른 직업 추천:",
      uxDesigner: {
        title: "UX 디자이너",
        description: "사용자 친화적인 인터페이스를 디자인하기 위해 창의성과 기술력을 결합합니다.",
        salary: "평균 연봉:",
        growth: "성장률:",
        experience: "경력:",
        education: "학력:"
      },
      dataScientist: {
        title: "데이터 사이언티스트",
        description: "복잡한 데이터를 분석하여 통찰력을 추출하고 비즈니스 의사 결정에 기여합니다.",
        salary: "평균 연봉:",
        growth: "성장률:",
        experience: "경력:",
        education: "학력:"
      },
      aiEngineer: {
        title: "AI 엔지니어",
        description: "인공지능 모델 및 애플리케이션을 개발하고 구현합니다.",
        salary: "평균 연봉:",
        growth: "성장률:",
        experience: "경력:",
        education: "학력:"
      },
      cybersecurity: {
        title: "사이버 보안 전문가",
        description: "컴퓨터 시스템 및 네트워크를 위협과 공격으로부터 보호합니다.",
        salary: "평균 연봉:",
        growth: "성장률:",
        experience: "경력:",
        education: "학력:"
      }
    },

    requiredSkills: "필요 기술",
    learnMore: "더 알아보기",
    backToHome: "홈으로 돌아가기",
    viewAnalytics: "분석 보기",

    // Analytics Section
    analytics: {
      title: "시장 분석",
      regionalAnalysis: {
        title: "지역 분석"
      },
      marketOverview: {
        title: "시장 개요",
        totalTechJobs: "총 IT 일자리",
        averageSalary: "평균 연봉",
        marketGrowth: "시장 성장",
        countriesLabel: "국가",
        companiesLabel: "기업",
        avgExperienceLabel: "평균 경력",
        avgAgeLabel: "평균 연령",
        topCitiesLabel: "주요 도시"
      },
      topSkills: {
        title: "수요 높은 상위 기술",
        growthLabel: "성장",
        descriptions: {
          AIML: "머신러닝과 인공지능은 자동화 및 데이터 분석을 위한 핵심 기술입니다.",
          CloudComputing: "클라우드 기술은 기업이 인프라와 서비스를 확장할 수 있도록 합니다.",
          Cybersecurity: "사이버 보안은 위협과 공격으로부터 데이터와 시스템을 보호합니다.",
          DataScience: "비즈니스 의사 결정을 위한 빅데이터 분석 및 처리."
        },
        salaryLabel: "연봉:",
        demandLabel: "수요:",
        topCompanyLabel: "주요 기업:"
      },
      koreaStats: {
        title: "한국 기술 시장 개요",
        company: "회사",
        profession: "직업",
        salary: "연봉 (원)",
        openings: "채용 공고",
        trend: "성장 추세",
        companies: {
          samsung: {
            name: "삼성전자",
            profession: "소프트웨어 엔지니어",
            salary: "80,000,000",
            openings: "150+",
            trend: "높음"
          },
          naver: {
            name: "네이버",
            profession: "프론트엔드 개발자",
            salary: "75,000,000",
            openings: "80+",
            trend: "높음"
          },
          kakao: {
            name: "카카오",
            profession: "백엔드 개발자",
            salary: "70,000,000",
            openings: "60+",
            trend: "중간"
          },
          lg: {
            name: "LG CNS",
            profession: "시스템 엔지니어",
            salary: "65,000,000",
            openings: "100+",
            trend: "중간"
          },
          sk: {
            name: "SK 하이닉스",
            profession: "AI 엔지니어",
            salary: "85,000,000",
            openings: "40+",
            trend: "높음"
          }
        }
      }
    },

    // Learning Section
    learning: {
      title: "학습 경로",
      selectProfession: "추천 코스를 보려면 직업을 선택하세요",
      professions: {
        dataScientist: "데이터 사이언티스트",
        aiEngineer: "AI 엔지니어",
        cybersecurity: "사이버 보안"
      },
      courses: {
        dataScience: "데이터 사이언스 기초",
        machineLearning: "머신러닝 필수 과정",
        pythonDataScience: "데이터 사이언스를 위한 파이썬",
        deepLearning: "딥러닝 전문 과정",
        aiForEveryone: "AI 기초 과정",
        aiNanodegree: "AI 나노디그리",
        introCybersecurity: "사이버 보안 입문",
        networkSecurity: "네트워크 보안",
        ethicalHacking: "윤리적 해킹"
      }
    },

    // Progress Tracker Section
    tracker: {
      title: "직업 진도 추적",
      progress: "진도: {progress}%",
      steps: {
        learnPython: {
          title: "파이썬 학습",
          description: "데이터 분석을 위한 기본 파이썬 과정 완료"
        },
        internship: {
          title: "인턴십 완료",
          description: "IT 회사에서 첫 직장 경험 얻기"
        },
        certification: {
          title: "자격증 취득",
          description: "시험 통과 및 국제 자격증 취득"
        },
        firstJob: {
          title: "첫 직장 구하기",
          description: "주니어 데이터 사이언티스트로 채용되기"
        }
      },
      completed: "✓ 완료"
    },

    // Community Section
    community: {
      title: "커리어 커뮤니티",
      roles: {
        mentor: "커리어 멘토"
      },
      welcome: "커리어 커뮤니티에 참여하세요! 업계 전문가들과 연결하고, 여러분의 여정을 공유하며, 경험 많은 멘토들로부터 맞춤형 조언을 받으세요.",
      input: {
        placeholder: "질문하거나 경험을 공유해보세요...",
        send: "게시하기"
      }
    },

    // Test Questions
    questions: {
      workPreference: {
        text: "어떤 업무 스타일을 선호하시나요?",
        options: {
          independent: "독립적으로 일하는 것을 선호합니다",
          team: "팀으로 일하는 것을 즐깁니다",
          mixed: "독립적 업무와 팀 업무를 혼합하는 것을 좋아합니다",
          leadership: "팀과 프로젝트를 이끄는 것을 선호합니다"
        }
      },
      problemSolving: {
        text: "문제 해결에 어떻게 접근하시나요?",
        options: {
          analytical: "데이터와 사실을 체계적으로 분석합니다",
          creative: "창의적으로 생각하고 혁신적인 해결책을 찾습니다",
          practical: "실용적이고 현실적인 해결책에 집중합니다",
          strategic: "장기적인 전략적 관점에서 문제에 접근합니다"
        }
      },
      communication: {
        text: "어떻게 소통하는 것을 선호하시나요?",
        options: {
          written: "서면 의사소통 (이메일, 보고서)을 선호합니다.",
          verbal: "구두 의사소통 (회의, 통화)을 선호합니다",
          visual: "시각적 의사소통 (다이어그램, 프레젠테이션)을 선호합니다",
          technical: "명확하고 기술적인 의사소통을 선호합니다"
        }
      },
      learningStyle: {
        text: "선호하는 학습 스타일은 무엇인가요?",
        options: {
          handsOn: "실습하고 연습하면서 가장 잘 배웁니다",
          theoretical: "개념과 이론을 먼저 이해하는 것을 선호합니다",
          mentorship: "멘토링과 지도를 통해 가장 잘 배웁니다",
          selfStudy: "독학하고 독립적인 연구를 선호합니다"
        }
      },
      problemComplexity: {
        title: "복잡한 문제에 어떻게 접근하시나요?",
        options: {
          breakDown: "더 작고 관리 가능한 부분으로 나눕니다.",
          holistic: "전체적인 그림과 모든 부분이 어떻게 연결되는지 고려합니다.",
          innovate: "혁신적이고 틀에 얽매이지 않는 해결책을 찾습니다.",
          process: "단계별로 해결하기 위해 구조화된 프로세스를 따릅니다."
        }
      },
      workEnvironment: {
        title: "어떤 종류의 작업 환경을 선호하시나요?",
        options: {
          collaborative: "협업적이고 팀 중심적입니다.",
          independent: "명확한 목표를 가진 독립적입니다.",
          dynamic: "빠르게 변화하고 역동적입니다.",
          structured: "구조화되고 조직적입니다."
        }
      },
      learningNewSkills: {
        title: "새로운 기술을 어떻게 배우는 것을 선호하시나요?",
        options: {
          handsOn: "실습 프로젝트 및 실제 적용을 통해.",
          theoretical: "이론적 지식과 심층 학습을 통해.",
          mentorship: "멘토링 및 지도를 통해.",
          selfTaught: "온라인 자료를 활용한 독학을 통해."
        }
      },
      communicationStyle: {
        title: "당신의 의사소통 스타일은 무엇인가요?",
        options: {
          direct: "직접적이고 핵심을 찌릅니다.",
          empathetic: "공감하고 배려합니다.",
          dataDriven: "데이터 기반의 분석적입니다.",
          persuasive: "설득력 있고 영향력이 있습니다."
        }
      },
      decisionMaking: {
        title: "중요한 결정을 어떻게 내리시나요?",
        options: {
          dataDriven: "데이터 및 분석을 기반으로.",
          intuition: "직관과 경험을 기반으로.",
          consensus: "다른 사람들의 합의를 구하여.",
          logical: "논리적 추론을 통해."
        }
      },
      creativityLevel: {
        title: "업무에서 창의성은 얼마나 중요한가요?",
        options: {
          veryImportant: "매우 중요합니다. 창의적인 작업을 즐깁니다.",
          somewhatImportant: "어느 정도 중요합니다. 창의적인 투입을 높이 평가합니다.",
          notImportant: "중요하지 않습니다. 구조화된 작업을 선호합니다.",
          depends: "작업에 따라 다르지만 필요할 때 창의적일 수 있습니다."
        }
      },
      stressTolerance: {
        title: "스트레스를 얼마나 잘 다루시나요?",
        options: {
          thrive: "압박 속에서 잘 지냅니다.",
          manageWell: "대처 메커니즘으로 스트레스를 잘 관리합니다.",
          avoid: "스트레스 상황을 피하려고 노력합니다.",
          struggle: "스트레스가 많은 환경에서 힘들어합니다."
        }
      },
      workLifeBalance: {
        title: "당신의 이상적인 워크-라이프 밸런스는 무엇인가요?",
        options: {
          flexible: "유연한 근무 시간 및 원격 근무 옵션.",
          strict: "엄격한 9-5 근무 시간.",
          projectBased: "집중적인 기간 후 휴식 기간이 있는 프로젝트 기반 근무.",
          integrated: "일과 삶의 경계를 허물며 통합된 생활."
        }
      },
      careerGrowth: {
        title: "당신의 경력 성장에 가장 중요한 것은 무엇인가요?",
        options: {
          skills: "새로운 기술과 지식 습득.",
          position: "더 높은 직책으로 승진.",
          impact: "내 분야에서 중요한 영향력 발휘.",
          stability: "장기적인 직업 안정성."
        }
      },
      workStyle: {
        title: "당신의 이상적인 업무 속도는 무엇인가요?",
        options: {
          structured: "구조화되고 일관된 속도.",
          flexible: "유연하고 적응력 있는 속도.",
          creative: "창의적인 폭발을 허용하는 프로젝트 기반.",
          systematic: "체계적이고 조직적인 속도."
        }
      }
    },

    careerTest: "직업 테스트",
    testDescription: "당신의 기술, 관심사, 성격을 기반으로 최적의 직업을 찾기 위한 종합적인 직업 테스트를 진행하세요.",
    question: "질문",
    previous: "이전",
    next: "다음",
    submit: "테스트 제출"
  }
}; 