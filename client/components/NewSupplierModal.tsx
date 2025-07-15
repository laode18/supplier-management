import React, { useState } from "react";
import { X, Plus, Building2 } from "lucide-react";

interface NewSupplierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Address {
  id: string;
  name: string;
  address: string;
  main: boolean;
}

interface Contact {
  id: string;
  name: string;
  jobPosition: string;
  email: string;
  phone: string;
  mobile: string;
  main: boolean;
}

interface Group {
  id: string;
  groupName: string;
  value: string;
  active: boolean;
}

export default function NewSupplierModal({
  isOpen,
  onClose,
}: NewSupplierModalProps) {
  const [activeTab, setActiveTab] = useState("Address");
  const [supplierName, setSupplierName] = useState("PT Setroom Indonesia");
  const [nickName, setNickName] = useState("Setroom");

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Head Office",
      address: "Fatmawati Raya St, 123",
      main: true,
    },
    {
      id: "2",
      name: "Branch Office",
      address: "Ciawi, 99",
      main: false,
    },
  ]);

  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Albert",
      jobPosition: "CEO",
      email: "einstein@gmail.com",
      phone: "021.123456",
      mobile: "0811234567",
      main: true,
    },
    {
      id: "2",
      name: "Isaac",
      jobPosition: "Mgr Proc",
      email: "newton@gmail.com",
      phone: "021.654321",
      mobile: "0811765432",
      main: false,
    },
  ]);

  const [groups, setGroups] = useState<Group[]>([
    {
      id: "1",
      groupName: "Industry",
      value: "Manufacture",
      active: true,
    },
    {
      id: "2",
      groupName: "Telkom Group",
      value: "Non Telkom Group",
      active: true,
    },
  ]);

  const tabs = ["Address", "Contacts", "Groups", "Material List", "Others"];

  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Address":
        return (
          <div className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block border border-alisa-gray-300 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-alisa-gray-200">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      <Plus className="w-4 h-4 text-alisa-blue cursor-pointer" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Address
                    </th>
                    <th className="w-20 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Main
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-alisa-gray-200">
                  {addresses.map((address, index) => (
                    <tr key={address.id} className="bg-white">
                      <td className="px-4 py-3">
                        <div className="w-6 h-6 bg-alisa-gray-300 rounded flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-alisa-gray-600" />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {address.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {address.address}
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            address.main
                              ? "bg-alisa-blue border-alisa-blue"
                              : "border-alisa-gray-300"
                          }`}
                        >
                          {address.main && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center justify-between p-3 bg-alisa-gray-100 rounded-lg">
                <span className="text-sm font-medium text-alisa-gray-700">
                  Addresses
                </span>
                <Plus className="w-4 h-4 text-alisa-blue cursor-pointer" />
              </div>
              {addresses.map((address, index) => (
                <div
                  key={address.id}
                  className="border border-alisa-gray-300 rounded-lg p-4 bg-white"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-alisa-gray-300 rounded flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4 text-alisa-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-alisa-gray-900">
                          {address.name}
                        </div>
                        <div className="text-sm text-alisa-gray-700 mt-1">
                          {address.address}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-alisa-gray-500">Main</span>
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          address.main
                            ? "bg-alisa-blue border-alisa-blue"
                            : "border-alisa-gray-300"
                        }`}
                      >
                        {address.main && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Contacts":
        return (
          <div className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden lg:block border border-alisa-gray-300 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-alisa-gray-200">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      <Plus className="w-4 h-4 text-alisa-blue cursor-pointer" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Job Position
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Mobile
                    </th>
                    <th className="w-20 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Main
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-alisa-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={contact.id} className="bg-white">
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {contact.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {contact.jobPosition}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {contact.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {contact.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {contact.mobile}
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            contact.main
                              ? "bg-alisa-blue border-alisa-blue"
                              : "border-alisa-gray-300"
                          }`}
                        >
                          {contact.main && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-3">
              <div className="flex items-center justify-between p-3 bg-alisa-gray-100 rounded-lg">
                <span className="text-sm font-medium text-alisa-gray-700">
                  Contacts
                </span>
                <Plus className="w-4 h-4 text-alisa-blue cursor-pointer" />
              </div>
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className="border border-alisa-gray-300 rounded-lg p-4 bg-white"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-alisa-gray-900">
                        {index + 1}. {contact.name}
                      </span>
                      <span className="text-xs bg-alisa-gray-100 px-2 py-1 rounded">
                        {contact.jobPosition}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-alisa-gray-500">Main</span>
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          contact.main
                            ? "bg-alisa-blue border-alisa-blue"
                            : "border-alisa-gray-300"
                        }`}
                      >
                        {contact.main && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-alisa-gray-600">
                    <div>Email: {contact.email}</div>
                    <div>Phone: {contact.phone}</div>
                    <div>Mobile: {contact.mobile}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Groups":
        return (
          <div className="space-y-4">
            <div className="border border-alisa-gray-300 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-alisa-gray-200">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      #
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Group Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Value
                    </th>
                    <th className="w-20 px-4 py-3 text-left text-sm font-medium text-alisa-gray-700">
                      Active
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-alisa-gray-200">
                  {groups.map((group, index) => (
                    <tr key={group.id} className="bg-white">
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {group.groupName}
                      </td>
                      <td className="px-4 py-3 text-sm text-alisa-gray-900">
                        {group.value}
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-4 h-4 border border-alisa-gray-400 rounded flex items-center justify-center">
                          {group.active && (
                            <div className="w-2 h-2 bg-alisa-gray-600 rounded"></div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-40 text-alisa-gray-500">
            Content for {activeTab} tab
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-alisa-gray-200">
          <h2 className="text-lg font-semibold text-alisa-gray-900">
            New Supplier
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-alisa-gray-100 rounded"
          >
            <X className="w-5 h-5 text-alisa-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Top Section - Logo and Basic Info */}
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
            {/* Logo Upload */}
            <div className="w-32 h-32 mx-auto md:mx-0 border-2 border-dashed border-alisa-gray-300 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 border border-alisa-gray-300 rounded flex items-center justify-center">
                  <span className="text-alisa-gray-400 text-xs">Logo</span>
                </div>
              </div>
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
                  onChange={(e) => setSupplierName(e.target.value)}
                  className="w-full px-3 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-alisa-gray-700 mb-2">
                  Nick Name
                </label>
                <input
                  type="text"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-alisa-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alisa-blue focus:border-transparent"
                />
              </div>
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
