import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AnimeListComponent } from './Components/anime-list/anime-list.component';
import { AnimeDetailComponent } from './Components/Tabs/anime-detail/anime-detail.component';
import { AnimeItemComponent } from './Components/anime-list/anime-item/anime-item.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeReservationComponent } from './Components/Tabs/anime-reservation/anime-reservation.component';
import { MainReservationTabsComponent } from './Components/Tabs/main-reservation-tabs/main-reservation-tabs.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ReservationDialogComponent } from './Components/Tabs/reservation-dialog/reservation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { PriceSectionComponent } from './Components/Tabs/reservation-dialog/price-section/price-section.component';
import { PlaceSectionComponent } from './Components/Tabs/reservation-dialog/place-section/place-section.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    AnimeItemComponent,
    AnimeReservationComponent,
    MainReservationTabsComponent,
    ReservationDialogComponent,
    PriceSectionComponent,
    PlaceSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
