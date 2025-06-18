import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Company } from '../../shared/models/company.model';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, CompanyCardComponent, CompanyDetailComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent {
  selectedCompany: Company | null = null;

  companies: Company[] = [
    {
      id: 1,
      responsible: 'Renato Russo',
      cpf: '999.999.999-99',
      birth: '10/10/1010',
      name: 'Amazon',
      entity: 'OAB',
      address: {
        street: 'Rua das Flores',
        number: '123',
        neighborhood: 'Flores',
        city: 'São Paulo',
        zipcode: '123',
        complement: '',
        state: 'SP',
      },
    },
    {
      id: 2,
      responsible: 'Djavan',
      cpf: '888.888.888-88',
      birth: '10/10/1010',
      name: 'Carrefour',
      entity: 'OAB',
      address: {
        street: 'Avenida Principal',
        number: '456',
        neighborhood: 'Centro',
        city: 'São Paulo',
        zipcode: '01234-567',
        complement: 'Sala 101',
        state: 'SP',
      },
    },
    {
      id: 3,
      responsible: 'Eduardo Costa',
      cpf: '777.777.777-77',
      birth: '10/10/1010',
      name: 'Mineirão',
      entity: 'Cartório',
      address: {
        street: 'Rua da Consolação',
        number: '789',
        neighborhood: 'Vila Nova',
        city: 'Rio de Janeiro',
        zipcode: '20000-000',
        complement: 'Andar 5',
        state: 'RJ',
      },
    },
    {
      id: 4,
      responsible: 'Flávio Venturini',
      cpf: '555.555.555-55',
      birth: '10/10/1010',
      name: 'Vox Tecnologia',
      entity: 'RFB',
      address: {
        street: 'Rua das Palmeiras',
        number: '321',
        neighborhood: 'Jardim América',
        city: 'Belo Horizonte',
        zipcode: '30000-000',
        complement: 'Casa',
        state: 'MG',
      },
    },
  ];

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }
}
