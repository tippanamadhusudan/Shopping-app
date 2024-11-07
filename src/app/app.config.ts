import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

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
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
