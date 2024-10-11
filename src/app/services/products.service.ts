import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private apiUrl = 'http://localhost:5000/products';
  private apiUrl = 'https://farmers-dry-fruit-server.onrender.com/products';

  // private apiUrlCat = 'http://localhost:5000/categories';  // Adjust according to your backend API
  private apiUrlCat = 'https://farmers-dry-fruit-server.onrender.com/categories';  // Adjust according to your backend API

  // Adjust according to your backend API

  constructor(private http: HttpClient) {}

 getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: string, product: FormData): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrlCat}`);
  }

  // Get products by category ID
  getProductsByCategoryId(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${categoryId}`);
  }

  getProductsCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${this.apiUrl}/count`);
  }

  getAllProductsByPagination(page: number, limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/page?page=${page}&limit=${limit}`);
  }

  getProductsByIds(productIds: string[]): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.apiUrl}/getProductsByIds`, { productIds });
  }

}
