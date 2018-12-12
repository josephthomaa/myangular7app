import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { Myprofile } from '../services/mycard';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myprofile: Myprofile[];
  error = '';
  success = '';
  constructor(private MycardserviceService:MycardserviceService) { }

  ngOnInit() {
  }
  profData= new Myprofile('','','','','','','','','');
  saveProfile(f) {
    this.error = '';
    this.success = '';

    this.MycardserviceService.saveUserData(this.profData)
      .subscribe(
        (res: Myprofile[]) => {
          // Update the list of cars
          this.myprofile = res;
           if(res['name']===0){
            this.error = 'Login Failed';  
           }
           else{ 
            window.location.href = '/profile';
            this.success = 'Created successfully';
           }
        },
        (err) => this.error = err
      );
}
}
