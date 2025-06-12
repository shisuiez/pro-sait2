'use client';

import { useState, useMemo } from 'react';
import { CareerTest } from '@/components/CareerTest/CareerTest';
import { Question, TestResult, CareerPath } from '@/types/career';
import { t } from '@/lib/language';
import { motion, AnimatePresence } from 'framer-motion';
import { getCareerRecommendations } from '@/lib/careerRecommendations';
import { useRouter } from 'next/navigation';

// Sample questions for beta version
const questions = [
  // Work Preferences
  {
    id: 1,
    text: t('questions.workPreference.text'),
    options: [
      { value: "independent", text: t('questions.workPreference.options.independent') },
      { value: "team", text: t('questions.workPreference.options.team') },
      { value: "mixed", text: t('questions.workPreference.options.mixed') },
      { value: "leadership", text: t('questions.workPreference.options.leadership') }
    ]
  },
  // Problem Solving
  {
    id: 2,
    text: t('questions.problemSolving.text'),
    options: [
      { value: "analytical", text: t('questions.problemSolving.options.analytical') },
      { value: "creative", text: t('questions.problemSolving.options.creative') },
      { value: "practical", text: t('questions.problemSolving.options.practical') },
      { value: "strategic", text: t('questions.problemSolving.options.strategic') }
    ]
  },
  // Communication
  {
    id: 3,
    text: t('questions.communication.text'),
    options: [
      { value: "written", text: t('questions.communication.options.written') },
      { value: "verbal", text: t('questions.communication.options.verbal') },
      { value: "visual", text: t('questions.communication.options.visual') },
      { value: "technical", text: t('questions.communication.options.technical') }
    ]
  },
  // Learning Style
  {
    id: 4,
    text: t('questions.learningStyle.text'),
    options: [
      { value: "handsOn", text: t('questions.learningStyle.options.handsOn') },
      { value: "theoretical", text: t('questions.learningStyle.options.theoretical') },
      { value: "mentorship", text: t('questions.learningStyle.options.mentorship') },
      { value: "selfStudy", text: t('questions.learningStyle.options.selfStudy') }
    ]
  },
  // Work Environment
  {
    id: 5,
    text: t('questions.workEnvironment.text'),
    options: [
      { value: "office", text: t('questions.workEnvironment.options.office') },
      { value: "remote", text: t('questions.workEnvironment.options.remote') },
      { value: "hybrid", text: t('questions.workEnvironment.options.hybrid') },
      { value: "field", text: t('questions.workEnvironment.options.field') }
    ]
  },
  // Stress Management
  {
    id: 6,
    text: t('questions.stressManagement.text'),
    options: [
      { value: "calm", text: t('questions.stressManagement.options.calm') },
      { value: "energetic", text: t('questions.stressManagement.options.energetic') },
      { value: "collaborative", text: t('questions.stressManagement.options.collaborative') },
      { value: "strategic", text: t('questions.stressManagement.options.strategic') }
    ]
  },
  // Technology
  {
    id: 7,
    text: t('questions.technology.text'),
    options: [
      { value: "expert", text: t('questions.technology.options.expert') },
      { value: "user", text: t('questions.technology.options.user') },
      { value: "learner", text: t('questions.technology.options.learner') },
      { value: "minimal", text: t('questions.technology.options.minimal') }
    ]
  },
  // Creativity
  {
    id: 8,
    text: t('questions.creativity.text'),
    options: [
      { value: "essential", text: t('questions.creativity.options.essential') },
      { value: "important", text: t('questions.creativity.options.important') },
      { value: "occasional", text: t('questions.creativity.options.occasional') },
      { value: "minimal", text: t('questions.creativity.options.minimal') }
    ]
  },
  // Decision Making
  {
    id: 9,
    text: t('questions.decisionMaking.text'),
    options: [
      { value: "data", text: t('questions.decisionMaking.options.data') },
      { value: "intuition", text: t('questions.decisionMaking.options.intuition') },
      { value: "consensus", text: t('questions.decisionMaking.options.consensus') },
      { value: "guidance", text: t('questions.decisionMaking.options.guidance') }
    ]
  },
  // Work-Life Balance
  {
    id: 10,
    text: t('questions.workLifeBalance.text'),
    options: [
      { value: "regular", text: t('questions.workLifeBalance.options.regular') },
      { value: "flexible", text: t('questions.workLifeBalance.options.flexible') },
      { value: "project", text: t('questions.workLifeBalance.options.project') },
      { value: "intensive", text: t('questions.workLifeBalance.options.intensive') }
    ]
  },
  // Leadership
  {
    id: 11,
    text: t('questions.leadership.text'),
    options: [
      { value: "aspiring", text: t('questions.leadership.options.aspiring') },
      { value: "comfortable", text: t('questions.leadership.options.comfortable') },
      { value: "supportive", text: t('questions.leadership.options.supportive') },
      { value: "individual", text: t('questions.leadership.options.individual') }
    ]
  },
  // Innovation
  {
    id: 12,
    text: t('questions.innovation.text'),
    options: [
      { value: "pioneer", text: t('questions.innovation.options.pioneer') },
      { value: "improver", text: t('questions.innovation.options.improver') },
      { value: "adapter", text: t('questions.innovation.options.adapter') },
      { value: "implementer", text: t('questions.innovation.options.implementer') }
    ]
  },
  // Risk Taking
  {
    id: 13,
    text: t('questions.riskTaking.text'),
    options: [
      { value: "calculated", text: t('questions.riskTaking.options.calculated') },
      { value: "conservative", text: t('questions.riskTaking.options.conservative') },
      { value: "balanced", text: t('questions.riskTaking.options.balanced') },
      { value: "adventurous", text: t('questions.riskTaking.options.adventurous') }
    ]
  },
  // Problem Complexity
  {
    id: 14,
    text: t('questions.problemComplexity.text'),
    options: [
      { value: "complex", text: t('questions.problemComplexity.options.complex') },
      { value: "technical", text: t('questions.problemComplexity.options.technical') },
      { value: "people", text: t('questions.problemComplexity.options.people') },
      { value: "process", text: t('questions.problemComplexity.options.process') }
    ]
  },
  // Career Growth
  {
    id: 15,
    text: t('questions.careerGrowth.text'),
    options: [
      { value: "skills", text: t('questions.careerGrowth.options.skills') },
      { value: "position", text: t('questions.careerGrowth.options.position') },
      { value: "impact", text: t('questions.careerGrowth.options.impact') },
      { value: "stability", text: t('questions.careerGrowth.options.stability') }
    ]
  },
  // Work Style
  {
    id: 16,
    text: t('questions.workStyle.text'),
    options: [
      { value: "structured", text: t('questions.workStyle.options.structured') },
      { value: "flexible", text: t('questions.workStyle.options.flexible') },
      { value: "creative", text: t('questions.workStyle.options.creative') },
      { value: "systematic", text: t('questions.workStyle.options.systematic') }
    ]
  },
  // Communication Style
  {
    id: 17,
    text: t('questions.communicationStyle.text'),
    options: [
      { value: "direct", text: t('questions.communicationStyle.options.direct') },
      { value: "diplomatic", text: t('questions.communicationStyle.options.diplomatic') },
      { value: "detailed", text: t('questions.communicationStyle.options.detailed') },
      { value: "concise", text: t('questions.communicationStyle.options.concise') }
    ]
  },
  // Learning Approach
  {
    id: 18,
    text: "How do you prefer to learn new skills?",
    options: [
      { value: "practical", text: "Through practical experience" },
      { value: "theoretical", text: "Through theoretical study" },
      { value: "mentorship", text: "Through mentorship" },
      { value: "self-study", text: "Through self-directed learning" }
    ]
  },
  // Work Environment
  {
    id: 19,
    text: "What work environment do you thrive in?",
    options: [
      { value: "fast-paced", text: "Fast-paced and dynamic" },
      { value: "stable", text: "Stable and predictable" },
      { value: "creative", text: "Creative and innovative" },
      { value: "technical", text: "Technical and analytical" }
    ]
  },
  // Problem Solving Approach
  {
    id: 20,
    text: "How do you approach problem-solving?",
    options: [
      { value: "analytical", text: "Through analysis and research" },
      { value: "creative", text: "Through creative thinking" },
      { value: "collaborative", text: "Through team collaboration" },
      { value: "practical", text: "Through practical solutions" }
    ]
  },
  // Technology Comfort
  {
    id: 21,
    text: "How comfortable are you with technology?",
    options: [
      { value: "expert", text: "I'm a technology expert" },
      { value: "advanced", text: "I'm very comfortable" },
      { value: "intermediate", text: "I'm moderately comfortable" },
      { value: "basic", text: "I prefer basic technology" }
    ]
  },
  // Innovation Attitude
  {
    id: 22,
    text: "How do you feel about innovation?",
    options: [
      { value: "pioneer", text: "I like to pioneer new ideas" },
      { value: "early-adopter", text: "I'm an early adopter" },
      { value: "pragmatic", text: "I'm pragmatic about innovation" },
      { value: "conservative", text: "I prefer proven solutions" }
    ]
  },
  // Decision Making Style
  {
    id: 23,
    text: "How do you make decisions?",
    options: [
      { value: "data-driven", text: "Based on data and analysis" },
      { value: "intuitive", text: "Using intuition and experience" },
      { value: "collaborative", text: "Through team consensus" },
      { value: "structured", text: "Following a structured process" }
    ]
  },
  // Work-Life Balance
  {
    id: 24,
    text: "What's your ideal work-life balance?",
    options: [
      { value: "balanced", text: "Equal balance" },
      { value: "work-focused", text: "More focus on work" },
      { value: "life-focused", text: "More focus on life" },
      { value: "flexible", text: "Flexible arrangement" }
    ]
  },
  // Leadership Style
  {
    id: 25,
    text: "What's your leadership style?",
    options: [
      { value: "directive", text: "Directive and decisive" },
      { value: "collaborative", text: "Collaborative and inclusive" },
      { value: "supportive", text: "Supportive and mentoring" },
      { value: "strategic", text: "Strategic and visionary" }
    ]
  },
  // Risk Attitude
  {
    id: 26,
    text: "How do you feel about risk?",
    options: [
      { value: "calculated", text: "I take calculated risks" },
      { value: "conservative", text: "I'm risk-averse" },
      { value: "balanced", text: "I balance risk and reward" },
      { value: "adventurous", text: "I'm comfortable with risk" }
    ]
  },
  // Problem Complexity
  {
    id: 27,
    text: "What type of problems do you enjoy solving?",
    options: [
      { value: "complex", text: "Complex, multi-faceted problems" },
      { value: "technical", text: "Technical challenges" },
      { value: "people", text: "People-related issues" },
      { value: "process", text: "Process improvement" }
    ]
  },
  // Career Goals
  {
    id: 28,
    text: "What are your primary career goals?",
    options: [
      { value: "growth", text: "Professional growth" },
      { value: "impact", text: "Making an impact" },
      { value: "stability", text: "Job stability" },
      { value: "leadership", text: "Leadership position" }
    ]
  },
  // Work Style
  {
    id: 29,
    text: "What's your preferred work style?",
    options: [
      { value: "independent", text: "Independent work" },
      { value: "team", text: "Team collaboration" },
      { value: "mixed", text: "Mix of both" },
      { value: "leadership", text: "Leading others" }
    ]
  },
  // Communication Preference
  {
    id: 30,
    text: "What's your preferred communication method?",
    options: [
      { value: "written", text: "Written communication" },
      { value: "verbal", text: "Verbal communication" },
      { value: "visual", text: "Visual communication" },
      { value: "technical", text: "Technical documentation" }
    ]
  },
  // Learning Style
  {
    id: 31,
    text: "How do you prefer to learn?",
    options: [
      { value: "hands-on", text: "Hands-on experience" },
      { value: "theoretical", text: "Theoretical study" },
      { value: "mentorship", text: "Mentorship" },
      { value: "self-study", text: "Self-directed learning" }
    ]
  },
  // Work Environment
  {
    id: 32,
    text: "What work environment do you prefer?",
    options: [
      { value: "office", text: "Traditional office" },
      { value: "remote", text: "Remote work" },
      { value: "hybrid", text: "Hybrid work" },
      { value: "field", text: "Field work" }
    ]
  },
  // Stress Management
  {
    id: 33,
    text: "How do you handle stress?",
    options: [
      { value: "calm", text: "Stay calm and focused" },
      { value: "active", text: "Channel into action" },
      { value: "support", text: "Seek support" },
      { value: "plan", text: "Plan and organize" }
    ]
  },
  // Technology Interest
  {
    id: 34,
    text: "How interested are you in technology?",
    options: [
      { value: "very", text: "Very interested" },
      { value: "moderately", text: "Moderately interested" },
      { value: "somewhat", text: "Somewhat interested" },
      { value: "minimal", text: "Minimally interested" }
    ]
  },
  // Creativity
  {
    id: 35,
    text: "How important is creativity in your work?",
    options: [
      { value: "essential", text: "Essential" },
      { value: "important", text: "Important" },
      { value: "helpful", text: "Helpful" },
      { value: "minimal", text: "Minimal" }
    ]
  },
  // Decision Making
  {
    id: 36,
    text: "How do you prefer to make decisions?",
    options: [
      { value: "data", text: "Data-driven" },
      { value: "intuition", text: "Intuition-based" },
      { value: "consensus", text: "Consensus-based" },
      { value: "guidance", text: "Guidance-based" }
    ]
  },
  // Work Schedule
  {
    id: 37,
    text: "What's your preferred work schedule?",
    options: [
      { value: "regular", text: "Regular hours" },
      { value: "flexible", text: "Flexible hours" },
      { value: "project", text: "Project-based" },
      { value: "intensive", text: "Intensive periods" }
    ]
  },
  // Leadership
  {
    id: 38,
    text: "How do you feel about leadership?",
    options: [
      { value: "aspiring", text: "I aspire to lead" },
      { value: "comfortable", text: "I'm comfortable leading" },
      { value: "supportive", text: "I prefer supporting" },
      { value: "individual", text: "I prefer individual work" }
    ]
  },
  // Innovation
  {
    id: 39,
    text: "How do you approach innovation?",
    options: [
      { value: "pioneer", text: "I pioneer new ideas" },
      { value: "improver", text: "I improve existing solutions" },
      { value: "adapter", text: "I adapt innovations" },
      { value: "implementer", text: "I implement solutions" }
    ]
  },
  // Risk Taking
  {
    id: 40,
    text: "How do you feel about taking risks?",
    options: [
      { value: "calculated", text: "I take calculated risks" },
      { value: "conservative", text: "I'm conservative" },
      { value: "balanced", text: "I balance risk and reward" },
      { value: "adventurous", text: "I'm adventurous" }
    ]
  },
  // Problem Solving
  {
    id: 41,
    text: "What type of problems do you prefer?",
    options: [
      { value: "complex", text: "Complex problems" },
      { value: "technical", text: "Technical challenges" },
      { value: "people", text: "People issues" },
      { value: "process", text: "Process problems" }
    ]
  },
  // Career Growth
  {
    id: 42,
    text: "What's most important for growth?",
    options: [
      { value: "skills", text: "Skill development" },
      { value: "position", text: "Position advancement" },
      { value: "impact", text: "Making impact" },
      { value: "stability", text: "Job stability" }
    ]
  },
  // Work Style
  {
    id: 43,
    text: "What's your work style?",
    options: [
      { value: "structured", text: "Structured" },
      { value: "flexible", text: "Flexible" },
      { value: "creative", text: "Creative" },
      { value: "systematic", text: "Systematic" }
    ]
  },
  // Communication
  {
    id: 44,
    text: "What's your communication style?",
    options: [
      { value: "direct", text: "Direct" },
      { value: "diplomatic", text: "Diplomatic" },
      { value: "detailed", text: "Detailed" },
      { value: "concise", text: "Concise" }
    ]
  },
  // Learning
  {
    id: 45,
    text: "How do you learn best?",
    options: [
      { value: "practical", text: "Practical experience" },
      { value: "theoretical", text: "Theoretical study" },
      { value: "mentorship", text: "Mentorship" },
      { value: "self-study", text: "Self-study" }
    ]
  },
  // Environment
  {
    id: 46,
    text: "What environment do you prefer?",
    options: [
      { value: "fast-paced", text: "Fast-paced" },
      { value: "stable", text: "Stable" },
      { value: "creative", text: "Creative" },
      { value: "technical", text: "Technical" }
    ]
  },
  // Problem Solving
  {
    id: 47,
    text: "How do you solve problems?",
    options: [
      { value: "analytical", text: "Analytically" },
      { value: "creative", text: "Creatively" },
      { value: "collaborative", text: "Collaboratively" },
      { value: "practical", text: "Practically" }
    ]
  },
  // Technology
  {
    id: 48,
    text: "How do you use technology?",
    options: [
      { value: "expert", text: "As an expert" },
      { value: "advanced", text: "At advanced level" },
      { value: "intermediate", text: "At intermediate level" },
      { value: "basic", text: "At basic level" }
    ]
  },
  // Innovation
  {
    id: 49,
    text: "How do you innovate?",
    options: [
      { value: "pioneer", text: "I pioneer" },
      { value: "improve", text: "I improve" },
      { value: "adapt", text: "I adapt" },
      { value: "implement", text: "I implement" }
    ]
  },
  // Decision Making
  {
    id: 50,
    text: "How do you decide?",
    options: [
      { value: "data", text: "Using data" },
      { value: "intuition", text: "Using intuition" },
      { value: "consensus", text: "Using consensus" },
      { value: "process", text: "Using process" }
    ]
  }
];

const careerPaths = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data sets to help guide business decisions",
    skills: ["Python", "Machine Learning", "Statistics", "Data Analysis"],
    demand: "High",
    growth: "Very High",
    salary: { min: 80000, max: 150000 },
    companies: ["Google", "Microsoft", "Amazon", "IBM"],
    experience: "2-5 years",
    education: "Bachelor's or Master's in Computer Science, Statistics, or related field",
    certifications: ["AWS Certified Data Analytics", "Google Data Analytics Professional Certificate"]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Develop and implement artificial intelligence solutions",
    skills: ["Python", "TensorFlow", "Deep Learning", "Neural Networks"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 90000, max: 160000 },
    companies: ["OpenAI", "DeepMind", "NVIDIA", "Tesla"],
    experience: "3-6 years",
    education: "Master's or PhD in Computer Science, AI, or related field",
    certifications: ["TensorFlow Developer Certificate", "AWS Machine Learning Specialty"]
  },
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design and build software applications",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    demand: "High",
    growth: "High",
    salary: { min: 70000, max: 130000 }
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Lead product development and strategy",
    skills: ["Product Strategy", "Agile", "User Research", "Data Analysis"],
    demand: "High",
    growth: "High",
    salary: { min: 80000, max: 140000 }
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create user-centered digital experiences",
    skills: ["User Research", "Wireframing", "Prototyping", "UI Design"],
    demand: "High",
    growth: "High",
    salary: { min: 65000, max: 120000 }
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Manage and optimize development operations",
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Services"],
    demand: "High",
    growth: "High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect systems and data from security threats",
    skills: ["Security Analysis", "Network Security", "Incident Response", "Risk Assessment"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 75000, max: 140000 }
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    description: "Design and implement cloud infrastructure",
    skills: ["AWS", "Azure", "Cloud Security", "System Design"],
    demand: "High",
    growth: "Very High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    description: "Develop decentralized applications and smart contracts",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Cryptography"],
    demand: "High",
    growth: "High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer",
    description: "Create mobile applications for iOS and Android",
    skills: ["Swift", "Kotlin", "React Native", "Mobile UI"],
    demand: "High",
    growth: "High",
    salary: { min: 70000, max: 130000 }
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    description: "Build and maintain data infrastructure",
    skills: ["Python", "SQL", "ETL", "Big Data"],
    demand: "High",
    growth: "High",
    salary: { min: 80000, max: 140000 }
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    description: "Develop and deploy machine learning models",
    skills: ["Python", "TensorFlow", "MLOps", "Model Deployment"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    description: "Develop both frontend and backend applications",
    skills: ["JavaScript", "React", "Node.js", "Database"],
    demand: "High",
    growth: "High",
    salary: { min: 75000, max: 140000 }
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    description: "Ensure software quality through testing",
    skills: ["Testing", "Automation", "Quality Assurance", "Bug Tracking"],
    demand: "High",
    growth: "High",
    salary: { min: 65000, max: 120000 }
  },
  {
    id: "technical-lead",
    title: "Technical Lead",
    description: "Lead development teams and technical decisions",
    skills: ["Leadership", "Architecture", "Code Review", "Team Management"],
    demand: "High",
    growth: "High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Analyze data to provide business insights",
    skills: ["SQL", "Data Visualization", "Statistics", "Business Analysis"],
    demand: "High",
    growth: "High",
    salary: { min: 60000, max: 110000 }
  },
  {
    id: "system-architect",
    title: "System Architect",
    description: "Design complex system architectures",
    skills: ["System Design", "Architecture", "Cloud", "Security"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    description: "Implement security measures and protocols",
    skills: ["Security", "Network", "Compliance", "Risk Management"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Build user interfaces and experiences",
    skills: ["JavaScript", "React", "CSS", "UI/UX"],
    demand: "High",
    growth: "High",
    salary: { min: 70000, max: 130000 }
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Develop server-side applications and APIs",
    skills: ["Node.js", "Python", "Database", "API Design"],
    demand: "High",
    growth: "High",
    salary: { min: 75000, max: 140000 }
  },
  {
    id: "game-developer",
    title: "Game Developer",
    description: "Create video games and interactive experiences",
    skills: ["Unity", "C#", "Game Design", "3D Modeling"],
    demand: "High",
    growth: "High",
    salary: { min: 65000, max: 120000 }
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems Engineer",
    description: "Develop software for embedded systems",
    skills: ["C++", "Embedded Systems", "RTOS", "Hardware"],
    demand: "High",
    growth: "High",
    salary: { min: 80000, max: 140000 }
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    description: "Design and maintain network infrastructure",
    skills: ["Networking", "Security", "Cloud", "Infrastructure"],
    demand: "High",
    growth: "High",
    salary: { min: 75000, max: 130000 }
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    description: "Manage and optimize databases",
    skills: ["SQL", "Database Design", "Performance", "Security"],
    demand: "High",
    growth: "High",
    salary: { min: 70000, max: 130000 }
  },
  {
    id: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    description: "Ensure system reliability and performance",
    skills: ["DevOps", "Monitoring", "Automation", "Infrastructure"],
    demand: "High",
    growth: "High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    description: "Create technical documentation and guides",
    skills: ["Technical Writing", "Documentation", "API", "User Guides"],
    demand: "High",
    growth: "High",
    salary: { min: 55000, max: 100000 }
  },
  {
    id: "research-scientist",
    title: "Research Scientist",
    description: "Conduct research in AI and machine learning",
    skills: ["Research", "Machine Learning", "Statistics", "Publications"],
    demand: "High",
    growth: "High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "mobile-architect",
    title: "Mobile Architect",
    description: "Design mobile application architecture",
    skills: ["Mobile", "Architecture", "iOS", "Android"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description: "Implement and manage cloud solutions",
    skills: ["AWS", "Azure", "Cloud", "DevOps"],
    demand: "High",
    growth: "Very High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "security-analyst",
    title: "Security Analyst",
    description: "Analyze and respond to security threats",
    skills: ["Security", "Analysis", "Incident Response", "Threat Detection"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 75000, max: 140000 }
  },
  {
    id: "data-architect",
    title: "Data Architect",
    description: "Design data architecture and solutions",
    skills: ["Data Architecture", "Big Data", "ETL", "Data Modeling"],
    demand: "High",
    growth: "High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    description: "Research and develop AI algorithms",
    skills: ["AI", "Research", "Machine Learning", "Deep Learning"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "blockchain-architect",
    title: "Blockchain Architect",
    description: "Design blockchain solutions and architecture",
    skills: ["Blockchain", "Architecture", "Smart Contracts", "Cryptography"],
    demand: "High",
    growth: "High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "mobile-qa",
    title: "Mobile QA Engineer",
    description: "Test and ensure mobile app quality",
    skills: ["Mobile Testing", "Automation", "QA", "Mobile Platforms"],
    demand: "High",
    growth: "High",
    salary: { min: 60000, max: 110000 }
  },
  {
    id: "data-science-manager",
    title: "Data Science Manager",
    description: "Lead data science teams and projects",
    skills: ["Leadership", "Data Science", "Project Management", "Strategy"],
    demand: "High",
    growth: "High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "security-architect",
    title: "Security Architect",
    description: "Design security architecture and solutions",
    skills: ["Security", "Architecture", "Risk Management", "Compliance"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    description: "Implement cloud security solutions",
    skills: ["Cloud Security", "AWS", "Azure", "Security"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    description: "Manage AI product development",
    skills: ["Product Management", "AI", "Strategy", "User Research"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    description: "Develop blockchain applications",
    skills: ["Blockchain", "Smart Contracts", "Solidity", "Web3"],
    demand: "High",
    growth: "High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "mobile-security-engineer",
    title: "Mobile Security Engineer",
    description: "Implement mobile security solutions",
    skills: ["Mobile Security", "iOS", "Android", "Security"],
    demand: "High",
    growth: "High",
    salary: { min: 85000, max: 150000 }
  },
  {
    id: "data-engineering-manager",
    title: "Data Engineering Manager",
    description: "Lead data engineering teams",
    skills: ["Leadership", "Data Engineering", "Big Data", "Team Management"],
    demand: "High",
    growth: "High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "ai-architect",
    title: "AI Architect",
    description: "Design AI system architecture",
    skills: ["AI", "Architecture", "Machine Learning", "System Design"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "blockchain-security-engineer",
    title: "Blockchain Security Engineer",
    description: "Implement blockchain security solutions",
    skills: ["Blockchain", "Security", "Smart Contracts", "Cryptography"],
    demand: "High",
    growth: "High",
    salary: { min: 90000, max: 160000 }
  },
  {
    id: "mobile-architect",
    title: "Mobile Architect",
    description: "Design mobile application architecture",
    skills: ["Mobile", "Architecture", "iOS", "Android"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    description: "Design cloud infrastructure architecture",
    skills: ["Cloud", "Architecture", "AWS", "Azure"],
    demand: "High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "security-engineering-manager",
    title: "Security Engineering Manager",
    description: "Lead security engineering teams",
    skills: ["Leadership", "Security", "Team Management", "Strategy"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "ai-engineering-manager",
    title: "AI Engineering Manager",
    description: "Lead AI engineering teams",
    skills: ["Leadership", "AI", "Team Management", "Strategy"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "blockchain-architect",
    title: "Blockchain Architect",
    description: "Design blockchain architecture",
    skills: ["Blockchain", "Architecture", "Smart Contracts", "System Design"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "mobile-engineering-manager",
    title: "Mobile Engineering Manager",
    description: "Lead mobile development teams",
    skills: ["Leadership", "Mobile", "Team Management", "Strategy"],
    demand: "High",
    growth: "High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "cloud-engineering-manager",
    title: "Cloud Engineering Manager",
    description: "Lead cloud engineering teams",
    skills: ["Leadership", "Cloud", "Team Management", "Strategy"],
    demand: "High",
    growth: "Very High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "security-architect",
    title: "Security Architect",
    description: "Design security architecture",
    skills: ["Security", "Architecture", "Risk Management", "Compliance"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "ai-architect",
    title: "AI Architect",
    description: "Design AI system architecture",
    skills: ["AI", "Architecture", "Machine Learning", "System Design"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "blockchain-engineering-manager",
    title: "Blockchain Engineering Manager",
    description: "Lead blockchain development teams",
    skills: ["Leadership", "Blockchain", "Team Management", "Strategy"],
    demand: "High",
    growth: "High",
    salary: { min: 100000, max: 180000 }
  },
  {
    id: "mobile-security-architect",
    title: "Mobile Security Architect",
    description: "Design mobile security architecture",
    skills: ["Mobile", "Security", "Architecture", "Risk Management"],
    demand: "High",
    growth: "High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "cloud-security-architect",
    title: "Cloud Security Architect",
    description: "Design cloud security architecture",
    skills: ["Cloud", "Security", "Architecture", "Risk Management"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 95000, max: 170000 }
  },
  {
    id: "security-engineering-director",
    title: "Security Engineering Director",
    description: "Lead security engineering organization",
    skills: ["Leadership", "Security", "Strategy", "Organization"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 120000, max: 200000 }
  },
  {
    id: "ai-engineering-director",
    title: "AI Engineering Director",
    description: "Lead AI engineering organization",
    skills: ["Leadership", "AI", "Strategy", "Organization"],
    demand: "Very High",
    growth: "Very High",
    salary: { min: 120000, max: 200000 }
  },
  {
    id: "blockchain-engineering-director",
    title: "Blockchain Engineering Director",
    description: "Lead blockchain engineering organization",
    skills: ["Leadership", "Blockchain", "Strategy", "Organization"],
    demand: "High",
    growth: "High",
    salary: { min: 120000, max: 200000 }
  },
  {
    id: "mobile-engineering-director",
    title: "Mobile Engineering Director",
    description: "Lead mobile engineering organization",
    skills: ["Leadership", "Mobile", "Strategy", "Organization"],
    demand: "High",
    growth: "High",
    salary: { min: 120000, max: 200000 }
  },
  {
    id: "cloud-engineering-director",
    title: "Cloud Engineering Director",
    description: "Lead cloud engineering organization",
    skills: ["Leadership", "Cloud", "Strategy", "Organization"],
    demand: "High",
    growth: "Very High",
    salary: { min: 120000, max: 200000 }
  }
];

const sortCareerPaths = (paths: CareerPath[], sortBy: string) => {
  return [...paths].sort((a, b) => {
    switch (sortBy) {
      case 'salary':
        return Number(b.salary.min) - Number(a.salary.min);
      case 'demand': {
        const demandOrder: Record<string, number> = { 'Very High': 3, 'High': 2, 'Medium': 1, 'Low': 0 };
        return demandOrder[b.demand] - demandOrder[a.demand];
      }
      case 'growth': {
        const growthOrder: Record<string, number> = { 'Very High': 3, 'High': 2, 'Medium': 1, 'Low': 0 };
        return growthOrder[b.growth] - growthOrder[a.growth];
      }
      default:
        return 0;
    }
  });
};

export default function CareerTestPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  const handleTestComplete = (result: TestResult) => {
    localStorage.setItem('careerTestResults', JSON.stringify(result));
    router.push('/career-test/results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              {t('careerTest', language)}
            </h1>
            <p className="text-gray-400 text-lg">
              {t('testDescription', language)}
            </p>
          </motion.div>
          
          <CareerTest
            questions={questions}
            onComplete={handleTestComplete}
          />
        </div>
      </div>
    </div>
  );
} 