import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrassrootsComponent } from "./grassroots/grassroots.component";

const routes: Routes = [
  {path: 'grassroots', component: GrassrootsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GrassrootsComponent]
