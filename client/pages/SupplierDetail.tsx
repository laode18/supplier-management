import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Edit,
  Search,
  Download,
  Plus,
  MoreHorizontal,
  Star,
  ChevronDown,
} from "lucide-react";
import BlockSupplierModal from "../components/BlockSupplierModal";

export default function SupplierDetail() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeSubTab, setActiveSubTab] = useState("Address");
  const [showBlockModal, setShowBlockModal] = useState(false);

  const tabs = [
    "Overview",
    "Assessment",
    "Material Catalog",
    "Orders",
    "Invoices",
    "Projects",
    "Services",
    "History",
  ];

  const subTabs = ["Address", "Contacts", "Groups", "Material List", "Others"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return renderOverviewContent();
      case "Assessment":
        return renderAssessmentContent();
      case "Material Catalog":
        return renderMaterialCatalogContent();
      case "Orders":
        return renderOrdersContent();
      case "Invoices":
        return renderInvoicesContent();
      default:
        return (
          <div className="flex items-center justify-center h-64 text-alisa-gray-500">
            Content for {activeTab} tab
          </div>
        );
    }
  };

  const renderOverviewContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Sub Tabs Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Sub Tabs */}
        <div className="border-b border-alisa-gray-200">
          <nav className="flex space-x-6">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`py-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeSubTab === tab
                    ? "border-alisa-blue text-alisa-blue bg-alisa-blue-light"
                    : "border-transparent text-alisa-gray-500 hover:text-alisa-gray-700 hover:border-alisa-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Sub Tab Content */}
        {activeSubTab === "Material List" && (
          <div className="bg-white rounded-lg border border-alisa-gray-200">
            <div className="p-4 border-b border-alisa-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-medium text-alisa-gray-900">
                Materials provided by Supplier
              </h3>
              <button className="text-sm text-alisa-blue hover:text-blue-600">
                Edit / Save
              </button>
            </div>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="bg-alisa-gray-100">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      <Plus className="w-4 h-4 text-alisa-blue" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Material Group
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Material ID
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-alisa-gray-200">
                  <tr>
                    <td className="px-4 py-3">⋮⋮</td>
                    <td className="px-4 py-3">
                      <select className="w-full border border-alisa-gray-300 rounded px-2 py-1">
                        <option>IT - Device</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full border border-alisa-gray-300 rounded px-2 py-1">
                        <option>Computer / Notebook</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input type="checkbox" checked className="w-4 h-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">⋮⋮</td>
                    <td className="px-4 py-3">
                      <select className="w-full border border-alisa-gray-300 rounded px-2 py-1">
                        <option>IT - Device</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full border border-alisa-gray-300 rounded px-2 py-1">
                        <option>Computer / PC</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input type="checkbox" checked className="w-4 h-4" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSubTab === "Others" && (
          <div className="bg-white rounded-lg border border-alisa-gray-200">
            <div className="p-4 border-b border-alisa-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-medium text-alisa-gray-900">
                Other Informations
              </h3>
              <button className="text-sm text-alisa-blue hover:text-blue-600">
                Edit / Save
              </button>
            </div>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="bg-alisa-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Attribute Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Value
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-alisa-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900">
                      Holding Vendor
                    </td>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900"></td>
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900">
                      SAP Vendor Id
                    </td>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900">
                      4100012
                    </td>
                    <td className="px-4 py-3">
                      <input type="checkbox" checked className="w-4 h-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900">
                      NPWP
                    </td>
                    <td className="px-4 py-3 text-sm text-alisa-gray-900">
                      1.000.000-123
                    </td>
                    <td className="px-4 py-3">
                      <input type="checkbox" checked className="w-4 h-4" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Outstandings Table */}
        <div className="bg-white rounded-lg border border-alisa-gray-200">
          <div className="p-4 border-b border-alisa-gray-200">
            <h3 className="text-lg font-medium text-alisa-gray-900">
              Outstandings
            </h3>
          </div>
          <div className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-alisa-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                    Invoice Number
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                    Project Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                    Aging (days)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-alisa-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-alisa-gray-900">1</td>
                  <td className="px-4 py-3 text-sm text-alisa-gray-900">
                    INV1234
                  </td>
                  <td className="px-4 py-3 text-sm text-alisa-gray-900">
                    Project ABC
                  </td>
                  <td className="px-4 py-3 text-sm text-alisa-gray-900">
                    123.000
                  </td>
                  <td className="px-4 py-3 text-sm text-alisa-gray-900">34</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Column - Stage Progress & Performance */}
      <div className="space-y-6">
        {/* Stage Progress */}
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-alisa-gray-900">
              Stage: Supplier Creation
            </h3>
            <span className="text-xs text-alisa-gray-500">SLA: 72 hour(s)</span>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-alisa-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-alisa-blue mt-1">Draft</span>
            </div>
            <div className="flex-1 h-0.5 bg-alisa-blue mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-alisa-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-alisa-blue mt-1">In Review</span>
            </div>
            <div className="flex-1 h-0.5 bg-alisa-gray-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-alisa-gray-300 rounded-full"></div>
              <span className="text-xs text-alisa-gray-500 mt-1">
                In Assessment
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-alisa-gray-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-alisa-gray-300 rounded-full"></div>
              <span className="text-xs text-alisa-gray-500 mt-1">Active</span>
            </div>
          </div>

          <div className="text-xs text-alisa-gray-500 mb-4">
            <div>Elapsed</div>
            <div className="font-medium">05:00:10</div>
          </div>

          <div className="mb-4">
            <label className="block text-xs text-alisa-gray-500 mb-1">
              Notes
            </label>
            <textarea
              className="w-full border border-alisa-gray-300 rounded px-2 py-1 text-sm"
              rows={2}
            ></textarea>
          </div>

          <button className="w-full bg-alisa-blue text-white py-2 px-4 rounded text-sm hover:bg-blue-600">
            Next Stage
          </button>
        </div>

        {/* Performance Ratings */}
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <h3 className="text-sm font-medium text-alisa-gray-900 mb-4">
            Performance Ratings
          </h3>

          <div className="space-y-4">
            <div className="border border-alisa-gray-200 rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Price :</span>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Delivery Time :</span>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-alisa-gray-500">Notes</div>
              <div className="text-xs text-alisa-gray-400">
                Feb 14, 2025 by User Legal
              </div>
            </div>

            <div className="border border-alisa-gray-200 rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Price :</span>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Delivery Time :</span>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-alisa-gray-500">Notes</div>
              <div className="text-xs text-alisa-gray-400">
                Feb 12, 2025 by User Legal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMaterialCatalogContent = () => (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-alisa-gray-400" />
          <input
            type="text"
            placeholder="Search Material"
            className="w-full pl-10 pr-4 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-2 border border-alisa-gray-300 rounded-md hover:bg-alisa-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Import
          </button>
          <button className="flex items-center px-3 py-2 bg-alisa-blue text-white rounded-md hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            New Material Detail
          </button>
        </div>
      </div>

      {/* Material Catalog Table */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-alisa-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Material Detail ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Material Detail Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Material ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Price Upload Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-alisa-gray-200">
            <tr>
              <td className="px-4 py-4 text-sm text-alisa-gray-900">
                83E30041UK
              </td>
              <td className="px-4 py-4 text-sm text-alisa-gray-900">
                Lenovo Yoga #83E30041UK
              </td>
              <td className="px-4 py-4 text-sm text-alisa-gray-900">
                Computer / Notebook
              </td>
              <td className="px-4 py-4 text-sm text-alisa-gray-900">
                Rp 19.000.000
              </td>
              <td className="px-4 py-4 text-sm text-alisa-gray-900">
                01/01/2025 10:23:01
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full text-alisa-green bg-alisa-green-light">
                  Active
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center space-x-2">
                  <button className="text-alisa-blue hover:text-blue-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-alisa-gray-400 hover:text-alisa-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOrdersContent = () => (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Total Order</div>
          <div className="text-2xl font-bold text-alisa-gray-900">4,257</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">
            On Time Delivery
          </div>
          <div className="text-2xl font-bold text-alisa-gray-900">1,869</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Late Delivery</div>
          <div className="text-2xl font-bold text-alisa-gray-900">999</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">
            Order In Progress
          </div>
          <div className="text-2xl font-bold text-alisa-gray-900">999</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Pending</div>
          <div className="text-2xl font-bold text-alisa-gray-900">999</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-alisa-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Order ID (PO)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Shipment Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Order Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Estimated Delivery Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-alisa-gray-200">
            <tr>
              <td
                colSpan={4}
                className="px-4 py-8 text-center text-alisa-gray-500"
              >
                No orders found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderInvoicesContent = () => (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Total Invoices</div>
          <div className="text-2xl font-bold text-alisa-gray-900">4,257</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">In Progress</div>
          <div className="text-2xl font-bold text-alisa-gray-900">1,869</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Paid</div>
          <div className="text-2xl font-bold text-alisa-gray-900">999</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
        <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
          <div className="text-sm text-alisa-gray-600 mb-1">Outstanding</div>
          <div className="text-2xl font-bold text-alisa-gray-900">999</div>
          <div className="text-xs text-alisa-gray-500">YoY</div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-alisa-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Order ID (PO)
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Invoice No
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Received Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                Estimated Payment Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-alisa-gray-200">
            <tr>
              <td
                colSpan={4}
                className="px-4 py-8 text-center text-alisa-gray-500"
              >
                No invoices found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAssessmentContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Assessment Cards */}
      <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
        <div className="text-center mb-4">
          <h4 className="text-sm font-medium text-alisa-gray-900 mb-2">
            Overall Rating
          </h4>
          <div className="flex justify-center">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            {[4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-medium text-alisa-gray-900">
              Legal Assessment
            </h5>
            <button className="text-xs text-alisa-blue border border-alisa-blue rounded px-2 py-1">
              + New
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                <span className="text-xs text-red-600">PDF</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium">Nomor Induk Berusaha</div>
                <div className="flex">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 text-alisa-gray-300" />
                  ))}
                </div>
                <div className="text-xs text-alisa-gray-500">Notes:</div>
                <div className="text-xs text-alisa-gray-400">
                  Dec 31, 2025 by User Legal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
        <div className="text-center mb-4">
          <h4 className="text-sm font-medium text-alisa-gray-900 mb-2">
            Overall Rating
          </h4>
          <div className="flex justify-center">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            {[4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-medium text-alisa-gray-900">
              Financial Assessment
            </h5>
            <button className="text-xs text-alisa-blue border border-alisa-blue rounded px-2 py-1">
              + New
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-alisa-gray-200 p-4">
        <div className="text-center mb-4">
          <h4 className="text-sm font-medium text-alisa-gray-900 mb-2">
            Overall Rating
          </h4>
          <div className="flex justify-center">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            {[4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-alisa-gray-300" />
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-medium text-alisa-gray-900">
              Procurement Assessment
            </h5>
            <button className="text-xs text-alisa-blue border border-alisa-blue rounded px-2 py-1">
              + New
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Block Supplier Modal */}
      <BlockSupplierModal
        isOpen={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        supplierName="PT Setroom Indonesia"
        nickName="Setroom"
      />

      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-alisa-gray-500">
            <span>🏠</span>
            <span>›</span>
            <span className="text-alisa-blue">Supplier Management</span>
            <span>›</span>
            <span className="text-alisa-blue">Supplier List</span>
            <span>›</span>
            <span>Supplier Detail</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowBlockModal(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Block / Unblock
          </button>
          <div className="flex items-center space-x-1">
            <button className="p-1 hover:bg-alisa-gray-100 rounded">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-alisa-gray-100 rounded">
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-sm text-alisa-gray-500 ml-2">1 of 32</span>
          </div>
        </div>
      </div>

      {/* Supplier Info Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-alisa-gray-200 rounded-lg flex items-center justify-center">
            <Building2 className="w-8 h-8 text-alisa-gray-400" />
            <span className="text-xs text-alisa-gray-400 absolute mt-8">
              Logo
            </span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-alisa-gray-900">
              PT Setroom Indonesia
            </h1>
            <p className="text-sm text-alisa-gray-500">Fatmawati Raya St, 33</p>
            <p className="text-sm text-alisa-gray-500">Jakarta Selatan</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-green-600 text-xs">●</span>
            </div>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-alisa-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-alisa-gray-600 text-xs">●</span>
            </div>
            <span className="text-xs text-alisa-gray-600 bg-alisa-gray-100 px-2 py-1 rounded-full">
              Setroom
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-alisa-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 text-sm font-medium border-b-2 transition-colors ${
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
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
