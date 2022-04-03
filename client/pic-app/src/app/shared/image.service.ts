import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly BaseURI = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  addImage(val: FormData) {
    return this.http.post(this.BaseURI + '/file', val);
  }
}
