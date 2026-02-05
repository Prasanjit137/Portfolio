import langGraphCert from '../assets/certifications/LangGraph-DevelopLLMpoweredAIagentswithLangGraph.jpg';
import GenAIBeginnerCert from '../assets/certifications/GenerativeAIforBeginners.jpg';
import PromptEngineerCert from '../assets/certifications/PromptEngineeringwithChatGPTMasterclass.jpg';
import LangChainCert from '../assets/certifications/LangChain-DevelopAlAgentswithLangChain&LangGraph.jpg';
import AIAgentsCert from '../assets/certifications/AI-AgentsAutomation&BuisnesswithLangChin&LLApps.jpg';
import RAGCert from '../assets/certifications/BasictoAdvanced-Retreival-AugmentedGeneration(RAG).jpg';
import ProfilePic from '../assets/profile/profile.jpeg';
import Resume from '../assets/resume/Resume.pdf';

export const RESUME_DATA = {
  name: "Gen AI Developer",
  
  introduction: "I architect autonomous agentic workflows and scalable GenAI systems. I don't just write code; I engineer solutions that make AI smarter and software more intuitive.",
  summary: "I bridge the gap between complex AI research and production-ready applications. As a GenAI Developer, I specialize in architecting scalable systems using Python and React, with a focus on autonomous agentic workflows.",

  profile: ProfilePic,
  resume: Resume,

  about: [
    {
      myName: "Prasanjit Sarkar",
      aboutSummary: "a Systems Architect focused on transforming complex AI research into high-performance, production-ready ecosystems. I specialize in engineering autonomous agentic workflows and scalable GenAI infrastructures that bridge the gap between raw logic and intuitive user experiences. My mission is to build intelligent software that doesn't just process data, but learns and adapts to solve real-world human problems.",
      aboutTag:"Building autonomous systems that learn, adapt, and scale.",
    }     
  ],
  
experience: [
  {
    title: "Project Engineer",
    company: "Wipro",
    client: "Cisco", // Added client
    location: "Bengaluru",
    period: "Sept 2024 -- Present",
    categories: [
      {
        subTitle: "AI Strategy & Agentic Orchestration",
        points: [
          "Spearheaded the end-to-end design and deployment of multi-agentic workflows for Cisco systems using Python and LangGraph.",
          "Developed sophisticated prompt templates to refine LLM outputs, ensuring consistency across enterprise model providers.",
          "Implemented evaluation frameworks to track agent trajectories and success rates."
        ]
      },
      {
        subTitle: "RAG & Data Infrastructure",
        points: [
          "Architected robust, scalable ETL pipelines to ingest unstructured data into Pinecone/ChromaDB vector stores.",
          "Designed fine-tuned RAG systems with re-ranking modules to minimize hallucinations for sensitive business data.",
          "Optimized retrieval latency to achieve sub-second response times for enterprise datasets."
        ]
      },
      {
        subTitle: "Full-Stack Integration & Optimization",
        points: [
          "Developed high-performance microservices using FastAPI and Node.js for stateful AI orchestrations.",
          "Engineered dynamic 'Human-in-the-loop' dashboards in React.js to monitor autonomous agent behaviors.",
          "Integrated secure session management to ensure scalable AI interactions across concurrent users."
        ]
      }
    ]
  }
],
  
  skills: {
    genAI: ["LangGraph", "Agents", "LangChain", "RAG Architecture", "LLMs", "Prompt Engineering"],
    programming: ["Python", "JavaScript"],
    frameworks: ["React JS", "Node.js", "Express"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub Copilot", "MySQL Workbench"]
  },
  
  education: [
    {
      degree: "Master of Technology in Nanoscience and Technology",
      institution: "Jadavpur University",
      location: "Kolkata, West Bengal",
      period: "September 2024",
      cgpa: "6.45"
    },
    {
      degree: "Bachelor of Technology in Electrical Engineering",
      institution: "Siliguri Institute of Technology",
      location: "Siliguri, West Bengal",
      period: "July 2021",
      cgpa: "8.35"
    }
  ],
  
  achievements: [
    {
      title: "Smart wearable safety device: A wearable anti-assault and location tracking device",
      publisher: "Springer Nature",
      description: "Engineered a portable anti-assault device with real-time location tracking to alert emergency contacts",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-2109-3_54"
    }
  ],
  
  certifications: [
    {
      name: "LangGraph- Develop LLM powered AI Agents with LangGraph | Udemy",
      file: langGraphCert
    },
    {
      name: "AI-Agents: Automation & Business with LangChain & LLM Apps",
      file: AIAgentsCert
    },
    {
      name: "Basic to Advanced: Retrieval-Augmented Generation (RAG) | Udemy",
      file: RAGCert      
    },
    {
      name: "LangChain- Develop AI Agents with LangChain & Lang Graph | Udemy",
      file: LangChainCert
    },
    {
      name: "ChatGPT & Prompt Engineering Masterclass | Udemy",
      file: PromptEngineerCert
    },
    {
      name: "Generative AI for Beginners | Udemy",
      file: GenAIBeginnerCert
    }
  ]
};

export const SPLINE_SCENE_URL = "https://prod.spline.design/TUnXfsE7D5L6Iu3V/scene.splinecode";