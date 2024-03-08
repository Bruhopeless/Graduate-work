import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductsService } from '../service/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private productDb: ProductsService) {}

  products: any[] = [];
  filterProducts: any[] = [];
  nameValue = '';
  imgValue = '';
  priceValue = 0;
  discountValue = 0;
  direction = 'low';

  getAllProducts() {
    this.productDb.getProducts()
                  .subscribe((data) => {
                    this.products = data;
                    this.filterProducts = this.products;
                    this.onPageChanged({
                      pageIndex: 0,
                      pageSize: 10
                    })
                  })
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  

  searchProduct(event: any) {
    let searchStringValue = event.target.value;
    this.filterProducts = this.products.filter(item => item.name.toLowerCase().includes(searchStringValue.toLowerCase()))
    this.onPageChanged({
      pageIndex: 0,
      pageSize: 10
    })
    console.log(this.filterProducts)
  }

  sortingPrice() {
    this.filterProducts.sort((a, b) => {
      if (this.direction === 'hight') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  changeSorting() {
    if (this.direction === 'low') {
      this.direction = 'hight'
    } else {
      this.direction = 'low'
    }
    this.sortingPrice()
    this.onPageChanged({
      pageIndex: 0,
      pageSize: 10
    })
  }

  setNewType(selectElem: string) {
    if(selectElem === 'all') {
      this.filterProducts = this.products;
    } else {
      this.filterProducts = this.products.filter(item => item.type === selectElem);
    }
    this.onPageChanged({
      pageIndex: 0,
      pageSize: 10
    })
  } 

  onPageChanged(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.currentPageData = this.filterProducts.slice(startIndex, endIndex);

    //this.filterProducts = currentPageData;
  }  

  public currentPageData:any[];

}
