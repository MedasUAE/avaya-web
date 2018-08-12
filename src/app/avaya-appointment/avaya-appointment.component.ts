import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaya-appointment',
  templateUrl: './avaya-appointment.component.html',
  styleUrls: ['./avaya-appointment.component.css']
})
export class AvayaAppointmentComponent implements OnInit {
mobile:number;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobile = params['mobile']; //taking value from  parameter client
   });
  }

  
 

}
