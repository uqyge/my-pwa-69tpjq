import { Component, OnInit } from '@angular/core';

import { CatImage } from './../../models/cat-image'

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;
  
  constructor() { }

  ngOnInit() {
    this.generateSrc();
    //this.src = this.image.api + this.image.message;
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + 
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }
}