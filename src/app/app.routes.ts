import { Routes } from '@angular/router';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { PedidosFormComponent } from './views/pedidos/pedidos-form/pedidos-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "pedidos",
    pathMatch: "full"
  },
  {
    path: 'pedidos',
    children: [
      {
        path: '',
        component: PedidosComponent,
      },
      {
        path: "novo",
        component: PedidosFormComponent
      },
      {
        path: "editar/:id",
        component: PedidosFormComponent
      }
    ],
  },
];
