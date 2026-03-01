import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Brands from './sections/Brands';
import Products from './sections/Products';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-brand-bg text-brand-text font-sans antialiased overflow-x-hidden selection:bg-brand-accent selection:text-white">
                <Navigation />

                <main>
                    <Hero />

                    <About />
                    <Brands />
                    <Products />

                    <Contact />
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
