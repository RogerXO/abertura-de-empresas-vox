import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService extends ApiService {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    solicitante: this.formBuilder.group({
      ds_responsavel: ['', Validators.required],
      nu_cpf: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/),
        ],
      ],
      date_nascimento: ['', Validators.required],
    }),
    empresa: this.formBuilder.group({
      ds_nome_fantasia: ['', Validators.required],
      co_entidade_registro: ['', Validators.required],
      endereco: this.formBuilder.group({
        co_cep: [
          '',
          [Validators.required, Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)],
        ],
        ds_logradouro: ['', Validators.required],
        co_numero: ['', Validators.required],
        ds_complemento: [''],
        ds_bairro: ['', Validators.required],
        ds_municipio: ['', Validators.required],
        co_uf: ['', Validators.required],
      }),
    }),
  });

  constructor(
    private _utils: UtilsService,
    private _router: Router,
    protected http: HttpClient
  ) {
    super(http);
  }

  getList() {
    return this.list<Company[]>('empresas');
  }

  submit() {
    console.log(this.form)
    sessionStorage.setItem('form', JSON.stringify(this.form.value));
    this._utils.showSuccessDialog().then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['pedidos']);
      }
    });
  }
}
