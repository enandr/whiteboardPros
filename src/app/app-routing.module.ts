import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { WhiteboardProblemsComponent } from './Pages/whiteboard-problems/whiteboard-problems.component';
import { ResourcesComponent } from './Pages/resources/resources.component';
import { LandingComponent } from './Pages/landing/landing.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'whiteboard/problems', component: WhiteboardProblemsComponent },
  { path: '**', component: PageNotFoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
