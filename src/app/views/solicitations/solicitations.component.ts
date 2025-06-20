import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../shared/models/company.model';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyService } from '../../shared/services/company.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-solicitations',
  imports: [
    CommonModule,
    CompanyCardComponent,
    CompanyDetailComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './solicitations.component.html',
  styleUrl: './solicitations.component.css',
})
export class SolicitationsComponent implements OnInit {
  selectedCompany: Company | null = null;

  companies: Company[] = [];

  constructor(
    public empresasService: CompanyService,
    private _spinner: NgxSpinnerService,
    private _utils: UtilsService
  ) {}

  ngOnInit() {
    this._spinner.show();
    this.empresasService
      .getList()
      .pipe(finalize(() => this._spinner.hide()))
      .subscribe({
        next: (res) => (this.companies = res),
        error: (err) => {
          console.error(err);
          this._utils.showErrorToastDialog('os contratos');
        },
      });
  }

  selectCompany(company: any) {
    this.selectedCompany = company;
  }

  deleteCompany(id: string) {
    this._spinner.show();
    
    this.empresasService
      .delete('empresas', id)
      .pipe(finalize(() => this._spinner.hide()))
      .subscribe({
        next: () => {
          this.companies = this.companies.filter((c) => c.id !== id);
          this.selectedCompany = null;
          this._utils.showToastDialog(
            'Empresa deletada com sucesso!',
            'success'
          );
        },
        error: (err) => {
          console.error(err);
          this._utils.showErrorToastDialog('a empresa');
        },
      });
  }
}
