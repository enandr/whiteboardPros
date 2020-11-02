import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { WhiteboardProblemsComponent } from './Pages/whiteboard-problems/whiteboard-problems.component';
import { WhiteboardParentComponent } from './Pages/whiteboard-parent/whiteboard-parent.component';
import { WhiteboardPromptComponent } from './Pages/whiteboard-prompt/whiteboard-prompt.component';

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
import { LandingComponent } from './Pages/landing/landing.component';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

// codemirror
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

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
    ResourcesComponent,
    LandingComponent,
    WhiteboardParentComponent,
    WhiteboardPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // primeng
    ButtonModule,
    CardModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    TabViewModule,
    // code mirror
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
