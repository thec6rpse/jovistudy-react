import { useState } from 'react';

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

export function Header({ onNavClick }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setMenuAberto(false);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onNavClick?.(section);
  };

  return (
    <header className="cabecalho">
      <div className="caixa-cabecalho">
        <div className="marca">
          <div className="indicador-sensor">
            <span className="ponto-pulsante"></span> EM BETA
          </div>
          <a href="#" className="logo-marca" onClick={(e) => e.preventDefault()}>
            <span>Jovi</span>Study
          </a>
        </div>

        <button
          className="botao-menu-mobile"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        <nav className={`navegacao ${menuAberto ? 'aberta' : ''}`} aria-label="Navegação principal">
          <ul className="trilha-nav">
            <li>
              <a href="#solucao" onClick={(e) => handleClick(e, 'solucao')}>
                <span className="num-nav">01</span> Solução
              </a>
            </li>
            <li>
              <a href="#publico-alvo" onClick={(e) => handleClick(e, 'publico-alvo')}>
                <span className="num-nav">02</span> Público-Alvo
              </a>
            </li>
            <li>
              <a href="#galeria" onClick={(e) => handleClick(e, 'galeria')}>
                <span className="num-nav">03</span> Galeria
              </a>
            </li>
            <li>
              <a href="#equipe" onClick={(e) => handleClick(e, 'equipe')}>
                <span className="num-nav">04</span> Equipe
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="botao-nav"
                onClick={(e) => handleClick(e, 'contato')}
              >
                Contate-nos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
