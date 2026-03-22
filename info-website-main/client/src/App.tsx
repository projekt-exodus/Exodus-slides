import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const SlidesApp = lazy(() => import("@/slides/SlidesApp"));

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background text-foreground grid place-items-center text-sm text-muted-foreground">
          Inhalte werden geladen…
        </div>
      }
    >
      <Switch>
        <Route path="/" component={SlidesApp} />
        <Route path="/slides" component={SlidesApp} />
        <Route path="/info" component={Home} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
