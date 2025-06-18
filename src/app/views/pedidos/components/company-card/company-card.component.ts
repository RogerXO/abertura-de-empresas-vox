import { Component, Input } from '@angular/core';
import { Company } from '../../../../shared/models/company.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-card',
  imports: [CommonModule],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css',
})
export class CompanyCardComponent {
  @Input() company!: Company;
}
