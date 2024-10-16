export class Product {
  _id?: string;
  name!: string;
  description!: string;
  price!: number;
  image!: string;
  units!: string;
  isBestSelling?: boolean;
  category: any; // Category ID
}

export class Category {
  _id!: string;
  name!: string;
  totalProducts!: number;
}
