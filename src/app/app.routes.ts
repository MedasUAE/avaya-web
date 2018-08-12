
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvayaAppointmentComponent } from './avaya-appointment/avaya-appointment.component';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/patientlist',
        pathMatch: 'full',
        component: AvayaAppointmentComponent
    },
    // { path: 'patientlist',component: AvayaAppointmentComponent }
   
   

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);