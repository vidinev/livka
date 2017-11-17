import { RouterModule } from '@angular/router';

export const AppRoutes = RouterModule.forRoot([{
  path: 'join',
  loadChildren: './auth/registration/registration.module#RegistrationModule'
}, {
  path: '**',
  redirectTo: ''
}]);
