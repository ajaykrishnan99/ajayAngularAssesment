import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {path:'success',component:ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
