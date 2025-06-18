import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Company } from '../../shared/models/company.models';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  selectedCompany: Company | null = null;

  companies: Company[] = [
    {
      id: 1,
      name: 'Fulano de tal',
      email: 'contato@techsolutions.com',
      phone: '(11) 99999-9999',
      address: 'Rua das Flores, 123 - São Paulo, SP',
      cnpj: '12.345.678/0001-90',
      responsavel: 'Fulano de tal',
      cpf: '999.999.999-99',
      endereco: 'Nome da rua',
      bairro: 'Nome do bairro',
      cidade: 'Nome da cidade',
      cep: '99999-999',
      complemento: 'Complemento',
      uf: 'PB',
      numero: '123',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Fulano de tal',
      email: 'info@inovacaodigital.com',
      phone: '(11) 88888-8888',
      address: 'Av. Paulista, 456 - São Paulo, SP',
      cnpj: '98.765.432/0001-10',
      responsavel: 'João Silva',
      cpf: '888.888.888-88',
      endereco: 'Avenida Principal',
      bairro: 'Centro',
      cidade: 'São Paulo',
      cep: '01234-567',
      complemento: 'Sala 101',
      uf: 'SP',
      numero: '456',
      status: 'approved',
    },
    {
      id: 3,
      name: 'Fulano de tal',
      email: 'contato@startupbr.com',
      phone: '(11) 77777-7777',
      address: 'Rua da Consolação, 789 - São Paulo, SP',
      cnpj: '11.222.333/0001-44',
      responsavel: 'Maria Santos',
      cpf: '777.777.777-77',
      endereco: 'Rua Comercial',
      bairro: 'Vila Nova',
      cidade: 'Rio de Janeiro',
      cep: '20000-000',
      complemento: 'Andar 5',
      uf: 'RJ',
      numero: '789',
      status: 'rejected',
    },
    {
      id: 4,
      name: 'Fulano de tal',
      email: 'contato@consultoria.com',
      phone: '(11) 66666-6666',
      address: 'Rua Augusta, 321 - São Paulo, SP',
      cnpj: '22.333.444/0001-55',
      responsavel: 'Pedro Oliveira',
      cpf: '666.666.666-66',
      endereco: 'Rua das Palmeiras',
      bairro: 'Jardim América',
      cidade: 'Belo Horizonte',
      cep: '30000-000',
      complemento: 'Casa',
      uf: 'MG',
      numero: '321',
      status: 'pending',
    },
  ];

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }
}
