
// Quick-edit config for your site
window.PORTFOLIO = {
  name: "Shivam Parashar",
  roleWords: ["Software Engineer", "Backend & Cloud", "DevOps", "Data & ML", "Agentic AI Systems"],
  location: "Rochester, NY (Open to Relocate)",
  email: "sp3466@rit.edu",
  phone: "+1 (585) 481-9419",
  github: "https://github.com/Spador",
  linkedin: "https://linkedin.com/in/shivam-parashar1",
  resumeUrl: "assets/Shivam_Resume.pdf",
  summary: "M.S. in Computer Science from RIT (GPA 3.8), engineering scalable backend and cloud automation systems, backed by three years at Deloitte delivering software and DevOps solutions on AWS.",
  highlights: [
    {
      title: "Agentic AI Systems",
      description: "Built multi-agent frameworks with CrewAI, Sidekick (LangGraph AutoGen), and OpenAI SDK, orchestrating MCP-integrated automations for research, fintech, and code generation."
    },
    {
      title: "Cloud Engineering Impact",
      description: "Delivered 3 years at Deloitte leading AWS data platform migrations and CI/CD modernization, scaling infrastructure and delivery pipelines across enterprise clients."
    },
    {
      title: "Full-Stack Curriculum Platform",
      description: "Developed a Spring Boot + React + Neo4j application enabling secure, role-based curriculum management and 40% faster graph query performance."
    },
    {
      title: "Teaching & Mentorship",
      description: "Served as Teaching Assistant for Java (OOP) and Python courses in RIT’s DS & Algorithms and Problem Solving (CSCI 141/242)."
    }
  ],
  skills: {
    Programming_Languages: ["Python","Java","SQL","C/C++","Shell/Bash"],
    Databases_Storage: ["PostgreSQL","MongoDB","Neo4j","DynamoDB","Amazon S3","Amazon Redshift"],
    Data_Engineering_Libraries: ["Pandas","NumPy","Matplotlib","Folium","Scikit-Learn"],
    Analytics_Visualization: ["Tableau","Power BI","Excel"],
    ML_GenAI_Frameworks: ["AWS SageMaker","AWS Bedrock","LangGraph","CrewAI","AutoGen","OpenAI SDK"],
    Cloud_Platforms: ["AWS (IAM)","AWS EC2","AWS Lambda","AWS EKS","AWS Fargate","AWS API Gateway","AWS CloudFront","AWS VPC","OCI"],
    Infrastructure_IaC: ["Docker","Kubernetes","Terraform","AWS Route 53"],
    CICD_Automation: ["Jenkins","GitLab CI","GitHub Actions","MCP"],
    APIs_Integration: ["RESTful APIs","JSON","Microservices"],
    Developer_Workspaces: ["Linux/Unix","Windows","macOS","VS Code","IntelliJ","PyCharm","Git","Jira"]
  },
  experience: [
    {
      role: "Software Engineer",
      org: "Deloitte Consulting USI",
      period: "Jul 2019 – Dec 2021",
      bullets: [
        "Engineered and deployed cloud-native data and backend systems for healthcare, finance, and retail clients, delivering 10+ AWS database platforms with automated observability and governance.",
        "Developed Java-based microservices integrated into Jenkins CI/CD workflows, accelerating deployments by 30% and improving release reliability.",
        "Automated infrastructure provisioning with Terraform and Kubernetes, reducing environment setup time by 40%.",
        "Designed scalable ETL pipelines and Tableau/Power BI dashboards for real-time analytics and decision-making."
      ]
    },
    {
      role: "Data Scientist Co-op",
      org: "I3CLogic Technologies Pvt. Ltd.",
      period: "May 2018 – Jun 2018",
      bullets: [
        "Optimized telecom data ingestion with Python (Pandas) for 48% faster throughput.",
        "Built and trained an AWS SageMaker ML model (92.7% accuracy) to impute missing call records, improving data quality."
      ]
    },
    {
      role: "Software Engineer (Backend) Co-op",
      org: "Oracle",
      period: "May 2017 – Jul 2017",
      bullets: [
        "Built RESTful backend services using Java (WebLogic) to support enterprise analytics.",
        "Tuned SQL/PLSQL queries and automated release workflows, reducing report latency by 19%."
      ]
    }
  ],
  education: [
    {title:"M.S., Computer Science (GPA 3.8/4.0)", org:"Rochester Institute of Technology", period:"Jan 2023 – May 2025"},
    {title:"B.S., Computer Science (GPA 8.8/10)", org:"Vellore Institute of Technology", period:"Jul 2015 – Jun 2019"}
  ],
  certifications: [
    {title:"AWS Certified Solutions Architect – Associate (SAA‑C03)", period:"Aug 2025 – Aug 2028", link:"https://www.credly.com/badges/b2c32831-a4dc-45ab-b9ed-5dca0969ccb8/public_url"},
    {title:"AWS Certified Cloud Practitioner (CLF‑C02)", period:"Jul 2025 – Jul 2028", link:"https://www.credly.com/badges/f4a440de-4a0d-499a-9278-cfc97bc44dd9/public_url"}
  ],
  projects: [
    {
      name: "Sidekick Agentic Coworker",
      tags: ["Python","LangGraph","Gradio","OpenAI","Tooling"],
      desc: "LangGraph-powered teammate with real-time tool execution, task evaluation, and a Gradio chat UI for collaborative software delivery.",
      repo: "https://github.com/Spador/Sidekick"
    },
    {
      name: "CrewAI Multi-Agent Automations",
      tags: ["CrewAI","LangGraph","GenAI","Agents","CI/CD"],
      desc: "Architected 5+ multi-agent crews that debate, research finance, ship code, and scout stocks with reproducible YAML pipelines and MCP toolchains.",
      repo: "https://github.com/Spador/CrewAI_Projects"
    },
    {
      name: "Curriculum Management Platform",
      tags: ["Spring Boot","React","Neo4j","RBAC","Auth"],
      desc: "Secure curriculum management stack with Neo4j graph queries performing 40% faster and Spring Boot RBAC APIs for students, faculty, and admins.",
      repo: "https://github.com/Spador/Neo4J-Curriculum-Management"
    },
    {
      name: "Deep Research Bot",
      tags: ["Agents","Search","Report Automation","Python"],
      desc: "End-to-end research agent that plans, sources, summarizes, and emails rich reports from a single question.",
      repo: "https://github.com/Spador/Deep-Research-Bot"
    },
    {
      name: "Traffic Flow Optimization using AI & Cloud",
      tags: ["Reinforcement Learning","SUMO","AWS","Bedrock"],
      desc: "Simulated 10k+ vehicle networks with SUMO and Bedrock-assisted RL rerouting to reduce wait times by 25% and emissions by 18%.",
      repo: ""
    },
    {
      name: "NYC Crash Data Mining & Visualization",
      tags: ["Python","Folium","K-Means","Data Mining"],
      desc: "Explored NYC collision records with clustering, 50+ dashboards, and interactive Folium heatmaps to surface safety insights.",
      repo: "https://github.com/Spador/NYC-Crash-DataMining-Visualization"
    },
    {
      name: "Aquila Optimizer Reproduction",
      tags: ["Optimization","Python","Research","Swarm Intelligence"],
      desc: "Replicated the Aquila optimizer for a graduate bio-inspired AI study, validating benchmark performance and open-sourcing experiments.",
      repo: "https://github.com/Spador/Aquila-Optimizer-Reproduced"
    }
  ]
};
