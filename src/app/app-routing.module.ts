import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalinfoComponent } from './Components/personalinfo/personalinfo.component';
import { CompetencyComponent } from './Components/compentency/compentency.component';
import { WorkhistoryComponent } from './Components/workhistory/workhistory.component';
import { InformationComponent } from './Components/information/information.component';
import { LeavesComponent } from './Components/leaves/leaves.component';
import { TimesheetComponent } from './Components/timesheet/timesheet.component';

const routes: Routes = [
  {
    path: 'information',
    component: InformationComponent,
    children: [
      { path: 'personal-info', component: PersonalinfoComponent },
      { path: 'work-history', component: WorkhistoryComponent },
      { path: 'competency', component: CompetencyComponent },
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
    ],
  },
  {
    path: 'leaves',
    component: LeavesComponent,
  },
  {
    path: 'time-sheet',
    component: TimesheetComponent,
  },
  { path: '', redirectTo: 'information', pathMatch: 'full' },
  { path: '**', component: PersonalinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
