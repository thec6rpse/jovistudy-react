export function Footer() {
  return (
    <footer className="rodape">
      <div className="container grade-rodape">
        <div className="coluna-rodape">
          <span className="logo-rodape">
            Jovi<span>Study</span>
          </span>
          <p>
            Site desenvolvido para a Sprint 3 - Front-End Design & Web Development • FIAP 2026.
          </p>
        </div>
        <div className="coluna-status">
          <span className="indicador-status">
            <span className="pulso-verde"></span> Câmeras prontas para os estudos!
          </span>
          <p className="direitos">© 2026 JoviStudy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
