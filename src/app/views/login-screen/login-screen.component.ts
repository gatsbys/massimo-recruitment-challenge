import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
      } catch (exception) {
        this.error = true;
        this.errorMessage = exception.error;
        return;
      }

      await this.router.navigate([''])
    }
  }

  bootstrap() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });;
  }
}
