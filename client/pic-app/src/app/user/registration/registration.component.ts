import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) {
    this.service.formModel.reset();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.register().subscribe({
      complete: () => {
        this.service.formModel.reset();
        this.toastr.success('New user created!', 'Registration successful.');
      },
      error: () => {
        this.toastr.error('Username is already taken', 'Registration failed.');
      }
    });
  }

}
