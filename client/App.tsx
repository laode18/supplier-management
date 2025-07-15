import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SupplierList from "./pages/SupplierList";
import SupplierDetail from "./pages/SupplierDetail";
import FunnelManagement from "./pages/FunnelManagement";
import FunnelPipeline from "./pages/FunnelPipeline";
import FunnelAnalytics from "./pages/FunnelAnalytics";
import ReviewApprovals from "./pages/ReviewApprovals";
import Configurations from "./pages/Configurations";
import HelpSupport from "./pages/HelpSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<SupplierList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suppliers" element={<SupplierList />} />
            <Route path="/supplier/:id" element={<SupplierDetail />} />
            <Route path="/funnel-management" element={<FunnelManagement />} />
            <Route path="/funnel-pipeline" element={<FunnelPipeline />} />
            <Route path="/funnel-analytics" element={<FunnelAnalytics />} />
            <Route path="/review-approvals" element={<ReviewApprovals />} />
            <Route path="/configurations" element={<Configurations />} />
            <Route path="/help-support" element={<HelpSupport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
