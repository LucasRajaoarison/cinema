import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "./movie-state";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  movieSourceEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
  movieSourceEVentObservable = this.movieSourceEventSubject.asObservable();

  publishEvent(event: ActionEvent) {
    this.movieSourceEventSubject.next(event);
  }

}
