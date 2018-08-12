import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AvayaAppointmentComponent } from './avaya-appointment/avaya-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    AvayaAppointmentComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
