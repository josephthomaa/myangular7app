import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { ActivatedRoute} from "@angular/router";
import { Myprofile } from '../services/mycard';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {
  myprofile: Myprofile[];
  error = '';
  success = '';
  id = "";
  constructor(private MycardserviceService: MycardserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getProfile(this.id);
  }

  profData = new Myprofile('', '', '', '', '', '', '', '', '', '');
    //get language list-Retrive
    getProfile(n): void {
      this.MycardserviceService.getAll(n).subscribe(
        (res: Myprofile[]) => {
          this.profData = res;
        },
        (err) => {
          this.error = err;
        }
      );
    }
}
