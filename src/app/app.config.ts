import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './services/http.interceptor';

const firebaseConfig = {
  apiKey: "AIzaSyD5avA9bM5cDgGS67VqU_kbicYz2CykYkQ",
  authDomain: "shoppingapp-9c191.firebaseapp.com",
  projectId: "shoppingapp-9c191",
  storageBucket: "shoppingapp-9c191.firebasestorage.app",
  messagingSenderId: "198236883651",
  appId: "1:198236883651:web:43985dd5e94b1d4b23f076",
  measurementId: "G-DVXJB1C163"
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideHttpClient(
      withInterceptors([httpInterceptor])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
};
