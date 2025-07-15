import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            }, {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
            }, {
                path: 'courses',
                loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent)
            }, {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
            },

        ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }

];
