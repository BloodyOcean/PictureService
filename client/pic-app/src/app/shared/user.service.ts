import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BaseURI = 'http://localhost:5000';
  user: UserModel;

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router, private toastr:ToastrService) {
   }

  formModel = this.fb.group({
    Email: ['', [Validators.email, Validators.required]],
    Name: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(5)]],
      PasswordConfirm: ['', [Validators.required, Validators.minLength(5)]],
    })
  })

  register() {
    var body = {
      Name: this.formModel.value.Name,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };

    return this.http.post(this.BaseURI + '/auth/register', body);
  }

  login(formData:any) {
    return this.http.post(this.BaseURI + '/accounts/logon', formData, { responseType: 'text' }).subscribe(
      response => {
        localStorage.setItem('token', response);
        this.user = this.getUser(response);
        this.router.navigateByUrl('/home');
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Invalid password or email', 'Error');
      });;
  }

  public getUser(token: string): UserModel {
    let b = JSON.parse(atob(token.split('.')[1]))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    return new UserModel(b);
  }
}
