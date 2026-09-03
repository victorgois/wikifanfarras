import Header from './components/Header';
import Hero from './components/Hero';
import RainbowRule from './components/RainbowRule';
import About from './components/About';
import WikiUniverse from './components/WikiUniverse';
import Gallery from './components/Gallery';
import Repertoire from './components/Repertoire';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <RainbowRule />
        <About />
        <RainbowRule />
        <WikiUniverse />
        <RainbowRule />
        <Gallery />
        <RainbowRule />
        <Repertoire />
        <RainbowRule />
        <Timeline />
        <RainbowRule />
        <Stats />
        <RainbowRule />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
