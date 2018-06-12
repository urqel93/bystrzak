import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {FullListPage} from "./full-list/full-list.page";
import {CommonModule} from '@angular/common';
import {MainPage} from "./main-page/main.page";
import {ComponentsModule} from "../components/components.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule, MatIconModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {DetailsPage} from "./details/details.page";

export const appRoutes: Routes = [
  {path: 'lista', component: FullListPage},
  {path: '', component: MainPage},
  {path: 'lista/detale/:id', component: DetailsPage},

];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ComponentsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,

  ],
  declarations: [
    FullListPage,
    MainPage,
    DetailsPage
  ],
  exports: [
    FullListPage,
    MainPage,
    DetailsPage
  ]
})

export class PagesModule {

}
