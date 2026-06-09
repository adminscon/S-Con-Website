import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkedWith from './components/WorkedWith';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkedWith />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;