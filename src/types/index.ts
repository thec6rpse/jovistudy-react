export interface ContatoFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: number;
  id: string;
}

export interface MembroEquipe {
  id: string;
  nome: string;
  cargo: string;
  descricao: string;
  etiqueta: string;
}

export interface SolucaoCard {
  etiqueta: string;
  titulo: string;
  descricao: string;
  largo?: boolean;
  destaque?: boolean;
}

export interface PublicoAlvoCard {
  selo: string;
  titulo: string;
  descricao: string;
  itens: string[];
}
