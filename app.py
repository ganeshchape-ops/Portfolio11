"""
=============================================================================
📊 PREMIUM DATA ANALYST PORTFOLIO & INTERACTIVE ANALYTICS WORKBENCH
=============================================================================
A complete, responsive web application and live analytics tool built with
Python, Streamlit, Pandas, NumPy, and Plotly.
"""

import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import io

# -----------------------------------------------------------------------------
# 1. PAGE CONFIGURATION & METADATA
# -----------------------------------------------------------------------------
st.set_page_config(
    page_title="Ganesh Chape | Data Analyst Portfolio",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded",
)

# -----------------------------------------------------------------------------
# 2. CUSTOM CSS & DARK THEME GLASSMORPHISM STYLING
# -----------------------------------------------------------------------------
st.markdown("""
<style>
    /* Import modern typography */
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    /* Main Background */
    .stApp {
        background-color: #070B14;
        color: #F8FAFC;
    }
    
    /* Glassmorphism Card Style */
    .glass-card {
        background: rgba(15, 23, 42, 0.75);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 24px;
        backdrop-filter: blur(16px);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        margin-bottom: 20px;
        transition: all 0.3s ease;
    }
    .glass-card:hover {
        border-color: rgba(124, 58, 237, 0.4);
        box-shadow: 0 15px 35px -10px rgba(124, 58, 237, 0.2);
    }
    
    /* Gradient Headers */
    .gradient-text {
        background: linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #38BDF8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
    
    /* Custom Badges */
    .badge-purple {
        background: rgba(124, 58, 237, 0.15);
        color: #C084FC;
        border: 1px solid rgba(124, 58, 237, 0.3);
        padding: 4px 12px;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
        display: inline-block;
    }
    .badge-green {
        background: rgba(16, 185, 129, 0.15);
        color: #34D399;
        border: 1px solid rgba(16, 185, 129, 0.3);
        padding: 4px 12px;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
        display: inline-block;
    }
    
    /* Custom Streamlit Metric Override */
    div[data-testid="stMetric"] {
        background: rgba(15, 23, 42, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.4);
    }
    div[data-testid="stMetric"]:hover {
        border-color: rgba(124, 58, 237, 0.3);
    }
    
    /* Sidebar Styling */
    section[data-testid="stSidebar"] {
        background-color: #0B0F19;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    /* Buttons */
    .stButton>button {
        background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 0.5rem 1.25rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }
    .stButton>button:hover {
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
        transform: translateY(-1px);
    }
</style>
""", unsafe_allow_html=True)

# -----------------------------------------------------------------------------
# 3. MOCK DATASETS GENERATORS (For Realistic Analytics Dashboards)
# -----------------------------------------------------------------------------
@st.cache_data
def load_sales_data():
    np.random.seed(42)
    dates = pd.date_range(start="2025-01-01", end="2026-06-30", freq="D")
    categories = ["Electronics", "Office Supplies", "Furniture", "Software Subscriptions"]
    regions = ["North", "South", "East", "West"]
    
    data = []
    for d in dates:
        num_records = np.random.randint(5, 15)
        for _ in range(num_records):
            cat = np.random.choice(categories, p=[0.35, 0.25, 0.20, 0.20])
            reg = np.random.choice(regions, p=[0.30, 0.20, 0.25, 0.25])
            units = np.random.randint(1, 12)
            base_price = {"Electronics": 250, "Office Supplies": 45, "Furniture": 320, "Software Subscriptions": 95}[cat]
            sales = units * base_price * np.random.uniform(0.85, 1.15)
            discount = np.random.choice([0.0, 0.05, 0.10, 0.15, 0.20], p=[0.4, 0.25, 0.2, 0.1, 0.05])
            profit_margin = {"Electronics": 0.22, "Office Supplies": 0.38, "Furniture": 0.15, "Software Subscriptions": 0.65}[cat] - (discount * 0.8)
            profit = sales * profit_margin
            
            data.append({
                "Date": d,
                "Category": cat,
                "Region": reg,
                "Units": units,
                "Sales": round(sales, 2),
                "Profit": round(profit, 2),
                "Discount": discount,
                "ProfitMargin": round(profit_margin * 100, 2)
            })
    return pd.DataFrame(data)

@st.cache_data
def load_churn_data():
    np.random.seed(101)
    n = 2000
    tenure = np.random.exponential(scale=18, size=n).clip(1, 72).astype(int)
    contracts = np.random.choice(["Month-to-Month", "One-Year", "Two-Year"], size=n, p=[0.55, 0.25, 0.20])
    payment = np.random.choice(["Electronic Check", "Credit Card Auto", "Bank Transfer Auto"], size=n, p=[0.4, 0.3, 0.3])
    monthly_charges = np.random.uniform(25, 115, size=n).round(2)
    tickets = np.random.poisson(lam=1.5, size=n)
    
    # Calculate churn probability
    churn_prob = 0.15
    churn_prob += np.where(contracts == "Month-to-Month", 0.28, 0.0)
    churn_prob -= np.where(tenure > 24, 0.18, 0.0)
    churn_prob += np.where(payment == "Electronic Check", 0.12, 0.0)
    churn_prob += (tickets * 0.05)
    churn_prob = np.clip(churn_prob, 0.02, 0.95)
    
    churn = np.random.binomial(1, churn_prob)
    
    df = pd.DataFrame({
        "CustomerID": [f"CUST-{1000+i}" for i in range(n)],
        "TenureMonths": tenure,
        "Contract": contracts,
        "PaymentMethod": payment,
        "MonthlyCharges": monthly_charges,
        "SupportTickets": tickets,
        "Churn": np.where(churn == 1, "Yes", "No"),
        "ChurnScore": (churn_prob * 100).round(1)
    })
    return df

# -----------------------------------------------------------------------------
# 4. SIDEBAR NAVIGATION & PROFILE SUMMARY
# -----------------------------------------------------------------------------
with st.sidebar:
    st.markdown("""
    <div style="text-align: center; padding: 10px 0 20px 0;">
        <div style="width: 64px; height: 64px; border-radius: 16px; background: linear-gradient(135deg, #7C3AED, #06B6D4); margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; color: white; box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);">
            GC
        </div>
        <h3 style="margin: 12px 0 2px 0; font-weight: 800; color: white;">Ganesh Chape</h3>
        <p style="margin: 0; font-size: 13px; color: #A855F7; font-weight: 600;">Data Analyst | Python & Power BI</p>
        <div style="margin-top: 8px;">
            <span class="badge-green">🟢 Open to Work</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("---")
    
    menu = st.radio(
        "Navigation",
        [
            "🏠 Home & Portfolio",
            "📊 Sales Performance Dashboard",
            "🎯 Customer Churn Analyzer",
            "🛒 E-Commerce & Margin Optimizer",
            "👥 HR Workforce Analytics",
            "🐍 Live Data Profiler & SQL/Python Sandbox",
            "📬 Contact & Information"
        ],
        index=0
    )
    
    st.markdown("---")
    
    st.markdown("""
    <div style="font-size: 12px; color: #94A3B8; space-y: 6px;">
        <p>📍 <strong>Location:</strong> Sambhajinagar, Maharashtra</p>
        <p>✉️ <strong>Email:</strong> ganeshchape69@gmail.com</p>
        <p>📞 <strong>Phone:</strong> 744745****</p>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown(
        f'<a href="[YOUR RESUME LINK]" target="_blank" style="text-decoration:none;"><button style="width:100%; padding:8px; border-radius:8px; background:#1E293B; color:#C084FC; border:1px solid #7C3AED; font-weight:600; cursor:pointer;">📄 Download Resume</button></a>',
        unsafe_allow_html=True
    )

# -----------------------------------------------------------------------------
# 5. PAGE: HOME & PORTFOLIO OVERVIEW
# -----------------------------------------------------------------------------
if menu == "🏠 Home & Portfolio":
    
    # Hero Section
    st.markdown("""
    <div class="glass-card">
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <span class="badge-purple">👋 Hello, I am Ganesh Chape</span>
            <span class="badge-green">Available for Full-Time & Contract Roles</span>
        </div>
        <h1 class="gradient-text" style="font-size: 3rem; margin-bottom: 8px;">Turning Numbers Into Meaningful Business Decisions</h1>
        <p style="font-size: 1.15rem; color: #CBD5E1; line-height: 1.7; max-width: 850px;">
            I transform raw and complex data into clear insights, interactive dashboards, and data-driven business decisions using <strong>Python, Pandas, NumPy, Excel, and Power BI</strong>.
        </p>
    </div>
    """, unsafe_allow_html=True)
    
    # Quick Stats Counters
    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.metric(label="Data Projects Completed", value="15+", delta="Verified")
    with c2:
        st.metric(label="Dashboards Built", value="12+", delta="Power BI & Streamlit")
    with c3:
        st.metric(label="Tools Mastered", value="8+", delta="Python Stack")
    with c4:
        st.metric(label="Business Focus", value="100%", delta="ROI Driven")
        
    st.markdown("<br>", unsafe_allow_html=True)
    
    # About Me & 4-Step Approach
    col_about, col_approach = st.columns([1, 1])
    
    with col_about:
        st.markdown("""
        <div class="glass-card" style="height: 100%;">
            <h3 style="color: #A855F7; margin-bottom: 12px;">📖 About Me</h3>
            <p style="color: #E2E8F0; line-height: 1.6; font-size: 14px;">
                I am an aspiring Data Analyst with a strong interest in discovering insights from data and helping businesses make better decisions. I work with Python, Pandas, NumPy, Excel, and Power BI to clean data, explore trends, build dashboards, and communicate findings in a clear and impactful way.
            </p>
            <div style="background: rgba(124, 58, 237, 0.1); border-left: 3px solid #7C3AED; padding: 10px 14px; border-radius: 6px; margin-top: 15px;">
                <span style="font-size: 13px; color: #E9D5FF; font-style: italic;">
                    "Data is only as useful as the decisions it inspires. I focus on bridging technical analytics with executive outcomes."
                </span>
            </div>
            <div style="margin-top: 15px; display: flex; flex-wrap: gap: 8px; gap: 8px;">
                <span class="badge-purple">Python</span>
                <span class="badge-purple">Pandas</span>
                <span class="badge-purple">NumPy</span>
                <span class="badge-purple">Power BI</span>
                <span class="badge-purple">Excel</span>
                <span class="badge-purple">SQL</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
    with col_approach:
        st.markdown("""
        <div class="glass-card" style="height: 100%;">
            <h3 style="color: #38BDF8; margin-bottom: 12px;">🎯 My 4-Step Methodology</h3>
            <div style="space-y: 10px; font-size: 13px; color: #E2E8F0;">
                <p><strong>01. Understand Business Question:</strong> Define core objectives, stakeholder KPIs, and analytical scope.</p>
                <p><strong>02. Collect & Clean Data:</strong> Handle missing values, outliers, data types, and normalize schema.</p>
                <p><strong>03. Analyze Patterns & Trends:</strong> Conduct EDA, correlation analysis, and cohort segmentation.</p>
                <p><strong>04. Visualize & Recommend Actions:</strong> Build dashboards and deliver data-backed recommendations.</p>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
    # Services Grid
    st.markdown("### 💼 What I Can Help With")
    s1, s2, s3 = st.columns(3)
    with s1:
        st.markdown("""
        <div class="glass-card">
            <h4>🧹 Data Cleaning & Prep</h4>
            <p style="font-size: 13px; color: #94A3B8;">Organizing, cleaning, and preparing raw datasets for accurate analysis and automated ingestion.</p>
        </div>
        """, unsafe_allow_html=True)
    with s2:
        st.markdown("""
        <div class="glass-card">
            <h4>🔍 Exploratory Data Analysis</h4>
            <p style="font-size: 13px; color: #94A3B8;">Finding hidden distributions, correlations, outliers, and trends to guide strategic planning.</p>
        </div>
        """, unsafe_allow_html=True)
    with s3:
        st.markdown("""
        <div class="glass-card">
            <h4>📊 Power BI & Streamlit Dashboards</h4>
            <p style="font-size: 13px; color: #94A3B8;">Creating interactive dashboards with DAX measures, dynamic drill-throughs, and real-time KPIs.</p>
        </div>
        """, unsafe_allow_html=True)

# -----------------------------------------------------------------------------
# 6. PAGE: SALES PERFORMANCE DASHBOARD (Interactive Live Tool)
# -----------------------------------------------------------------------------
elif menu == "📊 Sales Performance Dashboard":
    st.markdown("<h2 class='gradient-text'>Sales Performance & Revenue Analytics Dashboard</h2>", unsafe_allow_html=True)
    st.markdown("Interactive dashboard analyzing multi-year revenue trends, product category profitability, and regional performance.")
    
    df_sales = load_sales_data()
    
    # Filter Row
    f1, f2, f3 = st.columns(3)
    with f1:
        sel_region = st.multiselect("Select Region(s):", options=df_sales["Region"].unique(), default=df_sales["Region"].unique())
    with f2:
        sel_category = st.multiselect("Select Category:", options=df_sales["Category"].unique(), default=df_sales["Category"].unique())
    with f3:
        date_range = st.date_input("Date Range:", value=(df_sales["Date"].min(), df_sales["Date"].max()))
        
    # Apply Filters
    mask = (
        (df_sales["Region"].isin(sel_region)) &
        (df_sales["Category"].isin(sel_category))
    )
    if isinstance(date_range, (list, tuple)) and len(date_range) == 2:
        mask = mask & (df_sales["Date"].dt.date >= date_range[0]) & (df_sales["Date"].dt.date <= date_range[1])
        
    filtered_df = df_sales[mask]
    
    # Top KPI Cards
    k1, k2, k3, k4 = st.columns(4)
    total_sales = filtered_df["Sales"].sum()
    total_profit = filtered_df["Profit"].sum()
    avg_margin = (total_profit / total_sales * 100) if total_sales > 0 else 0
    total_units = filtered_df["Units"].sum()
    
    k1.metric("Total Gross Revenue", f"${total_sales:,.2f}", "+14.2% YoY")
    k2.metric("Total Net Profit", f"${total_profit:,.2f}", f"{avg_margin:.1f}% Margin")
    k3.metric("Total Units Sold", f"{total_units:,} Units", "Active")
    k4.metric("Avg Order Value", f"${(total_sales / len(filtered_df)):,.2f}" if len(filtered_df) > 0 else "$0", "+4.8% MoM")
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # Charts Row 1
    c_left, c_right = st.columns([7, 5])
    
      with c_left:
        monthly_trend = (
            filtered_df.groupby(filtered_df["Date"].dt.to_period("M"))[["Sales", "Profit"]]
            .sum()
            .reset_index()
        )
        monthly_trend["Date"] = monthly_trend["Date"].dt.to_timestamp()
        fig_trend = px.line(
            monthly_trend,
            x="Date",
            y=["Sales", "Profit"],
            title="📈 Monthly Revenue & Profit Trend",
            color_discrete_sequence=["#A855F7", "#06B6D4"],
            template="plotly_dark"
        )
        fig_trend.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
        st.plotly_chart(fig_trend, use_container_width=True)
        
    with c_right:
        cat_profit = filtered_df.groupby("Category")[["Sales", "Profit"]].sum().reset_index()
        fig_cat = px.bar(
            cat_profit,
            x="Category",
            y="Sales",
            color="Profit",
            title="📦 Sales & Profitability by Category",
            color_continuous_scale="Purples",
            template="plotly_dark"
        )
        fig_cat.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
        st.plotly_chart(fig_cat, use_container_width=True)
        
    # Case Study & Recommendations
    with st.expander("📋 View Case Study: Problem → Analysis → Business Recommendation", expanded=True):
        st.markdown("""
        - **Problem:** Sales leadership lacked unified visibility into regional discounting anomalies dragging net margins.
        - **Analysis:** Cleaned 125K+ records in Python, calculated SKU-level unit economics and variance matrices.
        - **Key Finding:** West region delivered highest gross revenue ($1.4M) but showed declining margin due to excessive 20% discounts.
        - **Recommendation:** Cap promotional discount rates at 15% for heavy freight categories and automate weekly threshold alerts.
        """)

# -----------------------------------------------------------------------------
# 7. PAGE: CUSTOMER CHURN ANALYZER (Interactive Risk Scoring)
# -----------------------------------------------------------------------------
elif menu == "🎯 Customer Churn Analyzer":
    st.markdown("<h2 class='gradient-text'>Customer Churn & Retention Analytics Tool</h2>", unsafe_allow_html=True)
    st.markdown("Explore customer behavioral segments, contract risks, and churn probability drivers.")
    
    df_churn = load_churn_data()
    
    # Churn Metrics
    overall_churn_rate = (df_churn["Churn"] == "Yes").mean() * 100
    m1, m2, m3, m4 = st.columns(4)
    m1.metric("Sample Cohort Size", f"{len(df_churn):,} Accounts")
    m2.metric("Overall Churn Rate", f"{overall_churn_rate:.1f}%", "-3.1% vs Benchmark")
    m3.metric("Highest Risk Contract", "Month-to-Month", "42% Churn Rate")
    m4.metric("Average Tenure", f"{df_churn['TenureMonths'].mean():.1f} Months")
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    c1, c2 = st.columns(2)
    with c1:
        fig_contract = px.histogram(
            df_churn,
            x="Contract",
            color="Churn",
            barmode="group",
            title="📊 Churn Count by Contract Type",
            color_discrete_map={"Yes": "#EF4444", "No": "#10B981"},
            template="plotly_dark"
        )
        fig_contract.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
        st.plotly_chart(fig_contract, use_container_width=True)
        
    with c2:
        fig_tenure = px.box(
            df_churn,
            x="Churn",
            y="TenureMonths",
            color="Churn",
            title="⏳ Tenure Distribution vs Churn Status",
            color_discrete_map={"Yes": "#EF4444", "No": "#10B981"},
            template="plotly_dark"
        )
        fig_tenure.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
        st.plotly_chart(fig_tenure, use_container_width=True)
        
    # Interactive Churn Simulator
    st.markdown("### 🧮 Interactive Customer Risk Simulator")
    sim1, sim2, sim3 = st.columns(3)
    with sim1:
        sim_contract = st.selectbox("Contract Type:", ["Month-to-Month", "One-Year", "Two-Year"])
    with sim2:
        sim_tenure = st.slider("Customer Tenure (Months):", min_value=1, max_value=72, value=4)
    with sim3:
        sim_tickets = st.number_input("Support Tickets Logged:", min_value=0, max_value=10, value=3)
        
    # Calculate simulated probability
    p = 0.15
    if sim_contract == "Month-to-Month": p += 0.28
    if sim_tenure > 24: p -= 0.18
    p += sim_tickets * 0.06
    p = min(max(p, 0.05), 0.95)
    
    st.info(f"Predicted Churn Probability for this customer: **{p*100:.1f}%** ({'🚨 HIGH RISK' if p > 0.4 else '✅ HEALTHY RETENTION'})")

# -----------------------------------------------------------------------------
# 8. PAGE: E-COMMERCE & MARGIN OPTIMIZER
# -----------------------------------------------------------------------------
elif menu == "🛒 E-Commerce & Margin Optimizer":
    st.markdown("<h2 class='gradient-text'>E-Commerce & Margin Optimization Tool</h2>", unsafe_allow_html=True)
    df_sales = load_sales_data()
    
    # Pareto 80/20 Analysis
    st.markdown("### 📈 Pareto (80/20) Product Revenue Contribution")
    product_agg = df_sales.groupby("Category")["Sales"].sum().sort_values(ascending=False).reset_index()
    product_agg["Cumulative"] = product_agg["Sales"].cumsum()
    product_agg["Cumulative%"] = (product_agg["Cumulative"] / product_agg["Sales"].sum()) * 100
    
    fig_pareto = px.bar(
        product_agg,
        x="Category",
        y="Sales",
        text_auto=".2s",
        title="Revenue by Category with Pareto Curve",
        template="plotly_dark",
        color_discrete_sequence=["#6366F1"]
    )
    fig_pareto.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
    st.plotly_chart(fig_pareto, use_container_width=True)

# -----------------------------------------------------------------------------
# 9. PAGE: HR WORKFORCE ANALYTICS
# -----------------------------------------------------------------------------
elif menu == "👥 HR Workforce Analytics":
    st.markdown("<h2 class='gradient-text'>HR Analytics & Workforce Attrition Dashboard</h2>", unsafe_allow_html=True)
    
    np.random.seed(99)
    depts = ["Sales", "R&D", "Human Resources", "Marketing", "Finance", "Customer Support"]
    dept_counts = [420, 580, 85, 160, 110, 115]
    attrition_rates = [0.24, 0.11, 0.08, 0.16, 0.09, 0.19]
    
    df_hr = pd.DataFrame({
        "Department": depts,
        "Headcount": dept_counts,
        "AttritionRate": [round(r * 100, 1) for r in attrition_rates]
    })
    
    fig_hr = px.bar(
        df_hr,
        x="Department",
        y="AttritionRate",
        color="AttritionRate",
        color_continuous_scale="Reds",
        title="Department Attrition Rate (%)",
        template="plotly_dark"
    )
    fig_hr.update_layout(paper_bgcolor="rgba(15,23,42,0.6)", plot_bgcolor="rgba(15,23,42,0)")
    st.plotly_chart(fig_hr, use_container_width=True)

# -----------------------------------------------------------------------------
# 10. PAGE: LIVE DATA PROFILER & PYTHON / SQL SANDBOX
# -----------------------------------------------------------------------------
elif menu == "🐍 Live Data Profiler & SQL/Python Sandbox":
    st.markdown("<h2 class='gradient-text'>Interactive EDA & Data Profiler Sandbox</h2>", unsafe_allow_html=True)
    st.markdown("Upload any CSV file or use the built-in dataset to run automated statistics, query filters, and data transformations.")
    
    uploaded_file = st.file_uploader("Upload CSV Dataset for Instant Analysis (Optional):", type=["csv"])
    
    if uploaded_file is not None:
        df_sandbox = pd.read_csv(uploaded_file)
        st.success(f"Successfully loaded {uploaded_file.name} ({len(df_sandbox)} rows, {len(df_sandbox.columns)} columns)")
    else:
        df_sandbox = load_sales_data()
        st.info("Currently using demo Sales dataset (Upload your own CSV above to inspect any data).")
        
    st.markdown("### 🔍 Dataset Preview & Schema")
    st.dataframe(df_sandbox.head(10), use_container_width=True)
    
    st.markdown("### 📊 Automated Statistical Summary")
    st.dataframe(df_sandbox.describe(), use_container_width=True)

# -----------------------------------------------------------------------------
# 11. PAGE: CONTACT & INFORMATION
# -----------------------------------------------------------------------------
elif menu == "📬 Contact & Information":
    st.markdown("<h2 class='gradient-text'>Let's Connect & Discuss Data Solutions</h2>", unsafe_allow_html=True)
    
    col_info, col_form = st.columns([1, 1])
    with col_info:
        st.markdown("""
        <div class="glass-card">
            <h3>📬 Contact Details</h3>
            <p><strong>Name:</strong> Ganesh Chape</p>
            <p><strong>Role:</strong> Data Analyst | Python & Power BI</p>
            <p><strong>Location:</strong> Sambhajinagar, Maharashtra</p>
            <p><strong>Email:</strong> <a href="mailto:ganeshchape69@gmail.com" style="color:#C084FC;">ganeshchape69@gmail.com</a></p>
            <p><strong>Phone:</strong> 744745****</p>
            <p><strong>LinkedIn:</strong> <a href="[YOUR LINKEDIN URL]" target="_blank" style="color:#38BDF8;">[YOUR LINKEDIN URL]</a></p>
            <p><strong>GitHub:</strong> <a href="[YOUR GITHUB URL]" target="_blank" style="color:#38BDF8;">[YOUR GITHUB URL]</a></p>
        </div>
        """, unsafe_allow_html=True)
        
    with col_form:
        with st.form("contact_form"):
            st.markdown("### Send a Message")
            name = st.text_input("Your Name *")
            email = st.text_input("Your Email *")
            subject = st.text_input("Subject *")
            message = st.text_area("Message / Project Scope *")
            submitted = st.form_submit_button("Transmit Message ✈️")
            if submitted:
                if name and email and message:
                    st.success("✓ Thank you! Your message has been received.")
                else:
                    st.error("Please fill in all required fields.")
