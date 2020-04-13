import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private pageTitle : string = "Product Detail";
  private selectedProduct : IProduct;
  private _errorMessage : string;

  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService,
              private router : Router) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.selectedProduct = products.filter((product : IProduct) => product.productId === id)[0];
        this.pageTitle += ' :: ' + this.selectedProduct.productName;
      },
      error: errorMessage => this._errorMessage = errorMessage
    });
  }

  public onBackButtonClick() : void {
    this.router.navigate(['/products'])
  }
}
