import { RouterModule, Routes } from "@angular/router";
import{AboutComponent} from './components/about/about.component';
import{ContactComponent} from './components/contact/contact.component';
import{PortfolioComponent} from './components/portfolio/portfolio.component';



const APP_ROUTES: Routes =  [ 

    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}

];
export const app_routing  = RouterModule.forRoot(APP_ROUTES);