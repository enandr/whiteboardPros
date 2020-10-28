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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    WhiteboardProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //primeng
    ButtonModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
