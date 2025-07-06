import EducationSection from "./components/EducationSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/ui/header";
import { MyDock } from "./components/ui/mydock";
import WorkSection from "./components/WorkSection";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen max-w-2xl space-y-12 mx-auto px-7 py-18">
        <Header />
        <Hero />
        <WorkSection />
        <EducationSection />
        <Skills />
        <ProjectsSection />
        <MyDock />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
