import { Routes } from '@angular/router';
import { TASK_ROUTES } from './features/tasks/tasks.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => import('./features/auth/login/login').then((m) => m.Login) },
  { path: 'tasks', children: TASK_ROUTES },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin/admin').then((m) => m.Admin),
  },
  {
    path: '**',
    loadComponent: () => import('./shared/not-found/not-found').then((m) => m.NotFound),
  },
];
