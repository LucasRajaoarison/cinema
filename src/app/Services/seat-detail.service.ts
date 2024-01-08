import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeatDetailService {

  totalPrice: Subject<number> = new Subject<number>();

  totalQuantity: Subject<number> = new Subject<number>();

  seatListSub:  Subject<Array<any>> = new Subject<Array<any>>();

  seatList: any = [];


  constructor() { }

  addToCart(seat: any) {
      this.seatList.push(seat);
      this.publishEvent();
  }

  publishEvent() {
    this.seatListSub.next(this.seatList);

    let totalPriceValue: number = 0 ;
    let totalQuantityValue: number = 0;

    for (let seat of this.seatList) {
      totalQuantityValue += 1 ;
      totalPriceValue += 25;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

  }

  remove(seat: any) {
    this.seatList.splice(this.seatList.indexOf(seat), 1)
    this.publishEvent();
  }


}
