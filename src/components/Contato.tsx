import { useState, FormEvent } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { ContatoFormData } from '../types';

export function Contato() {
  const [mensagens, setMensagens] = useLocalStorage<ContatoFormData[]>('jovistudy-contatos', []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Gera ID único com Math.random e timestamp (requisito Math + localStorage)
    const id = `msg-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const novaMensagem: ContatoFormData = {
      ...formData,
      timestamp: Date.now(),
      id,
    };

    setMensagens([...mensagens, novaMensagem]);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setEnviado(true);

    // Esconde a mensagem de sucesso após 4 segundos
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="contato" className="secao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 05. Contate-nos ]</span>
          <h2>Envie seu feedback!</h2>
          <p>Envie sua mensagem, dúvida técnica ou proposta de colaboração.</p>
        </header>

        <div className="terminal-contato">
          <div className="barra-terminal">
            <span className="ponto-terminal vermelho"></span>
            <span className="ponto-terminal amarelo"></span>
            <span className="ponto-terminal verde"></span>
            <span className="titulo-terminal">EM BETA // Formulário de contato</span>
          </div>

          {enviado && (
            <div className="mensagem-sucesso">
              ✅ Mensagem salva com sucesso no localStorage! Total de mensagens: {mensagens.length}
            </div>
          )}

          <form className="formulario-contato" onSubmit={handleSubmit}>
            <div className="grupo-input">
              <label htmlFor="name">NOME COMPLETO</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ex: Guilherme Nascimento"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grupo-input">
              <label htmlFor="email">ENDEREÇO DE E-MAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="guilherme@dominio.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grupo-input cheio">
              <label htmlFor="subject">TEMA DO CONTATO</label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="" disabled>
                  Selecione um tópico...
                </option>
                <option value="duvidas">Dúvidas sobre o Projeto Challenge</option>
                <option value="parceria">Integração & Parcerias</option>
                <option value="feedback">Feedback Técnico</option>
              </select>
            </div>

            <div className="grupo-input cheio">
              <label htmlFor="message">MENSAGEM / DADOS DE ENTRADA</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Descreva sua solicitação..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="botao-enviar">
              <span>ENVIAR MENSAGEM</span>
              <span className="seta-botao">→</span>
            </button>
          </form>

          {mensagens.length > 0 && (
            <div className="historico-mensagens">
              <h4>Mensagens salvas no localStorage ({mensagens.length})</h4>
              <ul>
                {mensagens.slice(-3).map((msg) => (
                  <li key={msg.id}>
                    <strong>{msg.name}</strong> — {msg.subject}{' '}
                    <small>({new Date(msg.timestamp).toLocaleString('pt-BR')})</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
