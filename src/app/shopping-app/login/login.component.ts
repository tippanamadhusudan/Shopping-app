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
    this.getUsers();
    if(this.activatedRoute.snapshot.routeConfig?.path === 'login') {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }

  login() {
    const rawForm = this.loginForm.getRawValue();
    if(rawForm.email && rawForm.password) {
      const payload = {
        email: rawForm.email,
        password: rawForm.password
      };

      this.authService.login(payload)
        .subscribe(response => {
          console.log(response);
          this.authService.user$.next(response);
          this.route.navigate(['/home']);
        });
    }
  }

  createAccount() {
    const rawForm = this.signupForm.getRawValue();
    if(rawForm.email && rawForm.password && rawForm.name) {
      const payload = {
        name: rawForm.name,
        email: rawForm.email,
        password: rawForm.password
      };
      this.authService.signup(payload)
        .subscribe({
          next: () => {
            console.log('Account created');
            this.route.navigate(['/home']);
          }
        });
    }
  }

  getUsers() {
    this.authService.getUsers().subscribe(el => {
      console.log('/users: ', el);
    });
  }
}
