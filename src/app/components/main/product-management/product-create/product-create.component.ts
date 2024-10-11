import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
   name: string = '';
  description: string = '';
  price: number | null = null;
  image: File | null = null;
  units: string = '';
  isBestSelling: boolean = false;
  category: string = ''; // Update with your category model
  categories: Category[] = [];

  constructor(private productService: ProductsService, private router: Router) {
    this. getAllCategories()
  }
  categoryId:string=''
onCategoryChange() {
  this.categoryId=this.category
}
  onImageChange(event: any) {
    this.image = event.target.files[0];
  }

  createProduct() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price?.toString() || '');
    formData.append('image', this.image || '');
    formData.append('units', this.units);
    formData.append('isBestSelling', this.isBestSelling ? 'true' : 'false');
    formData.append('category', this.categoryId);

    this.productService.createProduct(formData).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
  getAllCategories() {
      this.productService.getAllCategories().subscribe((categories) => {
        this.categories = categories;
        console.log(this.categories)
    });
  }
}
