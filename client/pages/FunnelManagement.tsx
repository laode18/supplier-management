import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Filter,
  Search,
  Download,
  MoreHorizontal,
} from "lucide-react";

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface FunnelItem {
  id: string;
  supplierName: string;
  currentStage: string;
  daysInStage: number;
  priority: "High" | "Medium" | "Low";
  assignedTo: string;
  nextAction: string;
}

export default function FunnelManagement() {
  const [activeTab, setActiveTab] = useState("Pipeline");
  const [searchTerm, setSearchTerm] = useState("");

  const funnelStages: FunnelStage[] = [
    {
      id: "1",
      name: "Lead Generation",
      count: 45,
      percentage: 100,
      color: "bg-blue-500",
    },
    {
      id: "2",
      name: "Initial Assessment",
      count: 32,
      percentage: 71,
      color: "bg-green-500",
    },
    {
      id: "3",
      name: "Documentation Review",
      count: 24,
      percentage: 53,
      color: "bg-yellow-500",
    },
    {
      id: "4",
      name: "Legal Review",
      count: 18,
      percentage: 40,
      color: "bg-orange-500",
    },
    {
      id: "5",
      name: "Final Approval",
      count: 12,
      percentage: 27,
      color: "bg-purple-500",
    },
    {
      id: "6",
      name: "Onboarded",
      count: 8,
      percentage: 18,
      color: "bg-green-600",
    },
  ];

  const funnelItems: FunnelItem[] = [
    {
      id: "1",
      supplierName: "PT Digital Solutions",
      currentStage: "Initial Assessment",
      daysInStage: 3,
      priority: "High",
      assignedTo: "John Smith",
      nextAction: "Schedule assessment call",
    },
    {
      id: "2",
      supplierName: "PT Tech Innovation",
      currentStage: "Documentation Review",
      daysInStage: 7,
      priority: "Medium",
      assignedTo: "Sarah Wilson",
      nextAction: "Review compliance documents",
    },
    {
      id: "3",
      supplierName: "PT Global Services",
      currentStage: "Legal Review",
      daysInStage: 12,
      priority: "High",
      assignedTo: "Mike Johnson",
      nextAction: "Legal team review",
    },
    {
      id: "4",
      supplierName: "PT Smart Systems",
      currentStage: "Final Approval",
      daysInStage: 2,
      priority: "Low",
      assignedTo: "Lisa Brown",
      nextAction: "Management approval",
    },
  ];

  const tabs = ["Pipeline", "Analytics", "Conversion"];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-700 bg-red-100";
      case "Medium":
        return "text-yellow-700 bg-yellow-100";
      case "Low":
        return "text-green-700 bg-green-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Pipeline":
        return (
          <div className="space-y-6">
            {/* Funnel Visualization */}
            <div className="bg-white rounded-lg border border-alisa-gray-200 p-6">
              <h3 className="text-lg font-semibold text-alisa-gray-900 mb-6">
                Supplier Onboarding Funnel
              </h3>
              <div className="space-y-4">
                {funnelStages.map((stage, index) => (
                  <div key={stage.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-alisa-gray-900">
                          {stage.name}
                        </span>
                        <span className="text-sm text-alisa-gray-600">
                          {stage.count} suppliers ({stage.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-alisa-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${stage.color}`}
                          style={{ width: `${stage.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    {index < funnelStages.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-alisa-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Pipeline Items */}
            <div className="bg-white rounded-lg border border-alisa-gray-200">
              <div className="p-6 border-b border-alisa-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-alisa-gray-900">
                    Active Pipeline Items
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-alisa-gray-400" />
                      <input
                        type="text"
                        placeholder="Search suppliers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue text-sm"
                      />
                    </div>
                    <button className="p-2 border border-alisa-gray-300 rounded-md hover:bg-alisa-gray-50">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-alisa-gray-300 rounded-md hover:bg-alisa-gray-50">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-alisa-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Supplier Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Current Stage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Days in Stage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Assigned To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Next Action
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-alisa-gray-700 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-alisa-gray-200">
                    {funnelItems.map((item) => (
                      <tr key={item.id} className="hover:bg-alisa-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-alisa-gray-900">
                          {item.supplierName}
                        </td>
                        <td className="px-6 py-4 text-sm text-alisa-gray-900">
                          {item.currentStage}
                        </td>
                        <td className="px-6 py-4 text-sm text-alisa-gray-900">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-alisa-gray-400 mr-1" />
                            {item.daysInStage} days
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                              item.priority,
                            )}`}
                          >
                            {item.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-alisa-gray-900">
                          {item.assignedTo}
                        </td>
                        <td className="px-6 py-4 text-sm text-alisa-gray-900">
                          {item.nextAction}
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-alisa-gray-400 hover:text-alisa-gray-600">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "Analytics":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-alisa-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-alisa-gray-600">
                    Conversion Rate
                  </p>
                  <p className="text-2xl font-bold text-alisa-gray-900">18%</p>
                  <p className="text-sm text-green-600 mt-1">+2% this month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-alisa-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-alisa-gray-600">
                    Average Time
                  </p>
                  <p className="text-2xl font-bold text-alisa-gray-900">
                    24 days
                  </p>
                  <p className="text-sm text-red-600 mt-1">
                    +3 days vs last month
                  </p>
                </div>
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-alisa-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-alisa-gray-600">
                    Active Pipeline
                  </p>
                  <p className="text-2xl font-bold text-alisa-gray-900">131</p>
                  <p className="text-sm text-green-600 mt-1">+15 this week</p>
                </div>
                <Users className="w-8 h-8 text-alisa-blue" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-alisa-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-alisa-gray-600">
                    Success Rate
                  </p>
                  <p className="text-2xl font-bold text-alisa-gray-900">92%</p>
                  <p className="text-sm text-green-600 mt-1">+1% this month</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        );

      case "Conversion":
        return (
          <div className="bg-white rounded-lg border border-alisa-gray-200 p-6">
            <h3 className="text-lg font-semibold text-alisa-gray-900 mb-4">
              Conversion Analysis
            </h3>
            <div className="space-y-4">
              {funnelStages.map((stage, index) => (
                <div
                  key={stage.id}
                  className="flex items-center justify-between p-4 bg-alisa-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-alisa-gray-900">
                      {stage.name}
                    </h4>
                    <p className="text-sm text-alisa-gray-600">
                      {stage.count} suppliers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-alisa-gray-900">
                      {stage.percentage}%
                    </p>
                    <p className="text-sm text-alisa-gray-600">
                      conversion rate
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-alisa-gray-900">
            Funnel Management
          </h1>
          <p className="text-alisa-gray-600 mt-1 text-sm md:text-base">
            Track and optimize your supplier onboarding process
          </p>
        </div>
        <button className="px-4 py-2 bg-alisa-blue text-white rounded-md hover:bg-blue-600 text-sm md:text-base">
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white rounded-lg p-4 md:p-6 border border-alisa-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-alisa-gray-600">
                Total in Pipeline
              </p>
              <p className="text-xl md:text-2xl font-bold text-alisa-gray-900">
                131
              </p>
            </div>
            <Users className="w-8 h-8 text-alisa-blue" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 border border-alisa-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-alisa-gray-600">
                This Month
              </p>
              <p className="text-xl md:text-2xl font-bold text-alisa-gray-900">
                23
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 border border-alisa-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-alisa-gray-600">
                Stalled Items
              </p>
              <p className="text-xl md:text-2xl font-bold text-alisa-gray-900">
                7
              </p>
            </div>
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-6 border border-alisa-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-alisa-gray-600">
                Avg. Days
              </p>
              <p className="text-xl md:text-2xl font-bold text-alisa-gray-900">
                24
              </p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-alisa-gray-200">
        <nav className="flex space-x-4 md:space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-2 md:px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "border-alisa-blue text-alisa-blue"
                  : "border-transparent text-alisa-gray-500 hover:text-alisa-gray-700 hover:border-alisa-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
