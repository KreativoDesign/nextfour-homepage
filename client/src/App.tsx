import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServiceWebDesign from "./pages/ServiceWebDesign";
import ServiceBranding from "./pages/ServiceBranding";
import ServiceMarketing from "./pages/ServiceMarketing";
import ServiceBusiness from "./pages/ServiceBusiness";
import ServiceStartup from "./pages/ServiceStartup";
import ServiceCRM from "./pages/ServiceCRM";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/web-design" component={ServiceWebDesign} />
      <Route path="/services/branding" component={ServiceBranding} />
      <Route path="/services/marketing" component={ServiceMarketing} />
      <Route path="/services/business-technology" component={ServiceBusiness} />
      <Route path="/services/startup-support" component={ServiceStartup} />
      <Route path="/services/crm-management" component={ServiceCRM} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster theme="dark" position="bottom-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
