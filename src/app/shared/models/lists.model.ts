export interface UF {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface RegistrationEntity {
  kay: number;
  value: string;
  id: string;
}
