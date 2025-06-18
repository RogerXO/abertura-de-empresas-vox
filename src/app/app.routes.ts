import { Routes } from '@angular/router';
import { PedidosComponent } from './views/pedidos/pedidos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "pedidos",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "pedidos"
  },
  {
    path: 'pedidos',
    children: [
      {
        path: '',
        component: PedidosComponent,
      },
    ],
  },
];
