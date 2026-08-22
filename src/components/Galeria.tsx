const itensGaleria = [
  {
    titulo: 'FIGMA - Protótipo da Interface da Câmera',
    legenda: 'Seleção de diretório',
    metadados: 'JoviSmartCam',
    // Placeholder - em produção use imagens reais do protótipo
    src: './public/img/camera.jpg',
    alt: 'Protótipo da interface da câmera',
  },
  {
    titulo: 'FIGMA - Protótipo do APP de Estudos',
    legenda: 'Tela inicial ao abrir o APP',
    metadados: 'APP de Estudos',
    src: '/public/img/app_figma.jpg',
    alt: 'Tela inicial do app de estudos',
  },
  {
    titulo: 'FIGMA - Protótipo do APP de Estudos',
    legenda: 'Demonstração da tela de resumo de estudos',
    metadados: 'APP de Estudos',
    src: '/public/img/app_figma2.jpg',
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
