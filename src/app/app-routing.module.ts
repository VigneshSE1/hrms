import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { PersonalinfoComponent } from './Components/personalinfo/personalinfo.component';
import { CompetencyComponent } from './Components/compentency/compentency.component';
import { WorkhistoryComponent } from './Components/workhistory/workhistory.component';
import { InformationComponent } from './Components/information/information.component';

const routes: Routes = [
  {
    path: 'information',
    component: InformationComponent,
    children: [
      { path: 'personal-info', component: PersonalinfoComponent },
      { path: 'work-history', component: WorkhistoryComponent },
      { path: 'competency', component: CompetencyComponent },
      // Other child routes
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' }, // Redirect to default child route
    ],
  },
  { path: '', redirectTo: 'information', pathMatch: 'full' }, // Redirect to default path
  { path: '**', component: PersonalinfoComponent }, // Redirect to a 404 Not Found page for unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
