import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  CheckCircle,
  Target,
  BarChart3,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface AnalyticsMetric {
  id: string;
  name: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
}

interface ConversionData {
  stage: string;
  entered: number;
  converted: number;
  conversionRate: number;
  avgDays: number;
}

interface TimeSeriesData {
  period: string;
  suppliers: number;
  conversions: number;
}

export default function FunnelAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("conversion");

  const analyticsMetrics: AnalyticsMetric[] = [
    {
      id: "1",
      name: "Overall Conversion Rate",
      value: "18.5%",
      change: "+2.3%",
      changeType: "positive",
      icon: <Target className="w-6 h-6 text-green-600" />,
    },
    {
      id: "2",
      name: "Average Cycle Time",
      value: "24 days",
      change: "-1.2 days",
      changeType: "positive",
      icon: <Clock className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "3",
      name: "Pipeline Velocity",
      value: "4.2 suppliers/day",
      change: "+15%",
      changeType: "positive",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    },
    {
      id: "4",
      name: "Drop-off Rate",
      value: "12.3%",
      change: "-3.1%",
      changeType: "positive",
      icon: <TrendingDown className="w-6 h-6 text-orange-600" />,
    },
  ];

  const conversionData: ConversionData[] = [
    {
      stage: "Lead Generation",
      entered: 180,
      converted: 150,
      conversionRate: 83.3,
      avgDays: 2,
    },
    {
      stage: "Initial Assessment",
      entered: 150,
      converted: 120,
      conversionRate: 80.0,
      avgDays: 5,
    },
    {
      stage: "Documentation Review",
      entered: 120,
      converted: 95,
      conversionRate: 79.2,
      avgDays: 7,
    },
    {
      stage: "Legal Review",
      entered: 95,
      converted: 78,
      conversionRate: 82.1,
      avgDays: 6,
    },
    {
      stage: "Final Approval",
      entered: 78,
      converted: 65,
      conversionRate: 83.3,
      avgDays: 3,
    },
    {
      stage: "Onboarded",
      entered: 65,
      converted: 58,
      conversionRate: 89.2,
      avgDays: 1,
    },
  ];

  const timeSeriesData: TimeSeriesData[] = [
    { period: "Week 1", suppliers: 42, conversions: 8 },
    { period: "Week 2", suppliers: 38, conversions: 12 },
    { period: "Week 3", suppliers: 45, conversions: 9 },
    { period: "Week 4", suppliers: 52, conversions: 15 },
    { period: "Week 5", suppliers: 48, conversions: 11 },
    { period: "Week 6", suppliers: 41, conversions: 13 },
  ];

  const getConversionColor = (rate: number) => {
    if (rate >= 85) return "text-green-700 bg-green-100";
    if (rate >= 75) return "text-yellow-700 bg-yellow-100";
    return "text-red-700 bg-red-100";
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-alisa-gray-900">
            Analytics & Reports
          </h1>
          <p className="text-alisa-gray-600 mt-1 text-sm md:text-base">
            Funnel performance insights and detailed reports
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-alisa-gray-300 text-alisa-gray-700 rounded-md hover:bg-alisa-gray-50 text-sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {analyticsMetrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white rounded-lg p-4 md:p-6 border border-alisa-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-alisa-gray-600">
                  {metric.name}
                </p>
                <p className="text-xl md:text-2xl font-bold text-alisa-gray-900 mt-2">
                  {metric.value}
                </p>
                <div className="flex items-center mt-2">
                  {metric.changeType === "positive" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={`text-sm ${
                      metric.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {metric.change} vs last period
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">{metric.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Analysis */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base md:text-lg font-semibold text-alisa-gray-900">
            Stage-by-Stage Conversion Analysis
          </h3>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-alisa-gray-400" />
            <span className="text-sm text-alisa-gray-500">
              {selectedPeriod}
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-alisa-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Stage
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Entered
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Converted
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Conversion Rate
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Avg Days
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                  Efficiency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-alisa-gray-200">
              {conversionData.map((data, index) => (
                <tr key={index} className="hover:bg-alisa-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-alisa-gray-900">
                    {data.stage}
                  </td>
                  <td className="px-4 py-4 text-sm text-alisa-gray-900">
                    {data.entered}
                  </td>
                  <td className="px-4 py-4 text-sm text-alisa-gray-900">
                    {data.converted}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getConversionColor(
                        data.conversionRate,
                      )}`}
                    >
                      {data.conversionRate.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-alisa-gray-900">
                    {data.avgDays} days
                  </td>
                  <td className="px-4 py-4">
                    <div className="w-20 bg-alisa-gray-200 rounded-full h-2">
                      <div
                        className="bg-alisa-blue h-2 rounded-full"
                        style={{ width: `${data.conversionRate}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {conversionData.map((data, index) => (
            <div
              key={index}
              className="border border-alisa-gray-200 rounded-lg p-4 bg-alisa-gray-50"
            >
              <h4 className="font-medium text-alisa-gray-900 mb-3">
                {data.stage}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-alisa-gray-500">Entered:</span>
                  <div className="font-medium">{data.entered}</div>
                </div>
                <div>
                  <span className="text-alisa-gray-500">Converted:</span>
                  <div className="font-medium">{data.converted}</div>
                </div>
                <div>
                  <span className="text-alisa-gray-500">Conversion Rate:</span>
                  <div>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getConversionColor(
                        data.conversionRate,
                      )}`}
                    >
                      {data.conversionRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-alisa-gray-500">Avg Days:</span>
                  <div className="font-medium">{data.avgDays} days</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-alisa-gray-500">
                    Efficiency
                  </span>
                  <span className="text-xs text-alisa-gray-500">
                    {data.conversionRate.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-alisa-gray-200 rounded-full h-2">
                  <div
                    className="bg-alisa-blue h-2 rounded-full"
                    style={{ width: `${data.conversionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Series Chart */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base md:text-lg font-semibold text-alisa-gray-900">
            Pipeline Trends Over Time
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-alisa-blue rounded-full"></div>
              <span className="text-sm text-alisa-gray-600">New Suppliers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-alisa-gray-600">Conversions</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {timeSeriesData.map((data, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm text-alisa-gray-600">
                {data.period}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-alisa-gray-200 rounded-full h-3">
                    <div
                      className="bg-alisa-blue h-3 rounded-full"
                      style={{ width: `${(data.suppliers / 60) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-alisa-gray-600 w-12">
                    {data.suppliers}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-alisa-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: `${(data.conversions / 20) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-alisa-gray-600 w-12">
                    {data.conversions}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Bottlenecks */}
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-alisa-gray-900 mb-4">
            Performance Bottlenecks
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <div className="font-medium text-red-900">
                  Documentation Review
                </div>
                <div className="text-sm text-red-700">
                  Average 7.2 days (2.1 days over target)
                </div>
              </div>
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-yellow-900">Legal Review</div>
                <div className="text-sm text-yellow-700">
                  79.2% conversion rate (5% below target)
                </div>
              </div>
              <TrendingDown className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-alisa-gray-900 mb-4">
            Top Performing Stages
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-green-900">Onboarded</div>
                <div className="text-sm text-green-700">
                  89.2% conversion rate (9% above target)
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-green-900">
                  Lead Generation
                </div>
                <div className="text-sm text-green-700">
                  2.0 days average (1 day under target)
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-4">
          AI-Powered Recommendations
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <BarChart3 className="w-3 h-3 text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-blue-900">
                Optimize Documentation Review
              </div>
              <div className="text-sm text-blue-700">
                Consider automating compliance checks to reduce review time by
                ~30%
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Users className="w-3 h-3 text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-blue-900">
                Increase Resource Allocation
              </div>
              <div className="text-sm text-blue-700">
                Legal Review stage would benefit from 1 additional reviewer to
                meet targets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
