import { Component, Input } from '@angular/core';
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

  constructor(private _router: Router) {}

  editRequest() {
    this._router.navigate([`/pedidos/editar/${this.company.id}`]);
  }
}
