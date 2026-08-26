import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import OnlineStore from "./pages/OnlineStore";
import ELearningPlatform from "./pages/ELearningPlatform";
import AIBlockchain from "./pages/AIBlockchain";
import DesignQA from "./pages/DesignQA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import About from "./pages/About";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services/software-development"} component={SoftwareDevelopment} />
        <Route path={"/services/online-store"} component={OnlineStore} />
        <Route path={"/services/elearning-platform"} component={ELearningPlatform} />
        <Route path={"/services/ai-blockchain"} component={AIBlockchain} />
        <Route path={"/services/design-qa"} component={DesignQA} />
        <Route path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route path={"/terms-of-use"} component={TermsOfUse} />
        <Route path={"/cookie-policy"} component={CookiePolicy} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/services/:slug"} component={ServiceDetail} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/careers"} component={Careers} />
        <Route path={"/about"} component={About} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
