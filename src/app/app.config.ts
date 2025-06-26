import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()), //manejo de rutas |  withComponentInputBinding => obtiene params url
    provideHttpClient(withFetch()), // Cliente propio para hacer peticiones, para realizar peticiones usa fetch con withFetch()
    provideClientHydration(withEventReplay()), //capacidad de hidratar del lado del cliente
  ],
};
