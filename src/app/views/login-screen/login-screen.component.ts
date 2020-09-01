import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  loginForm: FormGroup;
  error: boolean = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.bootstrap();
  }

  async login() {
    if (this.loginForm.valid) {
      try {
        await this.authenticationService.loginUser(this.loginForm.value);
        await this.router.navigate(['app/starships'])
      } catch (exception) {
        this.error = true;
        this.errorMessage = exception.error;
      }
    }
  }

  bootstrap() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });;
  }
}
