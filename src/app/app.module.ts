import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavComponent } from './components/shared/nav/nav.component';

//componentes

//rutas
import{ app_routing} from './app.routes';
import { HomeComponent } from './components/home/home.component';
//servicios


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
