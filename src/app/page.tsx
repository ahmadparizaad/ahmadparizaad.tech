// pages/index.js
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import SmoothScroll from '../components/SmoothScroll';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <SmoothScroll>
      <Navigation />
      <main className='bg-white' data-scroll-container>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </SmoothScroll>
  );
};

export default Home;