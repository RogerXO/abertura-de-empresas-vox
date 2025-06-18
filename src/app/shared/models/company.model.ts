export interface Company {
  id: number;
  responsible: string;
  cpf: string;
  birth: string;
  name: string;
  entity: 'Cartório' | 'Junta Comercial' | 'OAB' | 'RFB';
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    zipcode: string;
    complement: string;
    state: string;
  };
}
