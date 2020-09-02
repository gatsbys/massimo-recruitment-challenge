import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  registerForm: FormGroup;
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

  async register() {
    if (this.registerForm.valid) {
      try {
        await this.authenticationService.registerUser(this.registerForm.value);
      } catch (exception) {
        this.error = true;
        this.errorMessage = exception.error;
        return;
      }

      await this.router.navigate(['app/starships'])
    }
  }

  bootstrap() {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.email, Validators.email])],
      password: [null, Validators.required],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      isAdmin: [null, Validators.required]
    });
  }

}
