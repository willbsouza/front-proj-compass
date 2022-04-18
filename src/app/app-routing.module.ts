import { DoadorComponent } from './doador/doador.component';
import { DonatarioComponent } from './donatario/donatario.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdminComponent } from './admin/admin.component';
import { OngComponent } from './ong/ong.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'doador',
    component: DoadorComponent
  },
  {
    path: 'donatario',
    component: DonatarioComponent
  },
  {
    path: 'ong',
    component: OngComponent
  },
  {
    path: 'doacao',
    component: DoacaoComponent
  },
  {
    path: 'solicitacao',
    component: SolicitacaoComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
