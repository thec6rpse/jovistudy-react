import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solucao } from './components/Solucao';
import { PublicoAlvo } from './components/PublicoAlvo';
import { Galeria } from './components/Galeria';
import { Equipe } from './components/Equipe';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import './App.css';

/**
 * App principal - estrutura pai → filhos (Header, seções, Footer)
 * Componentes funcionais com TypeScript
 * Sprint 3 - Web Development / JOVI Challenge 2026
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucao />
        <PublicoAlvo />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
