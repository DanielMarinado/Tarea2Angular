import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gameofthrone',
    loadChildren: () =>
      import('./gameofthrone/gameofthrone.module').then(
        (m) => m.GameofthroneModule
      ),
  },
  {
    path: 'paises',
    loadChildren: () =>
      import('./paises/paises.module').then((m) => m.PaisesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
