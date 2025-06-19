import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PedidosFormService {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    responsible: ['', Validators.required],
    cpf: [
      '',
      [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)],
    ],
    birth: ['', Validators.required],
    name: ['', Validators.required],
    entity: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      complement: [''],
      state: ['', Validators.required],
    }),
  });

  constructor(private _utils: UtilsService, private _router: Router) {}

  submit() {
    sessionStorage.setItem('form', JSON.stringify(this.form.value));
    this._utils.showSuccessDialog().then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['pedidos']);
      }
    });
  }
}
