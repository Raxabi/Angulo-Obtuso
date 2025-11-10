import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Esto es un test

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
