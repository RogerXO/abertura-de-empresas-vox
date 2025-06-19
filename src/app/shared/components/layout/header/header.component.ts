import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private _router: Router) {}

  addRequest() {
    this._router.navigate(['/pedidos/novo']);
  }

  get showButton() {
    return this._router.url === "/pedidos"
  }

  get isEdit() {
    return this._router.url.includes("editar")
  }

  get cardTitle() {
    return this.isEdit ? "Editar Solicitação de Abertura de Empresa" : "Solicitar Abertura de empresa"
  }
}
