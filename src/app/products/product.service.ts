import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
    providedIn : 'root'
})
export class ProductService {

    private productListUrl : string = 'api/products/products.json';

    constructor(private httpClient : HttpClient){

    }

    public getAllProducts() : Observable<IProduct[]> {
       return this.httpClient.get<IProduct[]>(this.productListUrl).pipe(
            tap(data => console.log("All Products :: "+ JSON.stringify(data))),
            catchError(this.errorHandler)
       );
    }

    public errorHandler(err : HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = 'A network error occured with message :: '+ err.error.message;
        }else{
            errorMessage = 'A backend server error occured with status :: ' + err.status+
            ' and message :: '+ err.message;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    public findProductById(id : number) : Observable<IProduct | undefined> {
        console.log("Inside find Products By Id"+id);
        return this.httpClient.get<IProduct[]>(this.productListUrl).pipe(
            map((products : IProduct[]) => products.find(product => product.productId === id))
        );
    }
}