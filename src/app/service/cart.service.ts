import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  urlDb = 'http://localhost:3000/cart';

  getOrders (): Observable<any[]> {
    return this.http.get<any[]>(this.urlDb);
  }

  getOrder (id: number): Observable<CartModel> {
    return this.http.get<CartModel>(`${this.urlDb}/${id}`);
  }

  addOrder (cart: CartModel) {
    return this.http.post<any[]>(this.urlDb, cart);
  }

  editOrder (cart: CartModel) {
    return this.http.put<any[]>(`${this.urlDb}/${cart.id}`, cart);
  }

  deleteOrder (id: number) {
    return this.http.delete<any[]>(`${this.urlDb}/${id}`);
  }

}

export class CartModel {
  name: string;
  img: string;
  userId: number;
  productId: number;
  productCount: number;
  orderStatus: string;
  id: number;
}
