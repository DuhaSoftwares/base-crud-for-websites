import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductsComponent } from './components/main/product-management/products/products.component';
import { ProductCreateComponent } from './components/main/product-management/product-create/product-create.component';
import { ProductDetailsComponent } from './components/main/product-management/product-details/product-details.component';
import { ProductEditComponent } from './components/main/product-management/product-edit/product-edit.component';
import { ProductByIdComponent } from './components/main/product-management/product-by-id/product-by-id.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: ProductCreateComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/category/:id', component: ProductByIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class AppRoutingModule {}
