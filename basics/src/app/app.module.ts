import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MagnifierDirective } from './magnifier.directive';
import { BirthYearPipe } from './birth-year-pipe.pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, NavComponent, MagnifierDirective, BirthYearPipe, UserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
