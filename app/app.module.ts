import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MaterialModule 
  ],
  declarations: [ AppComponent, HelloComponent, ImgCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
