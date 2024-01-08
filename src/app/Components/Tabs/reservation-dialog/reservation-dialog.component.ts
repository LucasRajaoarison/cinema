import {Component, OnInit, Output} from '@angular/core';
import {EventDriverService} from "../../../State/event-driver.service";
import {SeatDetailService} from "../../../Services/seat-detail.service";

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  data: any;
  totalPrice:any;

  constructor(private seatDetailService: SeatDetailService) { }

  ngOnInit(): void {
    this.seatDetailService.seatListSub.subscribe(data => {
      this.data = data;
    })
    this.seatDetailService.totalPrice.subscribe(data => {
      this.totalPrice = data;
    })
  }

  confirmPurchase() {
    console.log("tonga ato")
    alert(`
    Your request has been received.\n
    Seats : ${this.formattedSeats()} \n
    total price : ${this.totalPrice} $
    `)
  }

  formattedSeats() {
    const seatNumbers = this.data.map((obj: { number: any; }) => obj.number);
    return seatNumbers.join('-');
  }
}
