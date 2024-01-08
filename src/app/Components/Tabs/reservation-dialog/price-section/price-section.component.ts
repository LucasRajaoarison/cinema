import { Component, OnInit } from '@angular/core';
import {SeatDetailService} from "../../../../Services/seat-detail.service";

@Component({
  selector: 'app-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.css']
})
export class PriceSectionComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private seatDetailService: SeatDetailService) { }

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.seatDetailService.totalPrice.subscribe(data => {
      this.totalPrice = data;
      console.log("Avy any am sub >>>> ", data)
    });

    this.seatDetailService.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
      console.log("Avy any am sub >>>> ", data)
    })
  }

}
