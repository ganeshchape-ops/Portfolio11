import React, { useState } from 'react';

/**
 * Interactive Data Analytics Visual Widget
 * Modern 3D abstract visualization with live interactive charts,
 * KPI metric switchers, Python snippet preview, and glowing floating badges.
 */
export function DashboardWidget() {
  const [activeTab, setActiveTab] = useState('revenue');
  const [selectedMetric, setSelectedMetric] = useState('monthly');

  // Simulated chart data points for SVG rendering
  const revenueData = [
    { month: 'Jan', val: 65, profit: 24 },
    { month: 'Feb', val: 78, profit: 32 },
    { month: 'Mar', val: 72, profit: 28 },
    { month: 'Apr', val: 94, profit: 41 },
    { month: 'May', val: 86, profit: 38 },
    { month: 'Jun', val: 110, profit: 52 },
    { month: 'Jul', val: 128, profit: 64 }
  ];

  const churnData = [
    { category: 'Month-to-Month', rate: 42, color: '#EF4444' },
    { category: 'One-Year Plan', rate: 11, color: '#F59E0B' },
    { category: 'Two-Year Plan', rate: 3, color: '#10B981' }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background 3D Gradient Sphere */}
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-blue-500/30 blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-500/25 to-purple-600/20 blur-2xl pointer-events-none"></div>

      {/* Main Glass Dashboard Card */}
      <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden p-5 transition-all hover:border-purple-500/40">
        
        {/* Card Header & Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-slate-400 font-medium">analytics_engine.py</span>
          </div>

          <div className="flex bg-slate-950/70 p-0.5 rounded-lg border border-white/5 text-xs">
            <button
              onClick={() => setActiveTab('revenue')}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                activeTab === 'revenue'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📊 KPIs
            </button>
            <button
              onClick={() => setActiveTab('churn')}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                activeTab === 'churn'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🎯 Churn
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                activeTab === 'code'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🐍 Code
            </button>
          </div>
        </div>

        {/* Dynamic Tab Body */}
        {activeTab === 'revenue' && (
          <div className="mt-4 space-y-4">
            {/* Top Quick Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950/50 border border-white/5 rounded-xl p-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">Revenue</span>
                <span className="text-lg font-bold text-white tracking-tight">$1.42M</span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center mt-0.5">
                  ▲ +18.4% YoY
                </span>
              </div>
              <div className="bg-slate-950/50 border border-white/5 rounded-xl p-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">Avg Order</span>
                <span className="text-lg font-bold text-white tracking-tight">$148.50</span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center mt-0.5">
                  ▲ +6.2% MoM
                </span>
              </div>
              <div className="bg-slate-950/50 border border-white/5 rounded-xl p-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">Confidence</span>
                <span className="text-lg font-bold text-cyan-400 tracking-tight">98.6%</span>
                <span className="text-[10px] text-purple-300 font-semibold flex items-center mt-0.5">
                  Validated
                </span>
              </div>
            </div>

            {/* Interactive SVG Bar / Trend Chart */}
            <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-200">Monthly Revenue & Net Profit ($K)</span>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  Power BI Linked
                </span>
              </div>

              {/* SVG Custom Interactive Chart */}
              <div className="h-32 w-full relative flex items-end justify-between pt-4 px-2">
                {revenueData.map((item, idx) => {
                  const barHeight = (item.val / 130) * 100;
                  const profitHeight = (item.profit / 130) * 100;
                  return (
                    <div key={idx} className="flex flex-col items-center group relative w-8">
                      {/* Tooltip on hover */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-1 px-2 rounded shadow-lg pointer-events-none border border-white/10 z-10 whitespace-nowrap">
                        Rev: ${item.val}K | Profit: ${item.profit}K
                      </div>

                      {/* Stacked bars */}
                      <div className="w-full flex items-end justify-center space-x-1 h-24">
                        <div
                          style={{ height: `${barHeight}%` }}
                          className="w-3 rounded-t-sm bg-gradient-to-t from-indigo-600 to-purple-400 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-300"
                        ></div>
                        <div
                          style={{ height: `${profitHeight}%` }}
                          className="w-3 rounded-t-sm bg-gradient-to-t from-cyan-600 to-emerald-400 group-hover:from-cyan-400 group-hover:to-teal-300 transition-all duration-300"
                        ></div>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 font-mono">{item.month}</span>
                    </div>
                  );
                })}
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center space-x-4 pt-2 text-[11px] text-slate-400">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-500 mr-1.5 inline-block"></span> Gross Revenue
                </span>
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 mr-1.5 inline-block"></span> Net Profit
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Churn Breakdown Tab */}
        {activeTab === 'churn' && (
          <div className="mt-4 space-y-4">
            <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-200">Contract Risk Segmentation</span>
                <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  High Impact
                </span>
              </div>
              <div className="space-y-3">
                {churnData.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{item.category}</span>
                      <span className="text-slate-200 font-mono">{item.rate}% Churn</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.rate * 2}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/5">
                💡 <strong>Key Finding:</strong> Month-to-month contracts account for 78% of all churned subscribers.
              </p>
            </div>
          </div>
        )}

        {/* Code Snippet Tab */}
        {activeTab === 'code' && (
          <div className="mt-4">
            <div className="code-box p-3 text-xs leading-relaxed overflow-x-auto font-mono text-slate-300">
              <p><span className="code-keyword">import</span> pandas <span className="code-keyword">as</span> pd</p>
              <p><span className="code-keyword">import</span> numpy <span className="code-keyword">as</span> np</p>
              <p className="mt-1"><span className="code-comment"># Ingest and clean transaction data</span></p>
              <p>df = pd.<span className="code-function">read_csv</span>(<span className="code-string">'sales_data.csv'</span>)</p>
              <p>df[<span className="code-string">'order_date'</span>] = pd.<span className="code-function">to_datetime</span>(df[<span className="code-string">'order_date'</span>])</p>
              <p>df[<span className="code-string">'profit_margin'</span>] = df[<span className="code-string">'profit'</span>] / df[<span className="code-string">'sales'</span>]</p>
              <p className="mt-1"><span className="code-comment"># Aggregate by category and evaluate KPIs</span></p>
              <p>kpis = df.<span className="code-function">groupby</span>(<span className="code-string">'category'</span>).<span className="code-function">agg</span>(&#123;</p>
              <p className="pl-4"><span className="code-string">'sales'</span>: <span className="code-string">'sum'</span>,</p>
              <p className="pl-4"><span className="code-string">'profit_margin'</span>: <span className="code-string">'mean'</span></p>
              <p>&#125;)</p>
              <p className="mt-1 text-emerald-400 font-semibold">✓ Pipeline executed in 0.42s [125K rows]</p>
            </div>
          </div>
        )}

        {/* Bottom Status bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Data Stream: Active</span>
          </div>
          <span>Python 3.14 • Power BI • DAX</span>
        </div>
      </div>

      {/* Floating Mini Decorative Widgets */}
      <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-slate-900/90 border border-purple-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md items-center space-x-3 animate-float">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
          DAX
        </div>
        <div>
          <div className="text-[11px] text-slate-400 font-medium">Model Status</div>
          <div className="text-xs font-bold text-white">Star Schema Ready</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -top-5 -right-6 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md items-center space-x-3 animate-float-delayed">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
          EDA
        </div>
        <div>
          <div className="text-[11px] text-slate-400 font-medium">Outlier Detection</div>
          <div className="text-xs font-bold text-cyan-400">99.4% Accurate</div>
        </div>
      </div>
    </div>
  );
}
