import { Component, OnInit } from '@angular/core';
import {SeatDetailService} from "../../../../Services/seat-detail.service";

@Component({
  selector: 'app-place-section',
  templateUrl: './place-section.component.html',
  styleUrls: ['./place-section.component.css']
})
export class PlaceSectionComponent implements OnInit {

  rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  seats: {
    number: string,
    isTaken: boolean,
    isSelected: boolean
  }[] = [];
  selectedPlace: any = [];

  constructor(private seatDetailService: SeatDetailService) {
    this.generateSeats();
  }

  ngOnInit(): void {
  }


  generateSeats() {
    for (const row of this.rows) {
      for (const col of this.columns) {
        const isTaken = Math.random() < 0.5;
        this.seats.push({ number: row + col, isTaken , isSelected: false});
      }
    }
  }

  isSeatTaken(st: any): boolean {
    const seat = this.seats.find(s => s.number === st.number);
    return seat ? seat.isTaken : false;
  }

  selectSeat(st: any) {
    if (!st.isSelected) {
      st.isSelected = true;
      this.seatDetailService.addToCart(st);
    }else {
      st.isSelected=false;
      this.seatDetailService.remove(st);
    }
    console.log(this.selectedPlace) ;
  }

  getBtnClass(t: any) {
    let str ="btn " ;

    if(t.isTaken) {

      str+="btn-danger" ;

    } else if(t.isSelected){

      str+="btn-success";

    }else if (!t.isTaken && !t.isSelected){
      str+="custom_color";
    }
    return str;
  }

}
