import { Component, HostListener, OnInit } from '@angular/core';
import { PedidosFormService } from '../../../shared/services/pedidos-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { ListsService } from '../../../shared/services/lists.service';

@Component({
  selector: 'app-pedidos-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './pedidos-form.component.html',
  styleUrl: './pedidos-form.component.css',
})
export class PedidosFormComponent implements OnInit {
  showDivider = true;

  ufList: string[] = [];
  registrationEntitiesList: string[] = [];

  constructor(
    public pedidosFormService: PedidosFormService,
    private listsService: ListsService
  ) {}

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.ufList = this.listsService.getUfList();
    this.registrationEntitiesList =
      this.listsService.getRegistrationEntitiesList();
  }

  private checkScreenSize() {
    this.showDivider = window.innerWidth >= 768;
  }

  getFormControl(controlName: string) {
    return this.pedidosFormService.form.get(controlName);
  }

  onSubmit() {
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
