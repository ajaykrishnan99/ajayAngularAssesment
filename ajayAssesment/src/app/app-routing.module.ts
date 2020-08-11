import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseComponent } from './response/response.component';
import { AppComponent } from './app.component';
import { CheckparamComponent } from './checkparam/checkparam.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 

  {path:'',component:HomeComponent},
  {path:'success',component:ResponseComponent},
  {path:'register',component:RegisterComponent},
  {path:'register/:id/:name',component:CheckparamComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
