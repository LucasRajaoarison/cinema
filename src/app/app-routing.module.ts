import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AnimeListComponent} from "./Components/anime-list/anime-list.component";
import {AnimeDetailComponent} from "./Components/Tabs/anime-detail/anime-detail.component";
import {MainReservationTabsComponent} from "./Components/Tabs/main-reservation-tabs/main-reservation-tabs.component";


const routes: Routes = [
  {
    path: "",
    component: AnimeListComponent
  },
  {
    path: "movies",
    component: AnimeListComponent
  },
  {
    path: "details/:id",
    component: MainReservationTabsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
