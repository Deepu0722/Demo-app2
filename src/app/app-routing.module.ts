import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router1comp1Component } from './router1comp1/router1comp1.component';
import { Router1comp2Component } from './router1comp2/router1comp2.component';

const routes: Routes = [
  {path:'', redirectTo:'/route1', pathMatch:'full'},
  {path:'route1', component: Route1Component},
  {path:'route2', component: Route2Component},
  {path:'route1/:id', component: Router1comp1Component,
   children: [
     {path:'overview', component:Router1comp2Component}
    ]},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ Route1Component,
                                  Route2Component,
                                  Router1comp1Component,
                                  PageNotFoundComponent,
                                  Router1comp2Component 
                                 ]
