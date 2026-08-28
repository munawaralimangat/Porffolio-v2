import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AiAssisted } from './components/AiAssisted';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white selection:text-black font-sans">
      {/* Floating Apple-style Pill Navbar */}
      <Navbar />

      {/* Main Structural Page Layout */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <AiAssisted />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
