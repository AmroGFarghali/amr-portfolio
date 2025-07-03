import Hero from "./components/Hero";
import Header from "./components/ui/header";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <div className="h-screen max-w-2xl space-y-12 mx-auto px-7 mt-6 md:mt-15">
      <Header />
      <Hero />
      <WorkSection />
    </div>
  );
}

export default App;
