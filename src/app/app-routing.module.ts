import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Lazy Loaded Route (Page)
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-shopping-item',
    loadChildren: () => import('./add-shopping-item/add-shopping-item.module').then( m => m.AddShoppingItemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
