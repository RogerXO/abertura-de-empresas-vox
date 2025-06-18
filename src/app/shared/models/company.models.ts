export interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  cnpj: string;
  responsavel: string;
  cpf: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  complemento: string;
  uf: string;
  numero: string;
  status: 'pending' | 'approved' | 'rejected';
}