import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PersonalinfoComponent } from './Components/personalinfo/personalinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetencyComponent } from './Components/compentency/compentency.component';
import { WorkhistoryComponent } from './Components/workhistory/workhistory.component';
import { WizardComponent } from './Components/wizard/wizard.component';
import { InformationComponent } from './Components/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    PersonalinfoComponent,
    CompetencyComponent,
    WorkhistoryComponent,
    WizardComponent,
    InformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
