import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service.client';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isFormInvalid = false;
  errorActive = ' ';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if (!signInForm.valid){
      this.isFormInvalid = true;
      this.errorActive = 'active';
      return;
    }
    this.router.navigate(['/login']);
  }

}
