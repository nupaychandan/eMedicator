import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AuthGuard } from './login/auth.guard';

import { FaqComponent } from './faq/faq.component';
import { CryptService } from './login/crypt.service';
import { HeaderInterceptor } from './header.interceptor';
import { ResponseInterceptor } from './response.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RegistrationComponent,
    HomepageComponent,
    FaqComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [AuthGuard,CryptService,
  { provide:HTTP_INTERCEPTORS,
  useClass:HeaderInterceptor,
  multi:true },
  { provide: HTTP_INTERCEPTORS,
  useClass:ResponseInterceptor,
  multi:true}
  ],
    
  //bootstrap: [LoginComponent]
   bootstrap: [AppComponent]
})
export class AppModule { }
