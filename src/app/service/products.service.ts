import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  urlDb = 'http://localhost:3000/products';

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlDb);
  }

  addProduct (product: ProductModel) {
    return this.http.post<any[]>(this.urlDb, product);
  }

  editProduct (product: ProductModel) {
    return this.http.put<any[]>(`${this.urlDb}/${product.id}`, product);
  }

  deleteProduct (id: number) {
    return this.http.delete<any[]>(`${this.urlDb}/${id}`);
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.urlDb}/${id}`);
  }
}

export class ProductModel {
  name: string;
  img: string;
  description: string;
  price: number;
  discount: number;
  count: number;
  id: number;
}