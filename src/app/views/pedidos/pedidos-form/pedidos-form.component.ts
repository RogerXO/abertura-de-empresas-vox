import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EmpresasService } from '../../../shared/services/empresas.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { ListsService } from '../../../shared/services/lists.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './pedidos-form.component.html',
  styleUrl: './pedidos-form.component.css',
})
export class PedidosFormComponent implements OnInit, OnDestroy {
  showDivider = true;

  ufList: string[] = [];
  registrationEntitiesList: string[] = [];

  constructor(
    public pedidosFormService: EmpresasService,
    private _listsService: ListsService,
    private _activatedRouter: ActivatedRoute
  ) {}

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();

    this.getUfList();
    this.getRegistrationEntitiesList();
  }

  ngOnDestroy() {
    this.pedidosFormService.form.reset();
  }

  getUfList() {
    this._listsService.getUfIBGEList().subscribe({
      next: (res) => {
        this.ufList = res.map((uf) => uf.sigla);
      },
      error: (err) => console.error(err),
    });
  }

  getRegistrationEntitiesList() {
    this._listsService.getRegistrationEntitiesList().subscribe({
      next: (res) => {
        this.registrationEntitiesList = res.map((item) => item.value);
      },
      error: (err) => console.error(err),
    });
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

  get id() {
    return this._activatedRouter.snapshot.paramMap.get('id');
  }
}
