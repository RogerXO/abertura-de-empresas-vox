import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EmpresasService } from '../../../shared/services/empresas.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { ListsService } from '../../../shared/services/lists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../../shared/services/utils.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    public empresasService: EmpresasService,
    private _listsService: ListsService,
    private _activatedRouter: ActivatedRoute,
    private _utils: UtilsService,
    private _router: Router,
    private spinner: NgxSpinnerService
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
    this.empresasService.form.reset();
  }

  getUfList() {
    this._listsService.getUfIBGEList().subscribe({
      next: (res) => (this.ufList = res.map((uf) => uf.sigla)),
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
    return this.empresasService.form.get(controlName);
  }

  onSubmit() {
    this.spinner.show();
    if (this.empresasService.form.valid) {
      this.empresasService.submit(this.id || '').subscribe({
        next: () => {
          this.spinner.hide();
          this._utils.showSuccessDialog().then((result) => {
            if (result.isConfirmed) {
              this._router.navigate(['pedidos']);
            }
          });
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.empresasService.form.markAllAsTouched();
    }
  }

  get companyControls() {
    return this.empresasService.form.controls.empresa;
  }

  get addressControls() {
    return this.empresasService.form.controls.empresa.controls.endereco;
  }

  get applicantControls() {
    return this.empresasService.form.controls.solicitante;
  }

  get id() {
    return this._activatedRouter.snapshot.paramMap.get('id');
  }
}
