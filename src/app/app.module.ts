import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FruitsService } from './fruits.service';
import { AAComponent } from './aa/aa.component';
import { BBComponent } from './bb/bb.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AAComponent, BBComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FruitsService]
})
export class AppModule { }
