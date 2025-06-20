import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../../shared/models/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css',
})
export class CompanyDetailComponent {
  @Input() company!: Company;
  @Output() deleteCompany = new EventEmitter<string>();

  constructor(private _router: Router) {}

  editSolicitation() {
    this._router.navigate([`/pedidos/editar/${this.company.id}`]);
  }

  deleteSolicitation() {
    this.deleteCompany.emit(this.company.id);
  }
}
