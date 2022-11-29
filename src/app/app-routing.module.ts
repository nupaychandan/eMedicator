import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './login/auth.guard';



const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'app', component:AppComponent}, 
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  { path: 'Registration', component:RegistrationComponent},
  { path:'faq', component:FaqComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
