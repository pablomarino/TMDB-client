import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardwallComponent } from './core/cardwall/cardwall.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:CardwallComponent},
  {path:'fav',component:CardwallComponent},
  {path:'search/:searchterm',component:CardwallComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
