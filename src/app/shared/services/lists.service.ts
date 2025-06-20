import { Injectable } from '@angular/core';
import { RegistrationEntity, UF } from '../models/lists.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private _apiService: ApiService) {}

  getUfIBGEList() {
    return this._apiService.fullUrlGet<UF[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    );
  }

  getRegistrationEntitiesList() {
    return this._apiService.list<RegistrationEntity[]>('entidade-registro');
  }
}
