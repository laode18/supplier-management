import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  Users,
  LayoutDashboard,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import antdTheme from "../config/antdTheme";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [supplierMenuOpen, setSupplierMenuOpen] = useState(false);
  const [funnelMenuOpen, setFunnelMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isFunnelActive = () =>
    isActive("/funnel-pipeline") || isActive("/funnel-analytics");
  const isSupplierActive = () =>
    isActive("/dashboard") ||
    isActive("/suppliers") ||
    isActive("/review-approvals") ||
    isActive("/configurations");

  useEffect(() => {
    if (isFunnelActive()) {
      setFunnelMenuOpen(true);
    }
  }, [location.pathname]);

  return (
    <ConfigProvider theme={antdTheme}>
      <div className="flex h-screen bg-alisa-gray-50">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        )}

        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-alisa-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-alisa-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-alisa-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-alisa-gray-900 text-lg">
                ALISA
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md text-alisa-gray-400 hover:text-alisa-gray-500 hover:bg-alisa-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {/* Dashboard utama */}
            <div
              onClick={() => navigate("/")}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                isActive("/") && !isSupplierActive()
                  ? "text-alisa-blue bg-alisa-blue-light"
                  : "text-alisa-gray-600 hover:bg-alisa-gray-100"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 mr-3" />
              Dashboard
            </div>

            {/* Supplier Management */}
            <div>
              <div
                className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                  isSupplierActive()
                    ? "text-alisa-gray-900 bg-alisa-blue-light"
                    : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                }`}
                onClick={() => setSupplierMenuOpen(!supplierMenuOpen)}
              >
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-3" />
                  Supplier Management
                </div>
                {supplierMenuOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              {supplierMenuOpen && (
                <div className="ml-7 mt-1 space-y-1">
                  <div
                    onClick={() => navigate("/dashboard")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/dashboard")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Dashboard
                  </div>
                  <div
                    onClick={() => navigate("/suppliers")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/suppliers")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Supplier List
                  </div>
                  <div
                    onClick={() => navigate("/review-approvals")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/review-approvals")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Review & Approvals
                  </div>
                  <div
                    onClick={() => navigate("/configurations")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/configurations")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Configurations
                  </div>
                </div>
              )}
            </div>

            {/* Funnel Management */}
            <div>
              <div
                className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                  isFunnelActive()
                    ? "text-alisa-gray-900 bg-alisa-blue-light"
                    : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                }`}
                onClick={() => setFunnelMenuOpen(!funnelMenuOpen)}
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10,2H14A1,1 0 0,1 15,3V4H21V6H20V19A3,3 0 0,1 17,22H7A3,3 0 0,1 4,19V6H3V4H9V3A1,1 0 0,1 10,2M10,4V4H14V4H10Z" />
                    </svg>
                  </div>
                  Funnel Management
                </div>
                {funnelMenuOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              {funnelMenuOpen && (
                <div className="ml-7 mt-1 space-y-1">
                  <div
                    onClick={() => navigate("/funnel-pipeline")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/funnel-pipeline")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Pipeline Management
                  </div>
                  <div
                    onClick={() => navigate("/funnel-analytics")}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                      isActive("/funnel-analytics")
                        ? "text-alisa-blue font-medium bg-white border-l-2 border-alisa-blue"
                        : "text-alisa-gray-600 hover:bg-alisa-gray-100"
                    }`}
                  >
                    Analytics & Reports
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-alisa-gray-200 px-4 py-4 space-y-1">
            <div
              onClick={() => navigate("/help-support")}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                isActive("/help-support")
                  ? "text-alisa-blue bg-alisa-blue-light"
                  : "text-alisa-gray-600 hover:bg-alisa-gray-100"
              }`}
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </div>

            {/* User Dropdown */}
            <div className="relative">
              <div
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">LO</span>
                  </div>
                  La Ode
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    userDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {userDropdownOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-alisa-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-alisa-gray-200">
                      <div className="text-sm font-medium text-alisa-gray-900">
                        La Ode
                      </div>
                      <div className="text-xs text-alisa-gray-500">
                        la.ode@company.com
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-alisa-gray-700 hover:bg-alisa-gray-100 flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Profile Settings
                    </button>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        console.log("Logout clicked");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          <header className="lg:hidden h-16 bg-white border-b border-alisa-gray-200 flex items-center justify-between px-4 lg:justify-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-alisa-gray-400 hover:text-alisa-gray-500 hover:bg-alisa-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="lg:hidden text-lg font-medium text-alisa-gray-900">
              Supplier Management
            </h1>

            <div className="lg:hidden w-10"></div>
          </header>

          <main className="flex-1 overflow-auto bg-alisa-gray-50">
            {children}
          </main>
        </div>
      </div>
    </ConfigProvider>
  );
}
