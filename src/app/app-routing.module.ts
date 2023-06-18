import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrecioComponent } from './precio/precio.component';

const routes: Routes = [ { path: '', component: HomeComponent }, { path: 'home', component: HomeComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'about', component: AboutComponent }, { path: 'contacto', component: ContactComponent }, 
{ path: 'information/:ref', component: InformationComponent },
{ path: 'precio/:ref', component: PrecioComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
