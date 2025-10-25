
// Quick-edit config for your site
window.PORTFOLIO = {
  name: "Shivam Parashar",
  roleWords: ["Software Engineer", "Platform & DevOps", "Data & ML Engineer", "Multi-Agent Systems", "Cloud Architect"],
  location: "Rochester, NY (Open to Relocate)",
  email: "sp3466@rit.edu",
  phone: "+1 (585) 481-9419",
  github: "https://github.com/Spador",
  linkedin: "https://linkedin.com/in/shivam-parashar1",
  resumeUrl: "assets/Shivam_Resume.pdf",
  summary: "MS CS candidate at RIT (GPA 3.8) building multi-agent automation and RL traffic systems, following 3 years at Deloitte delivering cloud-scale data platforms on AWS and OCI.",
  highlights: [
    {k:"Multi-Agent GenAI", v:"CrewAI automations for debates, fintech, code, and stock scouts"},
    {k:"Cloud Impact", v:"3 yrs at Deloitte scaling AWS/OCI data & CI/CD platforms"},
    {k:"Traffic AI", v:"RL rerouting cut commute waits 25% & CO2 18% in SUMO sims"},
    {k:"Teaching", v:"TA for RIT Data Structures & Algorithms (CSCI 141/242)"}
  ],
  skills: {
    Languages_Databases: ["Python","Java","SQL","C/C++","Shell/Bash","PostgreSQL","MongoDB","Neo4j","DynamoDB"],
    Data_ML_GenAI: ["Pandas","NumPy","Matplotlib","Folium","Scikit-Learn","AWS SageMaker","AWS Bedrock","LangGraph","CrewAI"],
    Cloud_Infrastructure: ["AWS (IAM/S3/EC2/Lambda)","OCI","Docker","Kubernetes","Terraform","Route 53","CloudFront"],
    CICD_DevOps: ["Jenkins","GitLab CI","GitHub Actions","Git","Jira","MCP"],
    API_BI: ["RESTful APIs","JSON","Tableau","Power BI","Excel"],
    Environments_IDEs: ["Linux/Unix","Windows","macOS","VS Code","IntelliJ","PyCharm"]
  },
  experience: [
    {
      role: "Software Engineer",
      org: "Deloitte Consulting USI",
      period: "Jul 2019 – Dec 2021",
      summary: [
        "Led data platform delivery for healthcare, finance, and retail clients, shipping 10+ AWS and OCI databases with automated observability and governance.",
        "Partnered with analysts to launch 15+ Tableau & Power BI dashboards over resilient SQL/ETL pipelines, unlocking faster stakeholder insights.",
        "Embedded Java microservices into Jenkins CI/CD and scripted Terraform-on-Kubernetes sandboxes, cutting release times by 30% and provisioning by 40%."
      ]
    },
    {
      role: "Data Scientist Intern",
      org: "I3CLogic Technologies Pvt. Ltd.",
      period: "May 2018 – Jun 2018",
      summary: "Optimized Call Data Record ingestion with Pandas for a 48% faster pipeline and trained an AWS SageMaker model (92.7% accuracy) to impute missing telecom records."
    },
    {
      role: "Software Engineer (Backend) Intern",
      org: "Oracle",
      period: "May 2017 – Jul 2017",
      summary: "Built Java REST services on Oracle WebLogic, hardened release automation, and tuned SQL/PLSQL analytics to cut reporting latency by 19% for enterprise dashboards."
    }
  ],
  education: [
    {title:"M.S., Computer Science (GPA 3.8)", org:"Rochester Institute of Technology", period:"Jan 2023 – May 2025"},
    {title:"B.S., Computer Science", org:"Vellore Institute of Technology", period:"Jul 2015 – Jun 2019"}
  ],
  certifications: [
    {title:"AWS Certified Solutions Architect – Associate (SAA‑C03)", period:"Aug 2025 – Aug 2028", link:"https://www.credly.com/badges/b2c32831-a4dc-45ab-b9ed-5dca0969ccb8/public_url"},
    {title:"AWS Certified Cloud Practitioner (CLF‑C02)", period:"Jul 2025 – Jul 2028", link:"https://www.credly.com/badges/f4a440de-4a0d-499a-9278-cfc97bc44dd9/public_url"}
  ],
  projects: [
    {
      name: "CrewAI Multi-Agent Automations",
      tags: ["CrewAI","LangGraph","GenAI","Agents","CI/CD"],
      desc: "Architected 5+ multi-agent crews that debate, research finance, ship code, and scout stocks with reproducible YAML pipelines and MCP toolchains.",
      repo: "https://github.com/Spador/CrewAI_Projects"
    },
    {
      name: "Sidekick Agentic Coworker",
      tags: ["Python","LangGraph","Gradio","OpenAI","Tooling"],
      desc: "LangGraph-powered teammate with real-time tool execution, task evaluation, and a Gradio chat UI for collaborative software delivery.",
      repo: "https://github.com/Spador/Sidekick"
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
      name: "Curriculum Management Platform",
      tags: ["Spring Boot","React","Neo4j","RBAC","Auth"],
      desc: "Secure curriculum management stack with Neo4j graph queries performing 40% faster and Spring Boot RBAC APIs for students, faculty, and admins.",
      repo: "https://github.com/Spador/Neo4J-Curriculum-Management"
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
