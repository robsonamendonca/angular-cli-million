import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { HeadComponent } from './views/head/head.component';
import { FooterComponent } from './views/footer/footer.component';
import { TesouroComponent } from './views/ofertas/tesouro/tesouro.component';
import { FundoComponent } from './views/ofertas/fundo/fundo.component';
import { AcoesComponent } from './views/ofertas/acoes/acoes.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { InformativoComponent } from './views/informativo/informativo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClientesComponent,
    HeadComponent,
    FooterComponent,
    TesouroComponent,
    FundoComponent,
    AcoesComponent,
    OfertasComponent,
    InformativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
