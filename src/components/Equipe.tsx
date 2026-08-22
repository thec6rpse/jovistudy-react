import type { MembroEquipe } from '../types';

const membros: MembroEquipe[] = [
  {
    id: '1',
    nome: 'Eduardo Menzel',
    cargo: 'Web Development',
    descricao: 'Responsável pela migração da Landing Page para React.',
    etiqueta: 'DEV-01',
  },
  {
    id: '2',
    nome: 'Guilherme de Sousa',
    cargo: 'Computational Thinking with Python',
    descricao: 'Responsável pelo desenvolvimento da solução em Python.',
    etiqueta: 'DEV-02',
  },
  {
    id: '3',
    nome: 'Guilherme Nascimento',
    cargo: 'Front-end Design',
    descricao: 'Responsável pelo desenvolvimento da Landing Page da Solução.',
    etiqueta: 'DEV-03',
  },
  {
    id: '4',
    nome: 'Luis Carlos',
    cargo: 'Software e Total Experience Design',
    descricao: 'Responsável pelo documento que apresenta de forma clara e estruturada o projeto de software.',
    etiqueta: 'DEV-04',
  },
  {
    id: '5',
    nome: 'Victor Souto',
    cargo: 'Storytelling e Inspiração Empreendedora',
    descricao: 'Responsável pelo documento detalhando os 10 tópicos do Story Canvas aplicados à empresa JOVI.',
    etiqueta: 'DEV-05',
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="secao fundo-padrao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 04. Equipe ]</span>
          <h2>Desenvolvedores do Projeto</h2>
          <p>Conheça nossa equipe!</p>
        </header>

        <div className="grade-equipe">
          {membros.map((membro) => (
            <article key={membro.id} className="cartao-equipe">
              <div className="quadro-foto-membro">
                <div className="linha-escaneamento"></div>
                <span className="etiqueta-membro">{membro.etiqueta}</span>
              </div>
              <div className="info-membro">
                <h3>{membro.nome}</h3>
                <span className="cargo-membro">{membro.cargo}</span>
                <p>{membro.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
