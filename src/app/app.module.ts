import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { WhiteboardProblemsComponent } from './Pages/whiteboard-problems/whiteboard-problems.component';

//primng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './Theme/footer/footer.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './Theme/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ResourcesComponent } from './Pages/resources/resources.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    WhiteboardProblemsComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // primeng
    ButtonModule,
    CardModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
