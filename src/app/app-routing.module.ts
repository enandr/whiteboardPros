import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { WhiteboardProblemsComponent } from './Pages/whiteboard-problems/whiteboard-problems.component';
import { WhiteboardParentComponent } from './Pages/whiteboard-parent/whiteboard-parent.component';
import { ResourcesComponent } from './Pages/resources/resources.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { WhiteboardPromptComponent } from './Pages/whiteboard-prompt/whiteboard-prompt.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'whiteboard', component: WhiteboardParentComponent, children: [
    { path: '', redirectTo: 'problems', pathMatch: 'full' },
    { path: 'problems', component: WhiteboardProblemsComponent },
    { path: 'prompt/:promptId', component: WhiteboardPromptComponent },
  ]},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
