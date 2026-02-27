import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { EditModeProvider } from "./components/AdminToolbar";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AdminToolbar from "./components/AdminToolbar";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import Commands from "./pages/Commands";
import Changelog from "./pages/Changelog";
import Faq from "./pages/Faq";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <EditModeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/commands" element={<Commands />} />
                <Route path="/changelog" element={<Changelog />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
            <AdminToolbar />
          </BrowserRouter>
        </TooltipProvider>
      </EditModeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
