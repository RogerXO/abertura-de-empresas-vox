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
  key: number;
  value: string;
  id: string;
}
