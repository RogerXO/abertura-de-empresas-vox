import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CompanyService } from '../../../shared/services/company.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/ui/input/input.component';
import { ListsService } from '../../../shared/services/lists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../../shared/services/utils.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Company } from '../../../shared/models/company.model';
import { RegistrationEntity, UF } from '../../../shared/models/lists.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-solicitation-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './solicitation-form.component.html',
  styleUrl: './solicitation-form.component.css',
})
export class SolicitationFormComponent implements OnInit, OnDestroy {
  showDivider = true;

  ufList: UF[] = [];
  registrationEntitiesList: RegistrationEntity[] = [];

  constructor(
    public empresasService: CompanyService,
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
    this.spinner.show();

    this.checkScreenSize();

    this.getUfList();
    this.getRegistrationEntitiesList();

    this.loadFormData();
  }

  ngOnDestroy() {
    this.empresasService.form.reset();
  }

  private checkScreenSize() {
    this.showDivider = window.innerWidth >= 768;
  }

  getUfList() {
    this.spinner.show();

    this._listsService
      .getUfIBGEList()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (res) => {
          this.ufList = res;
          this.ufList.sort((a, b) => a.sigla.localeCompare(b.sigla));
        },
        error: (err) => {
          console.error(err);
          this._utils.showErrorToastDialog('os estados');
        },
      });
  }

  getRegistrationEntitiesList() {
    this.spinner.show();

    this._listsService
      .getRegistrationEntitiesList()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (res) => (this.registrationEntitiesList = res),
        error: (err) => {
          console.error(err);
          this._utils.showErrorToastDialog('as entidades de registro');
        },
      });
  }

  loadFormData() {
    if (this.id) {
      this.spinner.show();

      this.empresasService
        .getById<Company>('empresas', this.id)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe({
          next: (res) => this.empresasService.setForm(res),
          error: (err) => {
            console.error(err);
            this._utils.showErrorToastDialog('os dados');
          },
        });
    }
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
          this._utils.showErrorDialog(err);
        },
      });
    } else {
      this.empresasService.form.markAllAsTouched();
      this.spinner.hide();
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
