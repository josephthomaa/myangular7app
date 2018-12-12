import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { Register } from '../services/mycard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register[];
  error = '';
  success = '';
  constructor(private MycardserviceService:MycardserviceService) { }

  ngOnInit() {
  }
  regData= new Register('','','','');
   //Create new user
   newRegister(f) {
    this.error = '';
    this.success = '';

    this.MycardserviceService.newRegistration(this.regData)
      .subscribe(
        (res: Register[]) => {
          if(res['status']===0){
            this.error = 'Registration Failed';  
           }
           else if(res['status']===-1){
            this.error = 'Entered user details already exists';  
           }
           else{ 
              this.success = 'Registered successfully, please login to continue...';
              f.reset();
           }
         // Reset the form
         
        },
        (err) => this.error = err
      );
}

}
