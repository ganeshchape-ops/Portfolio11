/**
 * Centralized Portfolio Data Configuration
 * Replace the placeholder values below with your real information.
 */

export const portfolioData = {
  // Personal & Header Information
  personal: {
    name: "Ganesh Chape",
    initials: "GC",
    role: "Data Analyst | Python & Power BI Enthusiast",
    tagline: "Turning Raw Data Into Actionable Business Insights",
    location: "Sambhajinagar, Maharashtra",
    email: "ganeshchape69@gmail.com",
    phone: "744745****",
    linkedin: "[YOUR LINKEDIN URL]",
    github: "[YOUR GITHUB URL]",
    resumeUrl: "[YOUR RESUME LINK]",
    availability: "Available for Full-time & Contract Roles",
    status: "Open to Work",
    bioShort: "I transform raw and complex data into clear insights, interactive dashboards, and data-driven business decisions using Python, Pandas, NumPy, Excel, and Power BI.",
    bioLong: "I am an aspiring Data Analyst with a strong interest in discovering insights from data and helping businesses make better decisions. I work with Python, Pandas, NumPy, Excel, and Power BI to clean data, explore trends, build dashboards, and communicate findings in a clear and impactful way. My passion lies at the intersection of statistical analysis, business problem-solving, and visual data storytelling.",
  },

  // Key Achievement Counters (Hero Section)
  stats: [
    { value: "15+", label: "Data Projects Completed", icon: "FolderCheck" },
    { value: "12+", label: "Dashboards Created", icon: "LayoutDashboard" },
    { value: "8+", label: "Tools Mastered", icon: "Wrench" },
    { value: "100%", label: "Business Problem Focused", icon: "TrendingUp" }
  ],

  // Animated Roles for Typing / Carousel
  animatedRoles: [
    "Data Analyst",
    "Python Enthusiast",
    "Power BI Dashboard Developer",
    "Turning Raw Data Into Useful Insights",
    "Business Problem Solver"
  ],

  // About Me Highlights & Approach
  aboutCards: [
    {
      title: "Education",
      icon: "GraduationCap",
      subtitle: "[Your Degree Name]",
      detail: "[College or University Name], [Graduation Year]",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Career Goal",
      icon: "Target",
      subtitle: "Data-Driven Decision Making",
      detail: "Empowering business leaders through reliable predictive & diagnostic analytics.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Location & Relocation",
      icon: "MapPin",
      subtitle: "Sambhajinagar, Maharashtra",
      detail: "Open to remote, hybrid, or on-site opportunities worldwide.",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Availability",
      icon: "CheckCircle2",
      subtitle: "Immediate Joiner",
      detail: "Ready to contribute to impactful data teams and high-growth projects.",
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ],

  // 4-Step Data Analysis Process
  approachSteps: [
    {
      step: "01",
      title: "Understand the Business Question",
      description: "Define core business objectives, identify stakeholders, specify success metrics (KPIs), and frame the analytics problem.",
      icon: "HelpCircle",
      color: "border-purple-500 text-purple-400 bg-purple-500/10"
    },
    {
      step: "02",
      title: "Collect & Clean the Data",
      description: "Extract raw datasets, handle missing values, eliminate duplicates, standardize formats, and validate data integrity using Python & Power Query.",
      icon: "Filter",
      color: "border-indigo-500 text-indigo-400 bg-indigo-500/10"
    },
    {
      step: "03",
      title: "Analyze Patterns & Trends",
      description: "Conduct Exploratory Data Analysis (EDA), perform statistical analysis, uncover correlation, and segment data to discover actionable anomalies.",
      icon: "LineChart",
      color: "border-blue-500 text-blue-400 bg-blue-500/10"
    },
    {
      step: "04",
      title: "Visualize & Recommend Actions",
      description: "Build interactive dashboards in Power BI, craft visual data stories, and present concrete data-backed recommendations to stakeholders.",
      icon: "Lightbulb",
      color: "border-cyan-500 text-cyan-400 bg-cyan-500/10"
    }
  ],

  // Skills & Technologies (Categorized with honest proficiency badges)
  skillCategories: [
    {
      id: "all",
      name: "All Skills"
    },
    {
      id: "analysis",
      name: "Data Analysis"
    },
    {
      id: "programming",
      name: "Programming & Tools"
    },
    {
      id: "visualization",
      name: "Visualization & BI"
    },
    {
      id: "web",
      name: "Web & Design"
    }
  ],

  skills: [
    // Category: Data Analysis
    {
      name: "Data Cleaning",
      category: "analysis",
      level: "Advanced",
      levelColor: "emerald",
      icon: "Sparkles",
      description: "Handling nulls, outlier detection, deduplication, type casting, text parsing in Python & Excel."
    },
    {
      name: "Exploratory Data Analysis",
      category: "analysis",
      level: "Advanced",
      levelColor: "emerald",
      icon: "Compass",
      description: "Uncovering distributions, correlation analysis, multivariate relationships, and anomaly detection."
    },
    {
      name: "Data Transformation",
      category: "analysis",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Shuffle",
      description: "Feature engineering, data restructuring, aggregations, pivoting, and unpivoting workflows."
    },
    {
      name: "Statistical Analysis",
      category: "analysis",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Sigma",
      description: "Descriptive statistics, hypothesis testing concepts, probability distributions, variance analysis."
    },
    {
      name: "Business Insights",
      category: "analysis",
      level: "Advanced",
      levelColor: "emerald",
      icon: "TrendingUp",
      description: "Translating complex analytical findings into executive summaries and actionable growth drivers."
    },

    // Category: Programming & Tools
    {
      name: "Python",
      category: "programming",
      level: "Advanced",
      levelColor: "emerald",
      icon: "Code2",
      description: "Writing clean, efficient analytical scripts, custom functions, automation, and data pipelines."
    },
    {
      name: "Pandas",
      category: "programming",
      level: "Advanced",
      levelColor: "emerald",
      icon: "Table",
      description: "DataFrames manipulation, multi-indexing, merging/joining datasets, datetime operations."
    },
    {
      name: "NumPy",
      category: "programming",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Cpu",
      description: "Vectorized numerical computations, array operations, mathematical transformations, indexing."
    },
    {
      name: "Jupyter Notebook",
      category: "programming",
      level: "Advanced",
      levelColor: "emerald",
      icon: "BookOpen",
      description: "Documenting interactive data science workflows, visual step-by-step reproducibility, Markdown."
    },
    {
      name: "Basic SQL",
      category: "programming",
      level: "Working Knowledge",
      levelColor: "purple",
      icon: "Database",
      description: "Querying relational databases, SELECT, WHERE, JOINs, GROUP BY, aggregations, and subqueries."
    },

    // Category: Visualization and Reporting
    {
      name: "Power BI",
      category: "visualization",
      level: "Advanced",
      levelColor: "emerald",
      icon: "BarChart3",
      description: "Building interactive data models, Star Schema design, custom DAX measures, dynamic drill-throughs."
    },
    {
      name: "Microsoft Excel",
      category: "visualization",
      level: "Advanced",
      levelColor: "emerald",
      icon: "FileSpreadsheet",
      description: "Advanced XLOOKUP/INDEX-MATCH, complex nested formulas, PivotTables, Power Query & charts."
    },
    {
      name: "Interactive Dashboards",
      category: "visualization",
      level: "Advanced",
      levelColor: "emerald",
      icon: "LayoutDashboard",
      description: "Designing user-centric, responsive dashboards with dynamic filters, cross-highlighting, KPI cards."
    },
    {
      name: "KPI Reporting",
      category: "visualization",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Activity",
      description: "Establishing tracking frameworks for revenue, customer retention, operational velocity, and HR metrics."
    },
    {
      name: "Data Storytelling",
      category: "visualization",
      level: "Advanced",
      levelColor: "emerald",
      icon: "Presentation",
      description: "Structuring narrative presentations that bridge the gap between technical data and executive action."
    },

    // Category: Web Technologies
    {
      name: "HTML5",
      category: "web",
      level: "Intermediate",
      levelColor: "blue",
      icon: "FileCode",
      description: "Semantic page structure, accessibility tags, responsive layout foundation."
    },
    {
      name: "CSS3 & Tailwind",
      category: "web",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Palette",
      description: "Modern CSS Grid, Flexbox, glassmorphism, responsive styling, dark theme customization."
    },
    {
      name: "Responsive Web Design",
      category: "web",
      level: "Intermediate",
      levelColor: "blue",
      icon: "Smartphone",
      description: "Creating accessible, seamless experiences across mobile, tablet, and widescreen monitors."
    },
    {
      name: "Portfolio UI Design",
      category: "web",
      level: "Working Knowledge",
      levelColor: "purple",
      icon: "Monitor",
      description: "Clean aesthetic layouts, UI wireframing, component-driven dashboard visual mockups."
    }
  ],

  // Services Offered ("What I Can Help With")
  services: [
    {
      id: "data-cleaning",
      title: "Data Cleaning & Preparation",
      description: "Organizing, cleaning, and preparing raw messy data for accurate analysis and trustworthy reporting.",
      icon: "Sparkles",
      deliverables: [
        "Handling missing values & anomalous records",
        "Standardizing date/time & categorical fields",
        "Deduplicating & validating raw datasets",
        "Automating cleaning workflows with Python"
      ]
    },
    {
      id: "eda",
      title: "Exploratory Data Analysis",
      description: "Finding patterns, trends, outliers, and useful insights from complex datasets to guide decisions.",
      icon: "Search",
      deliverables: [
        "Uncovering statistical distributions & correlations",
        "Cohort & segmentation analysis",
        "Identifying revenue drivers & bottleneck areas",
        "Comprehensive exploratory report summary"
      ]
    },
    {
      id: "power-bi",
      title: "Power BI Dashboards",
      description: "Creating clear, interactive dashboards for tracking executive KPIs and ongoing business performance.",
      icon: "LayoutDashboard",
      deliverables: [
        "Interactive cross-filtering & drill-through pages",
        "Custom DAX calculations & calculated columns",
        "Automated scheduled data refresh setups",
        "Executive-ready summary presentation cards"
      ]
    },
    {
      id: "excel-analysis",
      title: "Excel Analysis & Modeling",
      description: "Using Excel formulas, PivotTables, charts, and automated reports to analyze business data efficiently.",
      icon: "FileSpreadsheet",
      deliverables: [
        "Dynamic PivotTables and Power Query models",
        "Advanced formula architecture (INDEX/MATCH, XLOOKUP)",
        "Financial & operational KPI tracker templates",
        "Automated macro-friendly spreadsheet reports"
      ]
    },
    {
      id: "python-analysis",
      title: "Python Data Analysis",
      description: "Using Python, Pandas, and NumPy to analyze large datasets efficiently with reproducible code.",
      icon: "Terminal",
      deliverables: [
        "Scripted end-to-end data processing pipelines",
        "Custom aggregation & statistical scripts",
        "Exportable CSV/Excel report generation",
        "Jupyter Notebooks with clear markdown commentary"
      ]
    },
    {
      id: "data-visualization",
      title: "Data Visualization & Storytelling",
      description: "Transforming dry numbers into easy-to-understand charts, reports, and compelling visual stories.",
      icon: "BarChart4",
      deliverables: [
        "Custom charts tailored to executive audiences",
        "Color-coded anomaly & performance indicators",
        "Slide deck-ready visual exports",
        "Data-backed strategic recommendations"
      ]
    }
  ],

  // Featured Projects (Realistic data analytics placeholders)
  projects: [
    {
      id: "sales-performance-dashboard",
      title: "Sales Performance Dashboard",
      category: "Power BI",
      tools: ["Power BI", "Excel", "DAX", "Power Query"],
      summary: "Designed an interactive Power BI dashboard to analyze sales performance, monthly revenue, product categories, regional trends, and key performance indicators.",
      insights: [
        "Identified 18% YoY revenue surge concentrated in Q3 electronics category",
        "Uncovered regional profit margin disparities across 4 main sales territories",
        "Engineered dynamic DAX measures for real-time target vs. actual variance",
        "Streamlined executive monthly reporting cycle by [Add your real result]"
      ],
      metrics: [
        { label: "Analyzed Records", value: "125K+" },
        { label: "Target Variance", value: "+14.2%" },
        { label: "Regional Zones", value: "4 Regions" },
        { label: "Refresh Cadence", value: "Weekly" }
      ],
      caseStudy: {
        problem: "The sales leadership team lacked unified visibility into regional revenue drivers, product profitability, and monthly target attainment, leading to delayed strategic inventory decisions.",
        data: "Consolidated multi-year transactional sales dataset containing 125,000+ transaction rows, product catalog hierarchies, customer tiers, and regional target spreadsheets.",
        analysis: "Built a Star Schema relational data model in Power BI using Power Query. Created custom DAX metrics for Cumulative Sales, YoY Growth %, and Moving Averages to evaluate seasonality.",
        insights: "West region delivered highest gross revenue ($1.4M) but showed declining margin due to excessive discounting. Core enterprise tier accounted for 64% of total profit margins.",
        recommendation: "Rebalance regional discount thresholds to cap margins at 15%, prioritize high-margin category B bundles, and automate weekly alert triggers for lagging regions.",
        result: "Delivered a centralized dashboard adopted by sales management, reducing manual reporting turnaround time by [Add your real result] and clarifying revenue bottlenecks.",
        challenges: "Resolving mismatched date formatting across disparate regional CRM exports and optimizing DAX measure performance for instant visual cross-filtering."
      },
      githubUrl: "[YOUR GITHUB URL]",
      liveUrl: "[YOUR LIVE DEMO / POWER BI URL]"
    },
    {
      id: "customer-churn-analysis",
      title: "Customer Churn Analysis",
      category: "Python",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      summary: "Analyzed customer transaction and engagement data to identify churn patterns, customer behavioral segments, and key risk factors affecting retention.",
      insights: [
        "Discovered customers with month-to-month contracts had a 3.2x higher churn rate",
        "Identified key tenure inflection point at month 6 with highest churn probability",
        "Segmented customer cohorts based on support ticket frequency and payment method",
        "Formulated data-driven retention roadmap estimated to reduce churn by [Add your real result]"
      ],
      metrics: [
        { label: "Customer Sample", value: "7,043 Rows" },
        { label: "Identified Risk Cohort", value: "28.5%" },
        { label: "Key Churn Trigger", value: "Tenure < 6 Mo" },
        { label: "Feature Correl.", value: "0.42 Contract Type" }
      ],
      caseStudy: {
        problem: "Subscription business experienced an increasing churn rate with no clear visibility into which customer segments were leaving or which service friction points drove cancellations.",
        data: "Dataset of 7,000+ customer accounts including demographic attributes, service subscriptions, monthly charges, total spend, contract tenure, and churn status.",
        analysis: "Cleaned raw records using Pandas, imputed missing total charges, normalized continuous variables, and performed bivariate exploratory analysis with Seaborn correlation heatmaps.",
        insights: "Month-to-month contract holders exhibited 42% churn versus 11% for 1-year and 3% for 2-year contracts. High electronic check users had significantly elevated churn rates compared to automated credit card billing.",
        recommendation: "Introduce incentivized onboarding discounts for 12-month contract commitments, offer proactive support outreach after 2 customer tickets, and streamline automated payment methods.",
        result: "Provided leadership with a prioritized risk matrix and actionable retention playbook to protect annual recurring revenue [Add your real result].",
        challenges: "Handling class imbalance in churn labels and engineering meaningful tenure binning features to isolate early-stage customer friction."
      },
      githubUrl: "[YOUR GITHUB URL]",
      liveUrl: "[YOUR LIVE DEMO / NOTEBOOK URL]"
    },
    {
      id: "ecommerce-sales-analysis",
      title: "E-Commerce Sales & Profit Analysis",
      category: "Python",
      tools: ["Python", "Excel", "Power BI", "Pandas", "Plotly"],
      summary: "Analyzed e-commerce transaction data to understand sales trends, product category performance, customer purchase patterns, and margin optimization opportunities.",
      insights: [
        "Evaluated 50,000+ order lines across multiple product categories and sub-categories",
        "Identified top 20% products generating 76% of cumulative operating profit (Pareto principle)",
        "Uncovered shipping delay correlations with return rates across express vs standard logistics",
        "Built automated profit margin matrix highlighting loss-making SKU variants"
      ],
      metrics: [
        { label: "Orders Analyzed", value: "50,000+" },
        { label: "Pareto Ratio", value: "80 / 20" },
        { label: "Top Category", value: "Tech & Office" },
        { label: "Profit Insight", value: "[Add your result]" }
      ],
      caseStudy: {
        problem: "An e-commerce retailer faced rising logistics costs and stagnant net margins despite overall revenue growth, requiring granular profitability analysis by SKU and region.",
        data: "Transactional database of 50,000+ orders comprising order dates, ship modes, discount rates, product taxonomy, sales revenue, and profit margins.",
        analysis: "Conducted exploratory analysis in Python, calculated product-level unit economics, generated dynamic discount sensitivity matrices, and integrated findings into a Power BI summary report.",
        insights: "Certain office furniture sub-categories had high return rates (14%) combined with steep shipping subsidies, dragging net margins negative in specific regional zip codes.",
        recommendation: "Eliminate deep discounts (>25%) on heavy freight SKUs, renegotiate regional shipping tier contracts, and bundle high-margin accessories with top-selling electronics.",
        result: "Identified unprofitable product lines and presented optimization recommendations to improve bottom-line margin by [Add your real result].",
        challenges: "Reconciling multi-currency transactions and dealing with sparse product categorization data through automated regex mapping."
      },
      githubUrl: "[YOUR GITHUB URL]",
      liveUrl: "[YOUR LIVE DEMO / DASHBOARD URL]"
    },
    {
      id: "hr-analytics-dashboard",
      title: "HR Analytics & Workforce Dashboard",
      category: "Power BI",
      tools: ["Power BI", "Excel", "DAX", "Data Modeling"],
      summary: "Built an HR dashboard to analyze employee attrition, department performance, salary trends, workforce demographics, and job satisfaction indicators.",
      insights: [
        "Visualized attrition trends across 1,400+ employees segmented by role, department, and tenure",
        "Identified highest turnover in entry-level sales roles with overtime exceeding 15 hrs/week",
        "Mapped salary parity distributions across departments to ensure competitive compensation",
        "Provided HR leadership with interactive workforce planning & retention simulator"
      ],
      metrics: [
        { label: "Workforce Size", value: "1,470 Staff" },
        { label: "Baseline Attrition", value: "16.1%" },
        { label: "Key Factor", value: "Work-Life Balance" },
        { label: "Dept Breakdown", value: "6 Depts" }
      ],
      caseStudy: {
        problem: "Human Resources executives experienced unexpected employee turnover in critical business units without data-backed understanding of root causes or predictive warning signs.",
        data: "Anonymized employee demographic and performance survey records including age, tenure, job level, salary band, distance from home, satisfaction scores, and exit status.",
        analysis: "Built clean data pipelines in Excel & Power BI, created custom DAX KPIs for Attrition Rate, Average Tenure, and Compensation Index, and designed intuitive visual cards.",
        insights: "Employees rating work-life balance as 'Low' who regularly logged overtime were 3.8x more likely to leave within 18 months. Retention stabilized significantly past the 3-year milestone.",
        recommendation: "Institute workload balancing protocols for high-overtime departments, introduce structured 1-on-1 mentorship during the first 12 months, and adjust compensation bands for lagging roles.",
        result: "Delivered an interactive HR monitoring tool enabling proactive retention interventions for at-risk departments [Add your real result].",
        challenges: "Normalizing subjective survey rating scales and presenting sensitive workforce metrics in a clear, executive-friendly visualization framework."
      },
      githubUrl: "[YOUR GITHUB URL]",
      liveUrl: "[YOUR LIVE DEMO / POWER BI URL]"
    }
  ],

  // Experience & Education Journey Timeline
  journey: [
    {
      type: "experience",
      period: "[YEAR–YEAR]",
      role: "Data Analyst Intern / Freelance Data Analyst",
      organization: "[Company / Organization / Freelance Client Name]",
      location: "[Location / Remote]",
      highlights: [
        "Cleaned and transformed complex datasets using Python (Pandas) and Excel Power Query.",
        "Built interactive Power BI dashboards tracking core operational and commercial KPIs.",
        "Synthesized findings into executive slide decks with data-driven strategic recommendations."
      ],
      skills: ["Python", "Power BI", "Excel", "Data Cleaning", "Data Storytelling"]
    },
    {
      type: "education",
      period: "[YEAR–YEAR]",
      role: "[Your Degree Name e.g. B.S. in Computer Science / Statistics / Business]",
      organization: "[College or University Name]",
      location: "[City, Country]",
      highlights: [
        "Focused coursework in Statistical Analysis, Database Management, and Quantitative Methods.",
        "Led academic data analysis projects utilizing Python, statistical modeling, and data visualization.",
        "Participated in data hackathons and analytical problem-solving competitions."
      ],
      skills: ["Statistics", "Data Structures", "Analytical Research", "Mathematics"]
    },
    {
      type: "certification",
      period: "[YEAR]",
      role: "Python for Data Analysis & Visualization",
      organization: "[Certifying Platform / Academy e.g. Coursera / DataCamp]",
      location: "Online Verified",
      highlights: [
        "Mastered data manipulation with Pandas & NumPy, data exploration, and visualization libraries.",
        "Completed hands-on capstone project analyzing real-world customer and financial datasets."
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      type: "certification",
      period: "[YEAR]",
      role: "Microsoft Power BI Data Analyst",
      organization: "[Certifying Organization e.g. Microsoft / Coursera]",
      location: "Online Verified",
      highlights: [
        "Mastered Star Schema data modeling, advanced DAX expressions, and interactive report development.",
        "Implemented row-level security, scheduled refreshes, and enterprise dashboard distribution."
      ],
      skills: ["Power BI", "DAX", "Data Modeling", "Power Query"]
    }
  ],

  // Certifications & Learning
  certifications: [
    {
      title: "Python for Data Analysis",
      issuer: "Coursera / DataCamp / Udemy",
      date: "[YEAR / Completed]",
      credentialId: "[CREDENTIAL ID OR LINK]",
      icon: "Code2",
      badgeText: "Verified Skill",
      description: "Data manipulation, NumPy arrays, Pandas DataFrames, and exploratory data analysis."
    },
    {
      title: "Power BI Data Analyst",
      issuer: "Microsoft / Coursera",
      date: "[YEAR / Completed]",
      credentialId: "[CREDENTIAL ID OR LINK]",
      icon: "BarChart3",
      badgeText: "Professional Certificate",
      description: "DAX calculations, Star Schema modeling, interactive reporting, and KPI monitoring."
    },
    {
      title: "Microsoft Excel for Data Analysis",
      issuer: "Coursera / Macquarie University",
      date: "[YEAR / Completed]",
      credentialId: "[CREDENTIAL ID OR LINK]",
      icon: "FileSpreadsheet",
      badgeText: "Specialization",
      description: "Advanced formulas, PivotTables, Power Query data transformation, and business modeling."
    },
    {
      title: "Data Analytics Fundamentals",
      issuer: "Google / IBM / Meta",
      date: "[YEAR / Completed]",
      credentialId: "[CREDENTIAL ID OR LINK]",
      icon: "Database",
      badgeText: "Foundational",
      description: "Data lifecycle, statistical thinking, problem framing, and executive communication."
    },
    {
      title: "HTML5 & CSS3 Web Fundamentals",
      issuer: "freeCodeCamp / Coursera",
      date: "[YEAR / Completed]",
      credentialId: "[CREDENTIAL ID OR LINK]",
      icon: "Globe",
      badgeText: "Web Tech",
      description: "Semantic HTML structure, modern CSS layouts, responsive design, and UI styling."
    }
  ]
};
