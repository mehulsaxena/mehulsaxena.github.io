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
  subTitle:
    "Senior AI & MLOps Engineer with 7+ years of experience building production-grade ML and AI systems across AWS and Azure. Specialized in SageMaker pipelines, LLM orchestration, RAG architectures, and enterprise Gen-AI platforms — bridging Data Science and production infrastructure at scale. 🤖☁️⚙️",
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
    "SENIOR AI & MLOPS ENGINEER — ML PIPELINES, LLM ORCHESTRATION, RAG SYSTEMS & MULTI-CLOUD AI PLATFORM ENGINEERING",
  skills: [
    emoji(
      "⚡ Design and operate production ML pipelines on AWS SageMaker — model training, hyperparameter tuning, experiment tracking, model registry, CI/CD for ML, and EKS/ECS-based inference at scale"
    ),
    emoji(
      "⚡ Build enterprise LLM orchestration on AWS Bedrock and Azure OpenAI — RAG pipelines, prompt engineering, fine-tuning workflows, and structured model orchestration with Pydantic AI"
    ),
    emoji(
      "⚡ Govern the full AI model lifecycle — drift detection, feature validation, batch retraining automation, and real-time Langfuse observability for token monitoring and response quality evaluation"
    ),
    emoji(
      "⚡ Architect multi-cloud AI infrastructure on AWS and Azure using modular Terraform — EKS/ECS inference clusters, SageMaker environments, and CI/CD for AI workloads via GitHub Actions"
    ),
    emoji(
      "⚡ Enforce AI data security end-to-end — PII masking pre-embedding, KMS encryption, tenant-level vector namespace isolation, and LLM guardrails across production Gen-AI deployments"
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
    // MLOps & AI
    {
      skillName: "SageMaker / MLOps",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LLM Orchestration",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "RAG / Vector Search",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Model Observability",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "AI Guardrails",
      fontAwesomeClassname: "fas fa-shield-alt"
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
    // CI/CD & IaC
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    // Monitoring
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    // Languages & Platform
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
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
      Stack: "Python & Data Engineering",
      progressPercentage: "92%"
    },
    {
      Stack: "ML Pipelines & MLOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Multi-Cloud Infrastructure & IaC",
      progressPercentage: "88%"
    },
    {
      Stack: "LLM / Gen-AI Platform Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "CI/CD & DevOps Automation",
      progressPercentage: "82%"
    },
    {
      Stack: "AI Observability & Monitoring",
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
      role: "Senior Software Engineer – Platform AI/MLOps",
      company: "Sauce Labs",
      companylogo: require("./assets/images/companies/saucelabs.png"),
      date: "Mar 2026 – Present",
      desc: "Engineering platform capabilities for AI/MLOps at Sauce Labs — building the infrastructure, tooling, and automation that let AI-driven features ship reliably to production.",
      descBullets: [
        "Building and operating platform infrastructure for AI/ML workloads, covering deployment, scaling, and lifecycle management of model-backed services",
        "Developing CI/CD automation and infrastructure-as-code for AI services to keep environments reproducible and releases low-risk",
        "Implementing observability for LLM and ML systems — tracing, evaluation, and cost/latency monitoring across production workloads",
        "Collaborating with product and ML teams to turn AI prototypes into supported, production-grade platform services"
      ]
    },
    {
      role: "Senior MLOps Engineer",
      company: "Trajector Services",
      companylogo: require("./assets/images/companies/trajector.png"),
      date: "Jan 2026 – Mar 2026",
      desc: "Designing and operating enterprise LLM orchestration frameworks supporting the AI Draft Service (AiDC) — leading migration to structured, scalable AI pipelines with full-stack LLM observability in production.",
      descBullets: [
        "Led migration from Azure-based LLM pipelines to structured orchestration using Pydantic AI, improving scalability, type safety, and model governance across enterprise AI workflows",
        "Implemented Langfuse-based LLM observability stack — prompt tracing, latency tracking, token consumption monitoring, and response quality evaluation in real time",
        "Designed and operated multi-cloud AI workloads spanning AWS (EKS, S3) and Azure OpenAI, ensuring high availability and consistent model performance across environments",
        "Led Terraform-based multi-cloud infrastructure restructuring for AI services, standardizing provisioning and reducing configuration drift across AWS and Azure",
        "Drove Kubernetes → ECS migration for inference workloads, improving horizontal scalability and reducing operational overhead"
      ]
    },
    {
      role: "Senior MLOps / Platform Engineer",
      company: "Zooplus SE / Intellias",
      companylogo: require("./assets/images/companies/zooplus.png"),
      date: "May 2025 – Dec 2025",
      desc: "Designed and operated a customer personalization ranking system for 2M+ daily users — owning the full ML lifecycle from feature engineering to production inference and real-time observability.",
      descBullets: [
        "Built feature materialization pipelines generating customer behavior signals (clickstream, purchase history, category affinity) used for model training and near real-time personalization ranking",
        "Implemented SageMaker-based ML workflows covering model training, hyperparameter tuning, versioning, and endpoint deployment — with automated batch retraining pipelines to keep personalization signals fresh",
        "Developed Suggest APIs exposing ranked product recommendations via scalable EKS-based inference services, handling 2M+ daily user interactions across web and mobile platforms",
        "Integrated LLM-assisted personalization using AWS Bedrock for contextual product suggestions and intelligent ranking enrichment",
        "Built model monitoring for data drift, feature distribution shifts, and recommendation quality degradation — with Langfuse, Prometheus, and Grafana providing end-to-end observability",
        "Automated multi-environment infrastructure provisioning using modular Terraform (EKS, IAM, S3, SageMaker) for fully reproducible deployments"
      ]
    },
    {
      role: "Senior CloudOps Engineer",
      company: "Pentair / SourceFuse",
      companylogo: require("./assets/images/companies/pentair.png"),
      date: "Oct 2024 – Apr 2025",
      desc: "Supported cloud infrastructure and AI platform initiatives — including an AWS Bedrock-powered RCA POC — while building compliance automation, monitoring dashboards, and cloud governance tooling.",
      descBullets: [
        "Supported AI-enabled Root Cause Analysis (RCA) POC leveraging AWS Bedrock to automate incident analysis and reduce manual investigation time",
        "Built AWS Security Hub compliance automation frameworks monitoring security posture across cloud environments with alerting and remediation workflows",
        "Designed AWS service outage dashboards with automated alerting for proactive incident detection and SLA protection",
        "Deployed configuration management and change-set automation for controlled, auditable infrastructure updates",
        "Contributed to governance, audit readiness, and cloud security posture improvements aligned with enterprise compliance standards"
      ]
    },
    {
      role: "Senior Software Engineer – Cloud, Data & ML Platforms",
      company: "ConsultAdd Inc",
      companylogo: require("./assets/images/companies/consultadd.png"),
      date: "2019 – 2024",
      desc: "Progressed from Python developer to ML platform engineer over 5 years — building data processing pipelines, ML workflows, and cloud infrastructure across healthcare and telecom domains.",
      descBullets: [
        "Led development of Python-based data processing and predictive analytics pipelines using pandas, NumPy, and scikit-learn across healthcare and telecom domains",
        "Designed batch and near real-time data pipelines on AWS (S3, Lambda, RDS, Glue) and Apache Spark for large-scale structured and semi-structured data processing",
        "Implemented data preprocessing, feature engineering, and model evaluation workflows — bridging Data Science teams and production infrastructure",
        "Automated infrastructure provisioning using Terraform and CI/CD pipelines (Jenkins/GitHub Actions), deploying containerized workloads on ECS/EKS with CloudWatch and ELK monitoring",
        "Contributed to IAM policy structuring, encryption standards, and audit logging to meet enterprise healthcare data compliance requirements"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
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
      projectName:
        "Production-Ready CI/CD Pipeline — Security & DevOps Automation",
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
  number: "",
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
