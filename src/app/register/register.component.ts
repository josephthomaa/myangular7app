import { Component, OnInit } from '@angular/core';
import { MyappService } from '../app/myapp.service';
import { Register } from '../app/loginRegister';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register[];
  error = '';
  success = '';
  constructor(private myappservice:MyappService) { }

  ngOnInit() {
  }
  regData= new Register('','','','');
    //Create new language
    newRegister(f) {
    this.error = '';
    this.success = '';

    this.myappservice.newRegistration(this.regData)
      .subscribe(
        (res: Register[]) => {
          // Update the list of cars
          this.register = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
         
        },
        (err) => this.error = err
      );
}
}
