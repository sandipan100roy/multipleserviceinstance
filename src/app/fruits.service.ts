import { Injectable } from '@angular/core';

@Injectable()
export class FruitsService {

  sandipan = 0;
  constructor() {
    this.sandipan++;
  }

}