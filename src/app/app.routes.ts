import { Routes } from '@angular/router';
import { PedidosComponent } from './views/pedidos/pedidos.component';

export const routes: Routes = [
  // {
  //   path: '',
  // },
  {
    path: "pedidos",
    // component: PedidosComponent,
    children: [{
      path: "", component: PedidosComponent
    }]
  },
];
