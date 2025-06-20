import { Routes } from '@angular/router';
import { SolicitationsComponent } from './views/solicitations/solicitations.component';
import { SolicitationFormComponent } from './views/solicitations/solicitation-form/solicitation-form.component';

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
        component: SolicitationsComponent,
      },
      {
        path: "novo",
        component: SolicitationFormComponent
      },
      {
        path: "editar/:id",
        component: SolicitationFormComponent
      }
    ],
  },
];
