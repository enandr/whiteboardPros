import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { WhiteboardProblemsComponent } from './Pages/whiteboard-problems/whiteboard-problems.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
