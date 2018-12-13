import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { Myprofile } from '../services/mycard';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myprofile: Myprofile[];
  error = '';
  success = '';
  id = "";
  constructor(private MycardserviceService: MycardserviceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    }

  profData = new Myprofile('', '', '', '', '', '', '', '', '', '');

  saveProfile(f) {
    this.error = '';
    this.success = '';

    console.log(this.profData)

  
    this.profData['id'] = this.id
    this.MycardserviceService.saveUserData(this.profData)
      .subscribe(
        (res: Myprofile[]) => {
          // Update the list of cars
          this.myprofile = res;
          if (res['name'] === 0) {
            this.error = 'Insert Failed';
          }
          else {
            this.router.navigate(['/mycard/'+this.id]);
                       
          }
        },
        (err) => this.error = err
      );
  }
}
