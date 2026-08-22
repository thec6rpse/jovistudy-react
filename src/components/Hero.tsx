export function Hero() {
  // Uso de Math para gerar um valor "aleatório" de produtividade (demonstração do requisito)
  const produtividadeScore = Math.min(100, Math.round(Math.random() * 30 + 70));

  return (
    <section className="secao-destaque">
      <div className="canto topo-esquerda"></div>
      <div className="canto topo-direita"></div>
      <div className="container container-destaque">
        <div className="etiqueta-destaque">SPRINT 03 // FRONT & WEB DEVELOPMENT</div>
        <h1 className="titulo-destaque">
          Sua câmera inteligente.
          <br />
          <span className="texto-gradiente">Capturas práticas e resumos precisos.</span>
        </h1>
        <p className="subtitulo-destaque">
          A Jovi SmartCam chegou para deixar o dia a dia dos estudantes mais prático e produtivo.
        </p>
        <div className="metricas-destaque">
          <div className="item-metrica">
            <span className="valor-metrica">Aplicativo</span>
            <span className="rotulo-metrica">Com organização de estudos de forma automática</span>
          </div>
          <div className="divisor-metrica"></div>
          <div className="item-metrica">
            <span className="valor-metrica">Digitalização</span>
            <span className="rotulo-metrica">Com análise de conteúdo e definição de prioridade</span>
          </div>
          <div className="divisor-metrica"></div>
          <div className="item-metrica">
            <span className="valor-metrica">Praticidade</span>
            <span className="rotulo-metrica">Fácil de usar para todas as pessoas</span>
          </div>
        </div>
        <p className="score-demo">
          Score de produtividade estimado (Math.random): <strong>{produtividadeScore}%</strong>
        </p>
      </div>
    </section>
  );
}
