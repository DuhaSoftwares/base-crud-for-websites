import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1; // Initialize totalPages to 1
  itemsPerPage: number = 10; // Adjust as necessary
  totalCount:number=0

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.getTotalProductsCount()
  }

 getTotalProductsCount() {
    this.productService.getProductsCount().subscribe((response) => {
      this.totalCount = response.count; // Extract count from response
      this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage); // Update totalPages
    });
  }
  loadProducts() {
    this.productService.getAllProductsByPagination(this.currentPage, this.itemsPerPage).subscribe((response) => {
      this.products = response;
      console.log(this.products)
      // Adjust based on your API response structure
      // Assume response.totalCount is the total number of products
    });
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Prevent out-of-bound pages
    this.currentPage = page;
    this.loadProducts();
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert("deleted")
      this.loadProducts(); // Reload the product list
    });
  }

  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
    category: string = ''; // Update with your category model
  categories: Category[] = [];

    getAllCategories() {
      this.productService.getAllCategories().subscribe((categories) => {
        this.categories = categories;
        console.log(this.categories)
    });
  }
}
