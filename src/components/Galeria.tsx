const itensGaleria = [
  {
    titulo: 'FIGMA - Protótipo da Interface da Câmera',
    legenda: 'Seleção de diretório',
    metadados: 'JoviSmartCam',
    // Placeholder - em produção use imagens reais do protótipo
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58d7ffe?w=600&h=400&fit=crop',
    alt: 'Protótipo da interface da câmera',
  },
  {
    titulo: 'FIGMA - Protótipo do APP de Estudos',
    legenda: 'Tela inicial ao abrir o APP',
    metadados: 'APP de Estudos',
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    alt: 'Tela inicial do app de estudos',
  },
  {
    titulo: 'FIGMA - Protótipo do APP de Estudos',
    legenda: 'Demonstração da tela de resumo de estudos',
    metadados: 'APP de Estudos',
    src: 'https://images.unsplash.com/photo-1456513080080-7e9e9a814ea0?w=600&h=400&fit=crop',
    alt: 'Tela de resumo do app',
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="secao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 03. GALERIA ]</span>
          <h2>Galeria da JoviStudy</h2>
          <p>Confira alguns dos nossos protótipos:</p>
        </header>

        <div className="grade-galeria">
          {itensGaleria.map((item, index) => (
            <figure key={index} className="quadro-galeria">
              <div className="lente-visor">
                {index === 0 && <div className="reticulo centro"></div>}
                <div className="metadados">{item.metadados}</div>
                {index === 0 && <div className="suporte-foco"></div>}
              </div>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                <strong>{item.titulo}</strong> {item.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
