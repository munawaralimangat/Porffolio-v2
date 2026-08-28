import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AiAssisted } from './components/AiAssisted';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] font-sans transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;
