import type { SolucaoCard } from '../types';

const cards: SolucaoCard[] = [
  {
    etiqueta: 'DESAFIO ÓPTICO',
    titulo: 'A Câmera Inteligente',
    descricao:
      'A JoviSmartCam tem como proposta otimizar e facilitar a captura de imagens no momento de estudo, seja uma foto de anotações no caderno, na lousa ou até mesmo no post-it. Ela analisa o tipo de estrutura em que as anotações estão e ajusta a imagem com ajuda da IA para capturar a melhor leitura da sua escrita.',
    largo: true,
  },
  {
    etiqueta: 'TRANSCRIÇÃO DE TEXTO',
    titulo: 'Digitalização Prática',
    descricao:
      'Com o simples toque de um botão, o estudante consegue digitalizar as anotações e trazer o texto diretamente para o dispositivo dele, permitindo que ele organize, salve ou compartilhe os textos através do APP de Estudos.',
  },
  {
    etiqueta: 'UX SIMPLES',
    titulo: 'Interface intuitiva e simples',
    descricao:
      'Um dos nossos objetivos é alcançar tanto quem já tem familiaridade com tecnologia quanto os que não têm; por isso, pensamos em uma interface simples e intuitiva.',
  },
  {
    etiqueta: 'A GRANDE JOGADA',
    titulo: 'Como Funciona o Aplicativo de Estudos',
    descricao:
      'Ao digitalizar as imagens na JoviSmartCam, o conteúdo da imagem é analisado e a IA determina qual o assunto, contexto e prioridade das anotações. Depois da análise, já no aplicativo, a sua imagem estará disponível na pasta da respectiva matéria, com várias informações, como, por exemplo: Resumo, Prioridade de Estudo, Dicas de Assuntos Relacionados e Materiais de Aprofundamento.',
    largo: true,
    destaque: true,
  },
];

export function Solucao() {
  return (
    <section id="solucao" className="secao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 01. SOLUÇÃO ]</span>
          <h2>A Solução Tecnológica</h2>
          <p>Solucionando as dores de quem tem vontade de crescer aprendendo.</p>
        </header>

        <div className="grade-solucoes">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`cartao-solucao ${card.largo ? 'cartao-largo' : ''} ${
                card.destaque ? 'cartao-destaque' : ''
              }`}
            >
              <div className="etiqueta-cartao">{card.etiqueta}</div>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
              {card.largo && index === 0 && (
                <div className="barra-telemetria">
                  <span>Estágio de Desenvolvimento:</span>
                  <div className="preenchimento-barra preenchimento-vermelho"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
