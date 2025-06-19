import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getPath<T>(path: string) {
    return this._http.get<T>(`${path}`).pipe(take(1));
  }

  getList<T>(path: string) {
    return this._http.get<T>(`${environment.urlApi}/${path}`).pipe(take(1));
  }

  getById<T>(path: string, id: string | number) {
    return this._http
      .get<T>(`${environment.urlApi}/${path}/${id}`)
      .pipe(take(1));
  }

  post<T>(path: string, data: T) {
    return this._http.post(`${environment.urlApi}/${path}`, data).pipe(take(1));
  }

  put<T>(path: string, id: string | number, data: T) {
    return this._http.put(`${environment.urlApi}/${path}/${id}`, data);
  }

  delete(path: string, id: string | number) {
    return this._http
      .delete(`${environment.urlApi}/${path}/${id}`)
      .pipe(take(1));
  }

  saveData<T>(path: string, data: T, id: string | number) {
    if (id != 0) {
      return this.put<T>(path, id, data);
    } else {
      return this.post(path, data);
    }
  }
}
