import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styles: [
  ]
})
export class ShowImageComponent implements OnInit {

  title: string = "";

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

  searchImage(): void {
    console.log(this.title);

  }

}
