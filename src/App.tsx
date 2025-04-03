import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoundKitPage from "./pages/SoundKitPage";
import { AllMembers } from "./pages/AllMembers";
import "./i18n";

const queryClient = new QueryClient();

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      value={i18n.language}
      className="fixed top-4 right-4 p-2 rounded-md bg-background border"
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <LanguageSwitcher />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/soundkit" element={<SoundKitPage />} />
        <Route path="/all-members" element={<AllMembers />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
