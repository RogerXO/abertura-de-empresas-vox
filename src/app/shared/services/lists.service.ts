import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { RegistrationEntity, UF } from '../models/lists.model';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private _apiService: ApiService) {}

  getUfList() {
    return this._apiService
      .getPath<UF[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
      )
      .pipe(take(1));
  }

  getRegistrationEntitiesList() {
    return this._apiService.getPath<RegistrationEntity[]>(
      `${environment.urlApi}/entidade-registro`
    );
  }
}
