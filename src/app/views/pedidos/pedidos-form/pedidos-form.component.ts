import { Component, HostListener, OnInit } from '@angular/core';
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
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  showDivider = true;

  constructor(public pedidosFormService: PedidosFormService) {}

  ngOnInit(): void {
    console.log(this.pedidosFormService.form);
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.showDivider = window.innerWidth >= 768;
  }

  getFormControl(controlName: string) {
    return this.pedidosFormService.form.get(controlName);
  }

  onSubmit(): void {
    if (this.pedidosFormService.form.valid) {
      this.pedidosFormService.submit();
    } else {
      this.pedidosFormService.form.markAllAsTouched();
    }
  }

  get addressControls() {
    return this.pedidosFormService.form.controls.address;
  }
}
