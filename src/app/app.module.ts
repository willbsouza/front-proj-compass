import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoadorComponent } from './doador/doador.component';
import { DonatarioComponent } from './donatario/donatario.component';
import { OngComponent } from './ong/ong.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdminComponent } from './admin/admin.component';
import { EstoqueComponent } from './estoque/estoque.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoadorComponent,
    DonatarioComponent,
    OngComponent,
    DoacaoComponent,
    SolicitacaoComponent,
    AdminComponent,
    EstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
