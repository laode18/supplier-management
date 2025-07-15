import React, { useState } from "react";

interface Stage {
  id: string;
  name: string;
  sla: number;
  uom: string;
  active: boolean;
}

interface Workflow {
  id: string;
  name: string;
  stages: string;
  active: boolean;
}

export default function Configurations() {
  const [activeTab, setActiveTab] = useState("Stages");
  const [selectedStage, setSelectedStage] = useState("01: Supplier Creation");

  const [stages, setStages] = useState<Stage[]>([
    { id: "01", name: "Draft", sla: 24, uom: "hours", active: true },
    { id: "02", name: "In Review", sla: 24, uom: "hours", active: true },
    { id: "03", name: "In Assessment", sla: 24, uom: "hours", active: true },
    { id: "04", name: "Active", sla: 0, uom: "hours", active: true },
  ]);

  const [workflows] = useState<Workflow[]>([
    {
      id: "1",
      name: "Supplier Creation",
      stages: "01, 02, 03",
      active: true,
    },
    {
      id: "2",
      name: "Supplier Assessment",
      stages: "01, 02, 03",
      active: true,
    },
    {
      id: "3",
      name: "Block / Unblock Supplier",
      stages: "01, 02, 03",
      active: true,
    },
  ]);

  const tabs = ["Stages", "Workflows", "Others"];

  const totalHours = stages.reduce((total, stage) => total + stage.sla, 0);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Stages":
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            {/* Stages Table */}
            <div className="bg-white rounded-lg border border-alisa-gray-200">
              <div className="p-4 border-b border-alisa-gray-200 flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium text-alisa-gray-900">
                  Stages
                </h3>
                <button className="text-xs md:text-sm text-alisa-blue hover:text-blue-600">
                  Edit / Save
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-alisa-gray-100">
                    <tr>
                      <th className="w-12 px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-alisa-gray-700">
                        #
                      </th>
                      <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-alisa-gray-700">
                        ID
                      </th>
                      <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-alisa-gray-700">
                        Name
                      </th>
                      <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-alisa-gray-700">
                        Stages
                      </th>
                      <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-alisa-gray-700">
                        Active
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-alisa-gray-200">
                    {workflows.map((workflow, index) => (
                      <tr
                        key={workflow.id}
                        className={`cursor-pointer ${
                          selectedStage === workflow.name
                            ? "bg-alisa-blue-light"
                            : "hover:bg-alisa-gray-50"
                        }`}
                        onClick={() => setSelectedStage(workflow.name)}
                      >
                        <td className="px-2 md:px-4 py-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-alisa-blue rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">
                              {workflow.id}
                            </span>
                          </div>
                        </td>
                        <td className="px-2 md:px-4 py-3 text-xs md:text-sm text-alisa-gray-900">
                          0{workflow.id}
                        </td>
                        <td className="px-2 md:px-4 py-3">
                          <span className="text-xs md:text-sm text-alisa-blue underline">
                            {workflow.name}
                          </span>
                        </td>
                        <td className="px-2 md:px-4 py-3 text-xs md:text-sm text-alisa-gray-900">
                          {workflow.stages}
                        </td>
                        <td className="px-2 md:px-4 py-3">
                          <input
                            type="checkbox"
                            checked={workflow.active}
                            readOnly
                            className="w-3 h-3 md:w-4 md:h-4"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stage Details */}
            <div className="bg-white rounded-lg border border-alisa-gray-200">
              <div className="p-4 border-b border-alisa-gray-200 flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium text-alisa-gray-900">
                  Stage's Detail
                </h3>
                <button className="text-xs md:text-sm text-alisa-blue hover:text-blue-600">
                  Edit / Save
                </button>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                    Stage Name :
                  </label>
                  <input
                    type="text"
                    value={selectedStage}
                    readOnly
                    className="w-full px-3 py-2 border border-alisa-gray-300 rounded-md bg-alisa-gray-50"
                  />
                </div>

                <div className="overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-alisa-gray-100">
                      <tr>
                        <th className="w-12 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          #
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          ID
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          SLA
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          UoM
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                          Active
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-alisa-gray-200">
                      {stages.map((stage, index) => (
                        <tr key={stage.id}>
                          <td className="px-4 py-3">
                            <div className="w-6 h-6 bg-alisa-blue rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">
                                {index + 1}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-alisa-gray-900">
                            {stage.id}
                          </td>
                          <td className="px-4 py-3 text-sm text-alisa-gray-900">
                            {stage.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-alisa-gray-900">
                            {stage.sla || ""}
                          </td>
                          <td className="px-4 py-3 text-sm text-alisa-gray-900">
                            {stage.uom}
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              checked={stage.active}
                              readOnly
                              className="w-4 h-4"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div></div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-alisa-gray-700">
                        Total
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-alisa-gray-900">
                        {totalHours}
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="text-center">
                      <div className="text-sm text-alisa-gray-900">hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Workflows":
        return (
          <div className="flex items-center justify-center h-64 text-alisa-gray-500">
            Workflows configuration content
          </div>
        );

      case "Others":
        return (
          <div className="flex items-center justify-center h-64 text-alisa-gray-500">
            Other configuration content
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-alisa-gray-900">
          Configurations
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-4 md:mb-6">
        <div className="border-b border-alisa-gray-200">
          <nav className="flex space-x-4 md:space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-2 md:px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-alisa-blue text-alisa-blue bg-alisa-blue-light"
                    : "border-transparent text-alisa-gray-500 hover:text-alisa-gray-700 hover:border-alisa-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
