# 📊 Premium Data Analyst Portfolio Web Application

A modern, responsive, high-end personal portfolio web application built specifically for **Data Analysts**, featuring a bold dark technology aesthetic (deep obsidian/navy `#0B0F19` background, glowing purple-to-blue gradients, glassmorphism cards, interactive live dashboard widgets, realistic data case studies, and smooth animations).

---

## ✨ Features & Sections Included

1. **Sticky Glass Navigation Bar**:
   - Monogram logo badge with glowing gradient ring (`[YOUR INITIALS]` + `[YOUR NAME]`).
   - Smooth navigation anchor links (`Home`, `About`, `Skills`, `Services`, `Projects`, `Experience`, `Contact`).
   - Dark/Light mode toggle with persistent state.
   - Direct Resume Download CTA.
   - Accessible mobile hamburger navigation drawer.
   - Dynamic glassmorphism blur effect on scroll.

2. **Hero Section & Interactive Analytics Widget**:
   - Status badge (`🟢 Open to Work / Available for Opportunities`).
   - Animated typewriter roles cycling between *Data Analyst*, *Python Enthusiast*, *Power BI Dashboard Developer*, *Turning Raw Data Into Useful Insights*.
   - Value statement and 3 high-contrast action CTAs.
   - **Interactive Live Analytics Visual Widget**:
     - 3D gradient sphere with ambient particle glow.
     - Live interactive KPI switcher (*Revenue & Gross Profit Chart*, *Customer Churn Risk Segmentation*, *Python Pandas Data Processing Pipeline*).
   - Quick achievement counters (`15+ Data Projects`, `12+ Dashboards Created`, `8+ Tools Mastered`, `100% Business Problem Focused`).

3. **About Me Section & 4-Step Analytics Methodology**:
   - Professional data storytelling bio and analytics philosophy.
   - 4 quick-insight cards (*Education*, *Career Goal*, *Location & Relocation*, *Availability*).
   - **"My Approach" 4-step framework**:
     1. *Understand the business question*
     2. *Collect and clean the data*
     3. *Analyze patterns and trends*
     4. *Visualize insights and recommend actions*

4. **Skills & Technologies Section**:
   - Categorized filter tabs (*All*, *Data Analysis*, *Programming & Tools*, *Visualization & BI*, *Web & Design*).
   - Honest proficiency tags (*Advanced*, *Intermediate*, *Working Knowledge*).
   - Detailed breakdown covering Python, Pandas, NumPy, Excel, Power BI, DAX, SQL, EDA, and Data Storytelling.

5. **Services Section ("What I Can Help With")**:
   - 6 structured service cards with gradient borders, deliverables, and icons:
     1. Data Cleaning & Preparation
     2. Exploratory Data Analysis (EDA)
     3. Power BI Dashboards
     4. Excel Analysis & Modeling
     5. Python Data Analysis
     6. Data Visualization & Storytelling

6. **Featured Projects & In-Depth Case Study Modal**:
   - 4 realistic data analytics projects:
     1. **Sales Performance Dashboard** (Power BI, Excel, DAX)
     2. **Customer Churn Analysis** (Python, Pandas, NumPy, Matplotlib)
     3. **E-Commerce Sales & Profit Analysis** (Python, Excel, Power BI)
     4. **HR Analytics & Workforce Dashboard** (Power BI, Excel, DAX)
   - Interactive category filtering (*All*, *Power BI*, *Python*).
   - **Comprehensive Case Study Modal** following the proven framework:
     `Problem` → `Data` → `Analysis` → `Insights` → `Recommendation` → `Result`
   - Keyboard accessible (Escape to close, scroll-locked background, outside-click close).

7. **Experience & Education ("My Journey")**:
   - Modern glowing vertical timeline with year period labels, role highlights, and skill tags.

8. **Certifications & Learning**:
   - Verified credential cards with issuing badges, completion dates, and credential links.

9. **Contact Section**:
   - Direct communication channels (Email, Phone, Location, LinkedIn, GitHub, Resume).
   - Fully interactive and validated contact form with error handling, loading state, and accessible success toast notification.

10. **Footer & SEO**:
    - Copyright notice: `© 2026 [YOUR NAME]. Built with Python mindset and modern web technologies.`
    - OpenGraph metadata, Twitter Card tags, and Schema.org JSON-LD Person structured data.

---

## 📁 Project Folder Structure

```
d:/plotf/
├── index.html                   # Standalone, zero-setup production HTML & SEO configuration
├── styles.css                   # Custom glassmorphism, glow utilities & animations
├── package.json                 # Standard npm package configuration
├── tailwind.config.js           # Tailwind CSS configuration with brand colors & extensions
├── vite.config.js               # Vite build configuration
├── src/
│   ├── main.jsx                 # Vite React application entry point
│   ├── App.jsx                  # Main App root component
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glass header & navigation
│   │   ├── Hero.jsx             # Hero section with animated typewriter text
│   │   ├── DashboardWidget.jsx  # Interactive live analytics widget
│   │   ├── About.jsx            # About me bio & 4-step methodology
│   │   ├── Skills.jsx           # Filterable technical toolkit cards
│   │   ├── Services.jsx         # 6 analytics service cards
│   │   ├── Projects.jsx         # Featured data projects & category filters
│   │   ├── CaseStudyModal.jsx   # In-depth Case Study modal
│   │   ├── Journey.jsx          # Glowing vertical journey timeline
│   │   ├── Certifications.jsx   # Verified certificate cards
│   │   ├── Contact.jsx          # Validated contact form & direct cards
│   │   └── Footer.jsx           # Footer with quick links & back-to-top button
│   └── data/
│       └── portfolioData.js     # Single central data file for easy customization
└── README.md                    # Project guide & deployment manual
```

---

## 🛠️ Quick Start & Customization

### Option 1: Instant Local Preview (Zero Installation Required)
You can run the portfolio right away using Python's built-in web server:

```bash
# In the project directory (d:/plotf)
python -m http.server 3000
```
Open your browser and navigate to: **`http://localhost:3000`**

### Option 2: Standard Node.js / Vite Development
If you have Node.js and npm installed:

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build production bundle
npm run build
```

---

## ✏️ How to Personalize Your Information

All personal details, project metrics, and links are centralized in:
- **`src/data/portfolioData.js`** (for Vite/React build)
- **`index.html`** (in the `<script type="text/babel">` block for direct browser hosting)

Simply replace the following placeholders:
- `[YOUR NAME]`: Your full name
- `[YOUR INITIALS]`: 2-letter monogram initials (e.g., "DA" or "JD")
- `[YOUR CITY, COUNTRY]`: Your location
- `[YOUR EMAIL]`: Your primary contact email
- `[YOUR PHONE]`: Your contact number
- `[YOUR LINKEDIN URL]`: Your LinkedIn profile URL
- `[YOUR GITHUB URL]`: Your GitHub profile URL
- `[YOUR RESUME LINK]`: Link to your hosted PDF resume (e.g. Google Drive, GitHub Releases)
- `[Add your real result]`: Your actual metric improvements or business results in project case studies

---

## 🚀 1-Click Deployment Instructions

### 1. Deploying to Vercel
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset: **Vite** (or **Other** if deploying static `index.html`).
5. Click **Deploy**. Vercel will automatically build and assign a custom HTTPS domain in under 30 seconds!

### 2. Deploying to Netlify
1. Push this repository to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build` (or leave empty for static).
5. Publish directory: `dist` (or `.` for static).
6. Click **Deploy Site**.

### 3. Deploying to GitHub Pages
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Source**, select `Deploy from a branch` and choose `main` / `root`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
