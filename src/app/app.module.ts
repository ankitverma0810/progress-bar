import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProgressbarModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarService } from './shared/services/bar.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressbarModule.forRoot(),
    RouterModule.forRoot([
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent }
    ]),
  ],
  providers: [
    BarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
