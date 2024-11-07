import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  authService = inject(AuthService);
  route = inject(Router);

  isLoginPage: boolean = true;
  errorMessage: string | null = null;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordAgain: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.routeConfig?.path === 'login') {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }

  login() {
    const rawForm = this.loginForm.getRawValue();
    if(rawForm.email && rawForm.password) {
      this.authService.login(rawForm.email, rawForm.password)
        .subscribe({
          next: () => {
            console.log('User logged in');
            this.route.navigate(['/home']);
          },
          error: (err) => {
            this.errorMessage = err.code;
          }
        });
    }
  }

  createAccount() {
    const rawForm = this.signupForm.getRawValue();
    if(rawForm.email && rawForm.password && rawForm.name) {
      this.authService.signup(rawForm.email, rawForm.name, rawForm.password)
        .subscribe({
          next: () => {
            console.log('Account created');
            this.route.navigate(['/home']);
          },
          error: (err) => {
            this.errorMessage = err.code;
          }
        });
    }
  }
}
