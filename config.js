
// Quick-edit config for your site
window.PORTFOLIO = {
  name: "Shivam Parashar",
  roleWords: ["Software Engineer", "DevOps", "Platform", "Data Engineer", "ML/AI Engineer", "Cloud & Data"],
  location: "Rochester, NY (Open to Relocate)",
  email: "sp3466@rit.edu",
  phone: "+1 (585) 481-9419",
  github: "http://github.com/spador",
  linkedin: "http://linkedin.com/in/shivam-parashar1",
  resumeUrl: "assets/Shivam_Resume.pdf",
  summary: "M.S. Computer Science @ RIT (GPA 3.8). 3 years at Deloitte shipping cloud & data systems on AWS/OCI, CI/CD, and Terraform with measurable impact.",
  highlights: [
    {k:"Experience", v:"3+ yrs (Deloitte, Oracle internships)"},
    {k:"GPA", v:"3.8 (RIT MS)"},
    {k:"AWS", v:"SAA & CCP (’25–’28)"},
  ],
  skills: {
    Languages_DB: ["Python","Java","SQL","C/C++","Bash","PostgreSQL","MongoDB","Neo4j","DynamoDB"],
    Data_ML_GenAI: ["Pandas","NumPy","TensorFlow","Scikit-Learn","NLTK","Matplotlib","Folium","SageMaker","Bedrock"],
    Cloud_Infra: ["AWS","OCI","Docker","Kubernetes","Terraform"],
    CICD_DevOps: ["Jenkins","GitLab CI","GitHub Actions","Git","Jira"],
    API_BI: ["REST APIs","JSON","Tableau","Power BI","Excel"],
    Environments: ["Linux/Unix","Windows","macOS","VS Code","IntelliJ","PyCharm"]
  },
  experience: [
    {
      role: "Software Engineer",
      org: "Deloitte Consulting USI",
      period: "Jul 2019 – Dec 2021",
      bullets: [
        "Delivered 10+ databases on AWS & OCI with automated monitoring alerts.",
        "Built 15+ Tableau/Power BI dashboards leveraging GenAI via AWS Bedrock.",
        "Integrated Java microservices into Jenkins CI/CD, cutting deploy time by ~30%.",
        "Automated sandbox setup with Python + Terraform on Kubernetes (−40% provisioning).",
        "Owned JIRA dashboards and facilitated Agile ceremonies to keep delivery on track."
      ]
    },
    {
      role: "Data Scientist Intern",
      org: "I3CLogic Technologies Pvt. Ltd.",
      period: "May 2018 – Jun 2018",
      bullets: [
        "Optimized CDR processing in Pandas (−48% load time).",
        "Built ML model (92.7% accuracy) to impute missing records."
      ]
    },
    {
      role: "Software Engineer (Backend) Intern",
      org: "Oracle",
      period: "May 2017 – Jul 2017",
      bullets: [
        "Java REST endpoints on WebLogic (−8% integration errors).",
        "Refined SQL/PLSQL for faster analytics (−19% report time)."
      ]
    }
  ],
  education: [
    {title:"M.S., Computer Science (GPA 3.8)", org:"Rochester Institute of Technology", period:"Jan 2023 – May 2025"},
    {title:"B.S., Computer Science", org:"Vellore Institute of Technology", period:"Jul 2015 – Jun 2019"}
  ],
  certifications: [
    {title:"AWS Certified Solutions Architect – Associate (SAA‑C03)", period:"Aug 2025 – Aug 2028", link:"https://www.credly.com/badges/f4a440de-4a0d-499a-9278-cfc97bc44dd9/public_url"},
    {title:"AWS Certified Cloud Practitioner (CLF‑C02)", period:"Jul 2025 – Jul 2028", link:"https://www.credly.com/badges/b2c32831-a4dc-45ab-b9ed-5dca0969ccb8/public_url"},
    {title:"Oracle SQL Fundamentals (1Z0‑071)"},
    {title:"Oracle WebLogic Middleware Administrator (1Z0‑062)"}
  ],
  projects: [
    {
      name: "Curriculum Management System",
      tags: ["Spring Boot","React","Neo4j","RBAC","Auth"],
      desc: "Full‑stack curriculum app with role‑based access and optimized graph queries (~40% faster retrieval).",
      repo: "https://github.com/Spador/Curriculum-Management-Frontend"
    },
    {
      name: "NYC Crash Data Mining & Visualization",
      tags: ["Python","Folium","K‑means","Data Mining"],
      desc: "Interactive maps and heatmaps surfacing crash hotspots with 50+ charts.",
      repo: "https://github.com/Spador/NYC-Crash-DataMining-Visualization"
    }
  ]
};
