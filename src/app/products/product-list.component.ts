import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent implements OnInit {

  private pageTitle : string = "Products Information";
  private products : IProduct[];
  private imageWidth: number = 60;
  private imageMargin: number = 2;
  private showImage : boolean = true;
  private _filterByTextVal : string = '';
  private _errorMessage : string = '';
  private filteredProducts : IProduct[];

  constructor(private productService : ProductService) { 
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: errorMessage => this._errorMessage = errorMessage
    });
  }

  private toggleImageDisplay() : void {
    this.showImage = !this.showImage;
  }

  private get filterByTextVal() : string {
    return this._filterByTextVal;
  }

  private set filterByTextVal(_filterByTextVal : string){
    this._filterByTextVal = _filterByTextVal;
    this.filteredProducts = this._filterByTextVal ? this.performFiltration(this._filterByTextVal) 
                            : this.products;
  }

  private performFiltration(filterBy : string) : IProduct[] {
    let filterTextLowerCase = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct ) =>
        product.productName.toLocaleLowerCase().indexOf(filterTextLowerCase) !== -1);
  }

  private onRatingClicked(value : string) : void {
    console.log("Event message generated is :: "+ value);
  }

}
