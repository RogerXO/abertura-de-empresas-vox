import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../shared/models/company.model';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { EmpresasService } from '../../shared/services/empresas.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pedidos',
  imports: [
    CommonModule,
    CompanyCardComponent,
    CompanyDetailComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent implements OnInit {
  selectedCompany: Company | null = null;

  companies: Company[] = [];

  constructor(
    public empresasService: EmpresasService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.empresasService
      .getList()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe({
        next: (res) => (this.companies = res),
        error: (err) => console.error(err),
      });
  }

  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
