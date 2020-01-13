import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AAComponent implements OnInit {

  constructor(private f:FruitsService) { }

  ngOnInit() {
    this.f.sandipan = 20;
    console.log("aa ",this.f.sandipan);
  }

}