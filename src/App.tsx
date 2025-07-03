import EducationSection from "./components/EducationSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Header from "./components/ui/header";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <div className="min-h-screen max-w-2xl space-y-12 mx-auto px-7 py-18">
      <Header />
      <Hero />
      <WorkSection />
      <EducationSection />
      <Skills />
      <ProjectsSection />
    </div>
  );
}

export default App;
