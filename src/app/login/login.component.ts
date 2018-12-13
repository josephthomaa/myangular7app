import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { Login } from '../services/mycard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login[];
  error = '';
  success = '';
  constructor(private MycardserviceService:MycardserviceService) { }

  ngOnInit() {
  }
  loginData= new Login('','');
  checkLogin(f) {
    this.error = '';
    this.success = '';

    this.MycardserviceService.loginCheck(this.loginData)
      .subscribe(
        (res: Login[]) => {
          // Update the list of cars
          this.login = res;
           if(res['name']===0){
            this.error = 'Login Failed';  
           }
           else{ 
            window.location.href = '/profile/'+res['name'];
            this.success = 'Created successfully';
           }
        },
        (err) => this.error = err
      );
}

}
