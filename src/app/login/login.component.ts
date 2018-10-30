import { Component, OnInit } from '@angular/core';
import { MyappService } from '../app/myapp.service';
import { Login } from '../app/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login[];
  error = '';
  success = '';
  constructor(private myappservice:MyappService) {

   }

  ngOnInit() {
  }
  loginData= new Login('','');
  checkLogin(f) {
    this.error = '';
    this.success = '';

    this.myappservice.loginCheck(this.loginData)
      .subscribe(
        (res: Login[]) => {
          // Update the list of cars
          this.login = res;
           if(res['name']===0){
            this.error = 'Login Failed';  
           }
           else{ 
            window.location.href = '/';
            this.success = 'Created successfully';
           }
          // Inform the user
                
          // Reset the form
         // f.reset();
        },
        (err) => this.error = err
      );
}

}
