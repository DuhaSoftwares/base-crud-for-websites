import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/main/product-management/products/products.component';
import { ProductDetailsComponent } from './components/main/product-management/product-details/product-details.component';
import { ProductCreateComponent } from './components/main/product-management/product-create/product-create.component';
import { ProductEditComponent } from './components/main/product-management/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/main/product-management/product-delete/product-delete.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductByIdComponent } from './components/main/product-management/product-by-id/product-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductByIdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,CommonModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
