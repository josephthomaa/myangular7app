import { Component, OnInit } from '@angular/core';
import { MycardserviceService } from '../services/mycardservice.service';
import { Myprofile } from '../services/mycard';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {
 
  constructor(private MycardserviceService:MycardserviceService) { }

  ngOnInit() {
  }

}
