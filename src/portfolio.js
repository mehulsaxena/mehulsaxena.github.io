/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "mehulsaxena",
  title: "Hi, I'm Mehul",
  subTitle: emoji(
    "Senior DevOps & Data Platform Engineer with 7+ years of experience architecting cloud-native infrastructure, automating enterprise data pipelines, and driving large-scale platform modernization across AWS and Azure. I also build production-grade Gen-AI platforms with governed LLM orchestration, embedding pipelines, vector search, and full-stack MLOps lifecycle management. ⚙️☁️🤖"
  ),
  resumeLink: "", // Add your Google Drive resume link here to enable the download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mehulsaxena",
  linkedin: "https://www.linkedin.com/in/mehul-saxena-cloud-engineer/",
  gmail: "mehulsaxenaa@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "SENIOR DEVOPS & DATA PLATFORM ENGINEER — CLOUD INFRASTRUCTURE, PIPELINE AUTOMATION, PLATFORM MODERNIZATION & GEN-AI PLATFORM ENGINEERING",
  skills: [
    emoji(
      "⚡ Architect and automate multi-cloud infrastructure on AWS and Azure using Terraform and CloudFormation — from VPC design to multi-environment IaC frameworks"
    ),
    emoji(
      "⚡ Design and operate production CI/CD pipelines for containerized microservices and Spark-based data workloads across Jenkins, GitHub Actions, GitLab CI, and ArgoCD"
    ),
    emoji(
      "⚡ Build and scale Kubernetes (EKS) and OpenShift clusters for distributed batch processing systems serving millions of daily users"
    ),
    emoji(
      "⚡ Embed DevSecOps controls into every pipeline — integrating Checkov, Snyk, SonarQube, and Nexus for security scanning, artifact governance, and compliance enforcement"
    ),
    emoji(
      "⚡ Automate database migration and lifecycle management for Oracle, PostgreSQL, and Aurora — including schema versioning, release governance, and rollback strategies"
    ),
    emoji(
      "⚡ Build production-grade Gen-AI platforms on AWS Bedrock and Azure AI Studio — LLM orchestration, RAG architectures, embedding pipelines, and vector store integrations across Pinecone, Weaviate, OpenSearch, and FAISS"
    ),
    emoji(
      "⚡ Govern AI security end-to-end: PII detection and masking before embedding, KMS-managed encryption, tenant-level vector namespace isolation, LLM guardrails, and Langfuse-driven model observability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Cloud Platforms
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    // Containers & Orchestration
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "OpenShift",
      fontAwesomeClassname: "fab fa-redhat"
    },
    // CI/CD
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab CI",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    // Infrastructure as Code
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    // Monitoring & Observability
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    // Scripting & Languages
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    // Platform
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    // Gen-AI & LLM
    {
      skillName: "LLM Orchestration",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Vector Search",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Model Observability",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "AI Guardrails",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Disabled — add school name and logo to enable
  schools: [
    {
      schoolName: "University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology – Computer Science",
      duration: "",
      desc: "",
      descBullets: []
    }
  ]
};

// Proficiency Bars

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure & IaC",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD & Pipeline Automation",
      progressPercentage: "88%"
    },
    {
      Stack: "Containers & Orchestration",
      progressPercentage: "82%"
    },
    {
      Stack: "Gen-AI / LLM Platform Engineering",
      progressPercentage: "78%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "92%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Platform / DevOps Engineer",
      company: "Trajector Services",
      companylogo: require("./assets/images/companies/trajector.png"),
      date: "Jan 2026 – Present",
      desc: "Leading DevOps and Gen-AI platform engineering for an enterprise AI Data Platform (AiDC) — governing LLM orchestration, RAG pipelines, vector search, and AI agent infrastructure at production scale.",
      descBullets: [
        "Architected LLM orchestration on AWS Bedrock and Azure AI Studio, integrating Claude, Titan, and GPT-family foundation models into governed AI agent workflows for automated draft creation",
        "Built end-to-end RAG pipelines — embedding generation via Bedrock Titan and Azure OpenAI, vector store integrations across Pinecone, Weaviate, OpenSearch, and FAISS, with prompt versioning and full Langfuse tracing",
        "Implemented Gen-AI observability via Langfuse: prompt performance analytics, token cost governance, hallucination detection tracking, and model feedback loops for continuous tuning",
        "Enforced AI data security: PII detection and masking pre-embedding, KMS-managed encryption (AWS KMS / Azure Key Vault), tenant-level vector namespace isolation, and LLM guardrails for safe model outputs",
        "Drove K8s → AWS ECS migration using Terraform-managed task definitions, improving horizontal scalability and reducing infrastructure costs",
        "Hardened the platform with DevSecOps controls — Checkov, Snyk, and SonarQube enforcing security gates across all infra and application pipelines"
      ]
    },
    {
      role: "Senior DevOps Engineer – AWS Platform Specialist",
      company: "Zooplus SE / Intellias",
      companylogo: require("./assets/images/companies/zooplus.png"),
      date: "May 2025 – Dec 2025",
      desc: "Owned DevOps infrastructure for a retail analytics platform serving 2M+ daily users — driving deployment reliability, cluster stability, and security governance for distributed Spark workloads.",
      descBullets: [
        "Managed EKS clusters running distributed Spark batch jobs, ensuring high availability and throughput for data materialization pipelines consumed by downstream APIs",
        "Standardized all workload rollouts with Helm, eliminating environment drift and improving release consistency across dev, staging, and production",
        "Automated Aurora PostgreSQL provisioning and schema lifecycle management via CI/CD — removing all manual DB release steps",
        "Integrated SonarQube, Snyk, and Nexus for end-to-end security scanning, code quality gates, and artifact governance",
        "Provided L2/L3 production support for Spark job failures and cluster performance degradation, leading RCA and remediation"
      ]
    },
    {
      role: "Senior DevOps Engineer – Cloud Infrastructure",
      company: "Pentair / SourceFuse",
      companylogo: require("./assets/images/companies/pentair.png"),
      date: "Oct 2024 – Apr 2025",
      desc: "Built the IaC foundation from zero for an enterprise cloud and database modernization program — replacing all manual provisioning with automated, secure, and auditable infrastructure workflows.",
      descBullets: [
        "Designed a modular Terraform framework from scratch covering VPC, IAM, RDS (Oracle/PostgreSQL), Aurora, and compute — standardizing multi-environment provisioning across Dev, UAT, and Prod",
        "Established remote state management with environment isolation and state locking, enabling safe concurrent infrastructure operations across teams",
        "Built Terraform CI/CD pipelines with Checkov security scanning and controlled apply workflows — enforcing compliance before any infrastructure change reaches production",
        "Automated Oracle DB deployment pipelines including schema migrations, stored procedures, and SQL governance with Git-based release tagging and rollback strategies",
        "Implemented AWS Security Hub and Amazon Macie for continuous compliance monitoring and sensitive data exposure detection across environments"
      ]
    },
    {
      role: "Senior Software Engineer – Cloud Platform",
      company: "ConsultAdd Inc",
      companylogo: require("./assets/images/companies/consultadd.png"),
      date: "2019 – 2024",
      desc: "Progressed from Python Developer to Cloud Data Engineer over 5 years — building the automation, CI/CD, and cloud infrastructure backbone for enterprise data platforms.",
      descBullets: [
        "Deployed and operated containerized Spark and PySpark jobs on OpenShift clusters, supporting high-volume batch processing pipelines across production environments",
        "Built automated data pipelines using Spark and AWS Glue for large-scale data ingestion and transformation, integrating with downstream materialized datasets and APIs",
        "Migrated legacy systems to AWS containerized environments — building Jenkins CI/CD pipelines and Terraform provisioning from the ground up",
        "Coordinated Oracle schema releases and DB deployments across Dev → UAT → Prod with version-controlled release governance",
        "Provided L2/L3 production support for data pipeline failures and performed systematic RCA for recurring batch job outages"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Key Projects Section

const bigProjects = {
  title: "Key Projects",
  subtitle:
    "ENTERPRISE PLATFORMS, MODERNIZATION PROGRAMS, AND AUTOMATION SYSTEMS I HAVE ARCHITECTED AND DELIVERED",
  projects: [
    {
      image: require("./assets/images/projects/aidc.png"),
      projectName: "AI Draft Creation Platform (AiDC)",
      projectDesc:
        "Problem: AI agents lacked observable, governed infrastructure and a secure Gen-AI data layer. Solution: Built production-grade LLM orchestration on AWS Bedrock and Azure AI Studio, RAG pipelines with Pinecone/Weaviate/OpenSearch/FAISS vector stores, Langfuse observability for prompt tracing and token cost governance, PII masking pre-embedding, and KMS-governed encryption — all deployed on Kubernetes with DevSecOps-hardened CI/CD and Terraform-managed ECS migration. Outcome: Secure, observable, cost-governed Gen-AI platform in production.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/zooplus-platform.png"),
      projectName: "Retail Analytics Platform (2M+ Daily Users)",
      projectDesc:
        "Problem: Growing data workloads with inconsistent deployments and no security governance. Solution: Managed EKS clusters for distributed Spark jobs, introduced Helm-standardized rollouts, automated Aurora PostgreSQL lifecycle, and integrated SonarQube/Snyk pipelines. Outcome: Consistent releases, hardened security posture, and reliable data throughput at scale.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/pentair-modernization.png"),
      projectName: "Cloud & Oracle DB Modernization",
      projectDesc:
        "Problem: All infrastructure provisioned manually with no compliance controls or release governance. Solution: Built a modular Terraform IaC framework from scratch, automated Oracle DB pipelines with Git-based release tagging, implemented AWS Security Hub and Macie for compliance. Outcome: Zero manual provisioning, enforced security compliance, and auditable infrastructure across three environments.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/security-hub.png"),
      projectName: "AWS Security Hub Automation & Vulnerability Management",
      projectDesc:
        "Problem: Security findings across 120+ AWS accounts were untracked and manually remediated. Solution: Automated Security Hub compliance checks and remediation workflows, integrating GuardDuty, Macie, and Inspector into a unified vulnerability dashboard — enforcing CIS benchmarks, IAM hardening, and encryption policies. Outcome: 96% Security Hub score and 70% reduction in open vulnerabilities within 3 months.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/suggestion-api.png"),
      projectName: "Auto Product Suggestion API for E-commerce Search",
      projectDesc:
        "Problem: E-commerce search lacked real-time structured recommendation capabilities. Solution: Built a high-performance Suggestion API with OpenSearch aggregations and five modular builders (Category, Completion, Product, Page, Redirect) handling organic, sponsored, and landing page results — exposed via FastAPI with automated test suites. Outcome: Real-time product, category, and sponsored suggestions powering live e-commerce search at scale.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/rca-engine.png"),
      projectName: "AI-Powered RCA Engine — Bedrock, SageMaker & Hugging Face",
      projectDesc:
        "Problem: Production incident RCA required hours of manual log analysis. Solution: Built an AI-powered RCA engine using AWS Bedrock, Hugging Face Transformers, and SageMaker — automating log and metric ingestion from ELK and CloudWatch into ML anomaly detection pipelines, with Slack/Jira integration delivering human-readable RCA reports and remediation steps automatically. Outcome: MTTR reduced by 45%, manual RCA time cut from hours to minutes.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/cicd-pipeline.png"),
      projectName: "Production-Ready CI/CD Pipeline — Security & DevOps Automation",
      projectDesc:
        "Problem: Teams needed a reusable, enterprise-grade CI/CD reference architecture with built-in security scanning. Solution: Built a 5-stage automated pipeline (Checkout → Lint → Test → Scan → Build → Deploy) using GitHub Actions, Docker, FastAPI, and AWS — integrating SonarCloud, Snyk, Trivy, and Bandit for comprehensive vulnerability coverage. Outcome: Production-ready CI/CD blueprint demonstrating deployment automation patterns used by Fortune 500 companies.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://mehulsaxena.github.io/production-ready-cicd/"
        },
        {
          name: "View Pipeline",
          url: "https://github.com/mehulsaxena/production-ready-cicd/actions"
        }
      ]
    },
    {
      image: require("./assets/images/projects/secure-vendor.png"),
      projectName: "Secure Vendor File Exchange — End-to-End Encryption",
      projectDesc:
        "Problem: Third-party vendors uploading sensitive files posed encryption and compliance risks in transit. Solution: Designed an end-to-end encryption workflow for vendor SSH/SCP uploads to S3 — enforcing IAM-scoped access, public-key encryption on the vendor side, KMS decryption inside AWS, integrity validation, and Lambda-triggered notifications to downstream data teams. Outcome: Eliminated sensitive data exposure risk in transit and strengthened compliance posture.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/infra-automation.png"),
      projectName: "AWS Infrastructure Automation — Terraform & GitLab CI/CD",
      projectDesc:
        "Problem: AWS infrastructure changes lacked automated validation and gated environment promotion. Solution: Built GitLab CI/CD pipelines provisioning Lambda, EventBridge, and Athena resources via Terraform with unit tests and controlled stage promotion. Outcome: Improved deployment reliability and significantly reduced lead time for infrastructure changes.",
      footerLink: []
    },
    {
      image: require("./assets/images/projects/elk-cleanup.png"),
      projectName: "ELK Stack Observability Cleanup & Optimization",
      projectDesc:
        "Problem: Decommissioned services left stale Filebeat, Logstash, and Kibana artifacts consuming compute and obscuring observability signals. Solution: Systematically removed all ELK artifacts tied to retired services using Puppet automation, cleaning Filebeat inputs, Logstash pipelines, and Kibana saved objects. Outcome: Cleaner observability configuration and reduced wasted compute and storage in the ELK cluster.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievements & Certifications Section

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "Industry-recognized certifications validating deep expertise in cloud architecture and platform engineering",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Professional",
      subtitle:
        "Advanced certification validating the ability to design distributed systems and complex, cost-optimized cloud architectures on AWS.",
      image: require("./assets/images/certifications/aws-pro.png"),
      imageAlt: "AWS Certified Solutions Architect Professional Badge",
      footerLink: []
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "Certified expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      image: require("./assets/images/certifications/aws-associate.png"),
      imageAlt: "AWS Certified Solutions Architect Associate Badge",
      footerLink: []
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      subtitle:
        "Certified in Linux system administration, OS management, and Red Hat Enterprise Linux operations — foundation for OpenShift platform work.",
      image: require("./assets/images/certifications/rhcsa.png"),
      imageAlt: "Red Hat Certified System Administrator Badge",
      footerLink: []
    },
    {
      title: "Certified Agile Scrum Master (HRDC)",
      subtitle:
        "Certified in Agile delivery methodologies, sprint planning, and cross-functional team coordination for enterprise software delivery.",
      image: require("./assets/images/certifications/scrum-master.png"),
      imageAlt: "Certified Agile Scrum Master Badge",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section — disabled (no published blogs)

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set true and add blog entries to enable
};

// Talks Section — disabled (no public talks)

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set true and add talk entries to enable
};

// Podcast Section — disabled

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set true and add podcast embed links to enable
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in discussing cloud architecture, platform engineering, or a potential opportunity? My inbox is open.",
  number: "+91-9639715879",
  email_address: "mehulsaxenaa@gmail.com"
};

// Twitter Section — disabled

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
