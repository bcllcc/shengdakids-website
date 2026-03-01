import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Brands from './sections/Brands';
import About from './sections/About';
import Products from './sections/Products';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <Brands />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
