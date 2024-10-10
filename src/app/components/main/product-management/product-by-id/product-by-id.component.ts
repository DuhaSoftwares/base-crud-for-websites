import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css']
})
export class ProductByIdComponent implements OnInit {
  products: Product[] = [];
  categoryId: any;
    currentPage: number = 1;
  totalPages: number = 5;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.loadProductsByCategory();
    }
  }

  loadProductsByCategory() {
    this.productService.getProductsByCategoryId(this.categoryId).subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      error => console.error(error)
    );
  }
}
