/**
 * Primary source of truth for Kamalesh R's AI/ML Portfolio.
 * All personal details, projects, skills, education milestones, certifications,
 * leadership achievements, and contact links are stored here for easy editing.
 */

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  visualType: 'sms-classifier' | 'churn-analytics' | 'fraud-monitor';
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  statusLabel: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface EducationMilestone {
  id: string;
  milestoneNumber: string;
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  expectedGraduation?: string;
  score?: string;
  coursework?: string[];
  align: 'left' | 'right';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imagePath: string;
  focusTopics: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'KAMALESH R',
    displayName: 'Kamalesh R',
    initials: 'KR',
    role: 'AI/ML Engineer in Progress | Machine Learning Enthusiast',
    headline: 'Building Intelligent Solutions with AI & Machine Learning.',
    supportingText:
      'Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about developing predictive models, NLP pipelines, and data-driven solutions to real-world problems.',
    heroTags: [
      'Python',
      'Machine Learning',
      'NLP',
      'Predictive Analytics',
      'Generative AI',
      'AI Agents',
    ],
    resumeFileName: 'Kamalesh_R_Resume.pdf',
    staticResumePath: '/Kamalesh_R_Resume.pdf',
  },

  about: {
    heading: 'Turning Data Into Intelligence.',
    introduction:
      "I'm a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Jeppiaar Engineering College, Chennai. I enjoy developing machine learning models, exploring natural language processing, and solving practical problems through data-driven approaches. My experience includes building classification systems, predictive models, and data preprocessing pipelines using Python and Scikit-learn. I'm continuously learning and looking for opportunities to contribute to impactful AI/ML projects.",
    infoCards: [
      {
        label: 'Primary Focus',
        value: 'Artificial Intelligence & Machine Learning',
        detail: 'Supervised classification, feature pipelines & model validation',
      },
      {
        label: 'Technical Interest',
        value: 'NLP, Predictive Analytics & AI Agents',
        detail: 'Text representation, behavioral modeling & intelligent workflows',
      },
      {
        label: 'Career Goal',
        value: 'AI/ML Internship Opportunities',
        detail: 'Contributing to production-grade data science and ML engineering teams',
      },
    ],
  },

  skillCategories: [
    {
      id: 'languages',
      title: 'Programming Languages',
      subtitle: 'Core language for algorithmic problem solving and ML implementation',
      statusLabel: 'Core',
      skills: [
        { name: 'Python', context: 'Primary language for ML, NLP & Data Pipelines' },
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      subtitle: 'Modeling methodologies, text intelligence, and evaluation techniques',
      statusLabel: 'Learning',
      skills: [
        { name: 'Machine Learning Fundamentals', context: 'Supervised & unsupervised learning workflows' },
        { name: 'Generative AI', context: 'Foundation models & generative architectures' },
        { name: 'AI Agents', context: 'Autonomous task reasoning & tool-use patterns' },
        { name: 'Natural Language Processing', context: 'Tokenization, normalization & TF-IDF vectorization' },
        { name: 'Predictive Analytics', context: 'Trend forecasting & risk classification' },
        { name: 'Classification Models', context: 'Logistic Regression, Naive Bayes, Decision Trees, Random Forests' },
        { name: 'Feature Engineering', context: 'Indicator construction, encoding & correlation analysis' },
        { name: 'Model Evaluation', context: 'Cross-validation, Precision-Recall, F1-score & Confusion Matrices' },
        { name: 'Imbalanced Dataset Handling', context: 'SMOTE oversampling & minority-class recall optimization' },
      ],
    },
    {
      id: 'libraries-tools',
      title: 'Libraries & Tools',
      subtitle: 'Scientific computing stack, visualization, and version control',
      statusLabel: 'Learning',
      skills: [
        { name: 'Scikit-learn', context: 'Model training, cross-validation & preprocessing pipelines' },
        { name: 'Pandas', context: 'Dataframe manipulation, cleaning & aggregation' },
        { name: 'NumPy', context: 'Vectorized numerical computing & array operations' },
        { name: 'Seaborn', context: 'Statistical data visualization & correlation heatmaps' },
        { name: 'Git', context: 'Distributed version control & branching workflows' },
        { name: 'GitHub', context: 'Code hosting & collaborative repository management' },
        { name: 'MS Office', context: 'Technical documentation, reporting & presentation' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'spam-sms-detector',
      index: '01',
      title: 'Spam SMS Detector',
      category: 'Natural Language Processing · Text Classification',
      shortDescription:
        'Developed an NLP-based text classification model to identify spam SMS messages through text preprocessing and machine learning.',
      technologies: ['Python', 'Scikit-learn', 'NLP', 'Pandas'],
      highlights: [
        'Implemented text normalization, tokenization, and TF-IDF feature extraction.',
        'Trained and tuned Naive Bayes and Logistic Regression classifiers.',
      ],
      visualType: 'sms-classifier',
      githubUrl: '',
      liveDemoUrl: '',
    },
    {
      id: 'customer-churn-prediction',
      index: '02',
      title: 'Customer Churn Prediction',
      category: 'Predictive Analytics · Behavioral Modeling',
      shortDescription:
        'Developed a predictive classification model to identify customers at risk of leaving a service by analyzing customer records and behavioral indicators.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
      highlights: [
        'Performed exploratory data analysis, data cleaning, and feature engineering.',
        'Compared Decision Trees and Random Forest classification models.',
      ],
      visualType: 'churn-analytics',
      githubUrl: '',
      liveDemoUrl: '',
    },
    {
      id: 'credit-card-fraud-detection',
      index: '03',
      title: 'Credit Card Fraud Detection',
      category: 'Imbalanced Learning · Anomaly Detection',
      shortDescription:
        'Designed a machine learning system to identify fraudulent transactions in a highly imbalanced dataset.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      highlights: [
        'Applied SMOTE and undersampling techniques to address class imbalance.',
        'Evaluated performance using confusion matrices, precision-recall curves, and F1-score.',
      ],
      visualType: 'fraud-monitor',
      githubUrl: '',
      liveDemoUrl: '',
    },
  ] as ProjectItem[],

  education: [
    {
      id: 'be-cse-aiml',
      milestoneNumber: 'Milestone 01',
      degree: 'Bachelor of Engineering',
      specialization: 'B.E. Computer Science & Engineering — Artificial Intelligence and Machine Learning',
      institution: 'Jeppiaar Engineering College, Chennai',
      location: 'Chennai, Tamil Nadu',
      period: '2025 – Present',
      expectedGraduation: 'May 2029',
      score: 'CGPA: 8.0',
      coursework: ['Machine Learning', 'Data Structures', 'Artificial Intelligence'],
      align: 'left',
    },
    {
      id: 'hsc',
      milestoneNumber: 'Milestone 02',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'NSVV Boys Higher Secondary School, Chennai',
      location: 'Chennai, Tamil Nadu',
      period: 'Year: 2025',
      score: 'Final Score: 91%',
      align: 'right',
    },
    {
      id: 'sslc',
      milestoneNumber: 'Milestone 03',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'NSVV Boys Higher Secondary School, Chennai',
      location: 'Chennai, Tamil Nadu',
      period: 'Year: 2023',
      score: 'Final Score: 88%',
      align: 'left',
    },
  ] as EducationMilestone[],

  certifications: [
    {
      id: 'cert-google-genai',
      title: 'Introduction to Generative AI',
      issuer: 'Google',
      year: '2026',
      imagePath: '/certificate-assets/google-generative-ai-2026.png',
      focusTopics: ['Generative AI Foundations', 'Large Language Models', 'Responsible AI Principles'],
    },
    {
      id: 'cert-infosys-aiml',
      title: 'Fundamentals of AI & Machine Learning',
      issuer: 'Infosys',
      year: '2026',
      imagePath: '/certificate-assets/infosys-ai-ml-fundamentals-2026.png',
      focusTopics: ['Supervised Learning', 'Pattern Recognition', 'AI Workflows'],
    },
    {
      id: 'cert-amazon-mlai',
      title: 'Fundamentals of Machine Learning and Artificial Intelligence',
      issuer: 'Amazon',
      year: '2026',
      imagePath: '/certificate-assets/amazon-ml-ai-fundamentals-2026.png',
      focusTopics: ['ML Pipeline Architecture', 'Model Training Concepts', 'Cloud AI Foundations'],
    },
  ] as CertificationItem[],

  leadership: {
    heading: 'Beyond the Code.',
    role: 'NSS Volunteer',
    organization: 'NSVV Boys Higher Secondary School',
    period: '2023–2025',
    awardTitle: 'Best NSS Student (2025 Batch)',
    description:
      'Awarded "Best NSS Student" of the batch in 2025 in recognition of consistent volunteering and service.',
    highlights: [
      'Recognized for two years of dedicated community service and student leadership.',
      'Coordinated school-level civic initiatives and collaborative volunteer drives.',
    ],
  },

  strengthsAndInterests: {
    areasOfFocus: [
      'Artificial Intelligence',
      'Machine Learning',
      'Natural Language Processing',
      'Predictive Analytics',
      'AI Agents',
    ],
    professionalStrengths: [
      'Analytical Problem Solving',
      'Written and Verbal Communication',
      'Technical Teamwork',
      'Time Management',
    ],
    languages: [
      { language: 'English', proficiency: 'Professional Working Proficiency' },
      { language: 'Tamil', proficiency: 'Native' },
    ],
  },

  contact: {
    heading: "Let's Build Something Intelligent.",
    supportingText:
      "I'm interested in AI/ML internship opportunities, technical collaborations, and projects that turn ideas into practical solutions.",
    email: 'kamalesh6764@gmail.com',
    linkedin: 'https://linkedin.com/in/kamaleshram',
    linkedinDisplay: 'linkedin.com/in/kamaleshram',
    location: 'Chennai, Tamil Nadu, India',
    githubUrl: '',
    showPhoneNumber: false,
    phoneNumber: '',
  },
};
