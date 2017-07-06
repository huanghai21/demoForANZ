import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

import { HttpHelperService } from './service/http-helper.service';
import { AuthGuard } from './service/auth-guard';


const routes: Routes = [
    { path: '',   redirectTo: '/demo/home', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'demo', component: DemoComponent, canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgbModule.forRoot()
  ],
  providers: [HttpHelperService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
