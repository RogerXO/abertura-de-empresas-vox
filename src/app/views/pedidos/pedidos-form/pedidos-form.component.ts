import { Component, OnInit } from '@angular/core';
import { PedidosFormService } from '../../../shared/services/pedidos-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-pedidos-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './pedidos-form.component.html',
  styleUrl: './pedidos-form.component.css',
})
export class PedidosFormComponent implements OnInit {
  constructor(public pedidosFormService: PedidosFormService) {}

  ngOnInit(): void {
    console.log(this.pedidosFormService.form);
  }

  onSubmit(): void {
    if (this.pedidosFormService.form.valid) {
      this.pedidosFormService.submit();
    } else {
      this.pedidosFormService.form.markAllAsTouched();
    }
  }

  getFormControl(controlName: string) {
    return this.pedidosFormService.form.get(controlName)
  }

  get addressControls() {
    return this.pedidosFormService.form.controls.address;
  }
}
