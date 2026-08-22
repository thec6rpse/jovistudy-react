import type { PublicoAlvoCard } from '../types';

const cards: PublicoAlvoCard[] = [
  {
    selo: '01',
    titulo: 'Estudantes Full-Time',
    descricao: 'Que desejam otimizar o tempo e praticidade.',
    itens: [
      'Idade entre 19 e 26 anos;',
      'Conciliam estudo, interações sociais e ambição;',
      'Sempre em movimento, buscando progresso e estabilidade.',
    ],
  },
  {
    selo: '02',
    titulo: 'Principais Benefícios',
    descricao: 'Qual o impacto real da solução?',
    itens: [
      'Digitalização Rápida e Prática;',
      'Resumos automáticos prontos para a leitura;',
      'Direcionamento de Estudos com base no conteúdo atual;',
      'Maior disposição para aprender.',
    ],
  },
  {
    selo: '03',
    titulo: 'Funcionalidades',
    descricao: 'Confira algumas das possibilidades da nossa solução:',
    itens: [
      'Status de Revisão e Checklist Geral;',
      'Criação de Grupos de Estudo (Pastas);',
      'Trilhas de estudo personalizadas feitas pela IA;',
      'Correção Ortográfica do conteúdo digitalizado.',
    ],
  },
];

export function PublicoAlvo() {
  return (
    <section id="publico-alvo" className="secao fundo-padrao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 02. PÚBLICO-ALVO ]</span>
          <h2>Público-Alvo & Proposta de Valor</h2>
          <p>Quem é o foco da nossa proposta e como se beneficiam.</p>
        </header>

        <div className="grade-alvo">
          {cards.map((card) => (
            <article key={card.selo} className="cartao-alvo">
              <div className="selo-alvo">{card.selo}</div>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
              <ul className="recursos-alvo">
                {card.itens.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
