import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.css'],
  providers: [FruitsService] 
  //If we add providere here, then this component will create a separate instance of the FruitsService.
})
export class BBComponent implements OnInit {

  constructor(private f:FruitsService) { }

  ngOnInit() {
    // this.f.sandipan = 10;
    console.log("bb ",this.f.sandipan);
    
  }

}