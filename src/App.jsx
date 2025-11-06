import HeroSection from './components/HeroSection.jsx';
import ServerInfo from './components/ServerInfo.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-950 to-slate-950 text-white">
      <HeroSection />
      <ServerInfo />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
