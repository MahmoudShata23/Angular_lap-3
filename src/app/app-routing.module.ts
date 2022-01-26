import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', component :ProductListingComponent},  // The Empty String to display product list component if nothing is specified
  {path: 'home', redirectTo: '', pathMatch:'full'},  // easier way to redirct to home page '' instead of writing the same statment again
  {path: 'product-listing', component: ProductListingComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'product-add', component: ProductFormComponent},
  {path: '**', component: NotFoundComponent} // Note That ** Means if it didnt match any N it must be the last path to write 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
