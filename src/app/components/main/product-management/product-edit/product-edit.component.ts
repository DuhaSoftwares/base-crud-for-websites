import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | undefined;
  name: string = '';
  description: string = '';
  price: number | null = null;
  image: File | null = null;
  units: string = '';
  isBestSelling: boolean = false;
  category: string = ''; // Update with your category model
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {
    this. getAllCategories()

   }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(
        (data: Product) => {
          this.product = data;
          this.name = data.name;
          this.description = data.description;
          this.price = data.price;
          this.units = data.units;
          this.isBestSelling = data.isBestSelling || false;
          this.category = data.category; // Update with your category model
        },
        error => console.error(error)
      );
    }
  }

  onImageChange(event: any) {
    this.image = event.target.files[0];
  }

  updateProduct() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price?.toString() || '');
    formData.append('image', this.image || '');
    formData.append('units', this.units);
    formData.append('isBestSelling', this.isBestSelling ? 'true' : 'false');
    formData.append('category', this.category);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.updateProduct(id, formData).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
    getAllCategories() {
      this.productService.getAllCategories().subscribe((categories) => {
        this.categories = categories;
        console.log(this.categories)
    });
  }
}