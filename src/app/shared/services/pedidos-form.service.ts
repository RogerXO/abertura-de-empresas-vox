import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

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
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      complement: [''],
      state: ['', Validators.required],
    }),
  });

  submit() {
    console.log(this.form);
    return of(true);
  }
}
