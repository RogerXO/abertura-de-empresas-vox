import { Injectable } from '@angular/core';

const ufList = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MG',
  'MS',
  'MT',
  'PA',
  'PB',
  'PE',
  'PI',
  'PR',
  'RJ',
  'RN',
  'RO',
  'RR',
  'RS',
  'SC',
  'SE',
  'SP',
  'TO',
];

const registrationEntities = ['Cartório', 'Junta Comercial', 'OAB', 'RFB'];

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor() {}

  getUfList() {
    return ufList;
  }

  getRegistrationEntitiesList() {
    return registrationEntities;
  }
}
