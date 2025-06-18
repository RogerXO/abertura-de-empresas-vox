import { Component, Input } from '@angular/core';
import { Company } from '../../../../shared/models/company.model';

@Component({
  selector: 'app-company-detail',
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css',
})
export class CompanyDetailComponent {
  @Input() company!: Company;
}
