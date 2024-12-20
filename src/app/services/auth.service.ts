import { inject, Injectable, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  http = inject(HttpClient);
  user$ = new BehaviorSubject<any>(null);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/shoppingapp/users");
  }

  signup(signupFormValues: any) {
    const apiUrl = "http://localhost:8080/shoppingapp/signup";
    
    return this.http.post(apiUrl, signupFormValues);
  }

  login(loginFormValues: any) {
    const apiUrl = "http://localhost:8080/shoppingapp/login";

    return this.http.post(apiUrl, loginFormValues);
  }

  logout() {
    this.user$.next(null);
  }

  /**************************** Firebase Login *************************** */
  // signup(email: string, name: string, password: string): Observable<void> {
  //   const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
  //     .then(response => updateProfile(response.user, {displayName: name}));

  //     return from(promise);
  // }

  // login(email: string, password: string): Observable<void> {
  //   const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
  //     .then(() => {});
  //   return from(promise);
  // }

  // logout(): Observable<void> {
  //   const promise = signOut(this.firebaseAuth);
  //   return from(promise);
  // }

  constructor() { }
}
