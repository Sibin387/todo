import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private router: Router, private fb: FormBuilder,
    private userService:UserService,
    private commonService:CommonService,
    ) {
    this.loginForm = fb.group({
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(3)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  ngOnInit() {
  }

  view(){
    //this.errorService.showError();
    this.router.navigate(['todo']);
  }
  get(name){
    return this.loginForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
  }
  login(){
    this.userService.login(this.loginForm.value)
    .subscribe((data: any)=>{
      this.commonService.setItem('user', data.user);
      this.router.navigate(['/todo']);
    }, err=>{
      alert(err.error.message);
    });
  }
}