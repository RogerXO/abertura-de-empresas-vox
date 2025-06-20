import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      co_entidade_registro: [0, Validators.required],
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

  constructor(protected http: HttpClient) {
    super(http);
  }

  setForm(data: Company) {
    this.form.patchValue({
      solicitante: {
        ds_responsavel: data.solicitante.ds_responsavel,
        nu_cpf: data.solicitante.nu_cpf,
        date_nascimento: data.solicitante.date_nascimento,
      },
      empresa: {
        ds_nome_fantasia: data.empresa.ds_nome_fantasia,
        co_entidade_registro: data.empresa.co_entidade_registro,
        endereco: {
          co_cep: data.empresa.endereco.co_cep,
          ds_logradouro: data.empresa.endereco.ds_logradouro,
          co_numero: data.empresa.endereco.co_numero,
          ds_complemento: data.empresa.endereco.ds_complemento,
          ds_bairro: data.empresa.endereco.ds_bairro,
          ds_municipio: data.empresa.endereco.ds_municipio,
          co_uf: data.empresa.endereco.co_uf,
        },
      },
    });
  }

  getList() {
    return this.list<Company[]>('empresas');
  }

  submit(id = '0') {
    return this.saveData('empresas', id, this.form.value);
  }
}
