import React, { useState } from "react";
import { X, Building2, Upload, User, MessageCircle } from "lucide-react";

interface BlockSupplierModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplierName?: string;
  nickName?: string;
  isBlocked?: boolean;
}

interface Document {
  id: string;
  name: string;
  createdAt: string;
}

interface HistoryItem {
  id: string;
  time: string;
  action: string;
  user: string;
  description: string;
  type: "block" | "unblock";
}

export default function BlockSupplierModal({
  isOpen,
  onClose,
  supplierName = "",
  nickName = "",
  isBlocked = false,
}: BlockSupplierModalProps) {
  const [activeTab, setActiveTab] = useState("Reason");
  const [reason, setReason] = useState("");

  const [documents] = useState<Document[]>([
    {
      id: "1",
      name: "Test1.pdf",
      createdAt: "Jan 01, 2025 09:25:14",
    },
    {
      id: "2",
      name: "Test2.pdf",
      createdAt: "Jan 01, 2025 09:27:38",
    },
  ]);

  const [history] = useState<HistoryItem[]>([
    {
      id: "1",
      time: "12:35:28",
      action: "Unblock Supplier",
      user: "UserName",
      description: "Update: Supplier unblocked",
      type: "unblock",
    },
    {
      id: "2",
      time: "10:27:16",
      action: "Block Supplier",
      user: "UserName",
      description: "Supplier blocked",
      type: "block",
    },
  ]);

  const tabs = ["Reason", "Documents", "History"];

  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Reason":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                {isBlocked
                  ? "Unblock Supplier Reason"
                  : "Block Supplier Reason"}
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={
                  isBlocked
                    ? "Unblock Supplier Reason"
                    : "Block Supplier Reason"
                }
                className="w-full h-40 px-3 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue focus:border-transparent resize-none"
              />
            </div>
          </div>
        );

      case "Documents":
        return (
          <div className="space-y-6">
            {/* Document List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-alisa-gray-700">
                  Name ↑
                </div>
                <div className="text-sm font-medium text-alisa-gray-700">
                  Created at
                </div>
              </div>

              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between py-2 border-b border-alisa-gray-200"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-xs text-red-600">📄</span>
                      </div>
                      <span className="text-sm text-alisa-gray-900">
                        {doc.name}
                      </span>
                    </div>
                    <span className="text-sm text-alisa-gray-500">
                      {doc.createdAt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Area */}
            <div>
              <label className="block text-sm font-medium text-alisa-gray-700 mb-3">
                Upload Attachment
              </label>
              <div className="border-2 border-dashed border-alisa-gray-300 rounded-lg p-4 md:p-8">
                <div className="text-center">
                  <Upload className="w-6 h-6 md:w-8 md:h-8 text-alisa-gray-400 mx-auto mb-4" />
                  <div className="text-xs md:text-sm text-alisa-gray-600 mb-2">
                    Click or drag file to this area to upload
                  </div>
                  <div className="text-xs text-alisa-gray-500">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "History":
        return (
          <div className="space-y-4">
            {history.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="text-sm text-alisa-gray-500 w-16">
                  {item.time}
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-alisa-gray-300 mt-1 flex-shrink-0">
                  {item.type === "unblock" && (
                    <div className="w-2 h-2 bg-alisa-blue rounded-full m-0.5"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-alisa-gray-900 mb-1">
                    {item.action}
                  </div>
                  <div className="flex items-center space-x-1 mb-1">
                    <User className="w-3 h-3 text-alisa-blue" />
                    <span className="text-sm text-alisa-blue underline">
                      {item.user}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3 text-alisa-gray-400" />
                    <span className="text-sm text-alisa-gray-500">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-alisa-gray-200">
          <h2 className="text-lg font-semibold text-alisa-gray-900">
            Block Supplier
          </h2>
          <div className="flex items-center space-x-2">
            {isBlocked && (
              <button className="px-4 py-2 bg-alisa-blue text-white rounded-md hover:bg-blue-600 text-sm">
                Unblock
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-alisa-gray-100 rounded"
            >
              <X className="w-5 h-5 text-alisa-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Top Section - Logo and Basic Info */}
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
            {/* Logo Upload */}
            <div className="w-24 h-24 md:w-32 md:h-32 border border-alisa-gray-300 rounded-lg flex flex-col items-center justify-center mx-auto md:mx-0 flex-shrink-0">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-alisa-gray-400 mb-2" />
              <span className="text-xs text-alisa-gray-400">Logo</span>
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                  Supplier Name
                </label>
                <input
                  type="text"
                  value={supplierName}
                  readOnly
                  className="w-full px-3 py-2 border border-alisa-gray-300 rounded-md bg-alisa-gray-50"
                />
              </div>
              {!isBlocked && (
                <div>
                  <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                    Supplier Category
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-64 px-3 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue"
                  />
                </div>
              )}
              {isBlocked && (
                <div>
                  <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                    Nick Name
                  </label>
                  <input
                    type="text"
                    value={nickName}
                    readOnly
                    className="w-full md:w-64 px-3 py-2 border border-alisa-gray-300 rounded-md bg-alisa-gray-50"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-alisa-gray-200">
              <nav className="flex space-x-2 md:space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-2 md:px-4 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
          <div className="mb-6 min-h-[300px]">{renderTabContent()}</div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-3 px-4 md:px-6 py-4 border-t border-alisa-gray-200 bg-alisa-gray-50">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-alisa-gray-700 bg-white border border-alisa-gray-300 rounded-md hover:bg-alisa-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-alisa-blue rounded-md hover:bg-blue-600 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
