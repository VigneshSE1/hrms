import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PersonalinfoComponent } from './Components/personalinfo/personalinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProGamificationModule } from '@theproindia/pro-gamification';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    PersonalinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProGamificationModule.forRoot({
      clientId: 'f9f95520-89d4-43b0-a326-affe40ff27f1',
      clientSecret: 'pon8Q~dc-.o1wk~arnP6r9r3Zq8ls2emlMY1JbrW',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
