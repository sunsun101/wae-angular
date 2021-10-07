import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {
}
