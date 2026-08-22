# JoviStudy - Landing Page React + TypeScript

Projeto da **Sprint 3 - Web Development** do Challenge JOVI 2026 (FIAP).

Landing page da solução **JoviStudy**: câmera inteligente + app de estudos para estudantes full-time.

## Tecnologias utilizadas

- **React 19** (componentes funcionais)
- **TypeScript**
- **Vite**
- CSS puro com **CSS Grid** (requisito de Front-End Design)
- HTML Semântico
- **localStorage** (persistência das mensagens do formulário de contato)
- **Math** (geração de ID único e score de produtividade aleatório)

## Estrutura de componentes (pai → filho)

```
App
├── Header
├── main
│   ├── Hero
│   ├── Solucao
│   ├── PublicoAlvo
│   ├── Galeria
│   ├── Equipe
│   └── Contato  ← usa useLocalStorage + Math
└── Footer
```

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Acesse: http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Uso de localStorage e Math

- O formulário de contato salva as mensagens no `localStorage` (chave: `jovistudy-contatos`).
- Cada mensagem recebe um ID gerado com `Date.now()` + `Math.floor(Math.random() * 10000)`.
- No Hero é exibido um "Score de produtividade" calculado com `Math.random()` e `Math.round()`.

## Uso de IA no projeto

A estrutura, textos e organização do código foram assistidos por IA (Grok) para acelerar a migração do protótipo HTML estático para React + TypeScript, mantendo a fidelidade visual e funcional ao design original da equipe.

## Link do Deploy na Vercel

(Após o deploy, atualize este campo com o link real)

https://seu-projeto.vercel.app

## Integrantes

Ver arquivo `INTEGRANTES.TXT`.

## Autor da migração React

Eduardo Menzel — Web Development
