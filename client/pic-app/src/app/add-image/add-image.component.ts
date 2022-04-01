import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styles: [
    'button {margin-top: 10px;}'
  ]
})
export class AddImageComponent implements OnInit {

  loadTypes = [
    { id: 1, name: "URL" },
    { id: 2, name: "File" }
  ];

  selectedValue: any = null;

  selected_file: any = null;
  selected_url: string = '';

  constructor(public service: ImageService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selected_file = <File>event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('image', this.selected_file, this.selected_file.name);
    this.service.addImage(formData)
      .subscribe(res => {
        console.log(res);
      });
  }
}
