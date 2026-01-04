import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Devanshu Jain",
    "title": "Computer Science Undergraduate",
    "email": "devanshujain336@gmail.com",
    "phone": "9301601955",
    "linkedin": "linkedin.com/in/devanshu-jain-956598203",
    "github": "Devanshujain336",
    "location": "Kurukshetra, Haryana",
    "summary": "Motivated and detail-oriented Computer Science undergraduate at NIT Kurukshetra with a strong foundation in Data Structures, Algorithms, and Full-Stack Development. Passionate about solving real-world problems through efficient, scalable, and user-focused software solutions. Seeking challenging software development internship opportunities to apply technical expertise, enhance coding proficiency, and contribute to impactful projects in collaborative environments."
  },
  "experience": [
    {
      "title": "Operations & Student Management Intern",
      "company": "JEE Simplified",
      "dates": "March 2025 - March 2026",
      "description": "Managed student operations and coordinated with teams to optimize platform efficiency",
      "highlights": []
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Expected Graduation: May 2028",
      "gpa": "9.06"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "MediCare+",
      "description": "AI-Based Healthcare Platform led by a team of 6 to build an AI-powered healthcare system; won HACKSHETRA'25 Hackathon. Developed chatbot for affordable medicine alternatives, a prescription scanner, emergency response module, and integrated OpenCV for patient monitoring.",
      "technologies": [
        "Python",
        "OpenCV",
        "MongoDB",
        "Node.js"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "HealthMitra",
      "description": "AI-powered WhatsApp Healthcare Agent that automates vaccination reminders, nutrition screening, outbreak alerts, and SOS workflows. Designed event-driven automation pipelines with multilingual support.",
      "technologies": [
        "n8n",
        "WhatsApp Business API",
        "AI/NLP",
        "Node.js"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Sukhaayu",
      "description": "A wellness and mental health platform built for student wellness at Thought Lab, NIT Kurukshetra. It includes personalized health dashboards, meditation, yoga resources, therapist consultations, and emergency access.",
      "technologies": [
        "JavaScript",
        "Node.js",
        "MongoDB"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "slate"
};
