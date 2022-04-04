import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ToastrService } from 'ngx-toastr';

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
  title: string = '';
  description: string = '';

  constructor(public service: ImageService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selected_file = <File>event.target.files[0];
  }

  onUpload() {
    if (this.selectedValue == 1) {
      var element = {
        url: this.selected_url,
        title: this.title,
        description: this.description
      }

      this.service.addUrl(element)
        .subscribe(res => {
          console.log(res);
          this.toastr.success("Uploaded successfully", "Success");
        },
          error => {
            this.toastr.error("Cant upload file", "Error");
          }
        );

    } else {
      const formData = new FormData();
      formData.append('image', this.selected_file, this.selected_file.name);
      formData.append('title', this.title);
      formData.append('description', this.description);
      this.service.addImage(formData)
        .subscribe(res => {
          console.log(res);
          this.toastr.success("Uploaded successfully", "Success");
        },
          error => {
            this.toastr.error("Cant upload file", "Error");
          }
        );
    }
  }
}
