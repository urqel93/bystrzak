import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {FullListPage} from "./full-list/full-list.page";
import {CommonModule} from '@angular/common';
import {MainPage} from "./main-page/main.page";
import {ComponentsModule} from "../components/components.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule, MatIconModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";

export const appRoutes: Routes = [
  {path: 'lista', component: FullListPage},
  {path: '', component: MainPage},

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
    MainPage
  ],
  exports: [
    FullListPage,
    MainPage
  ]
})

export class PagesModule {

}
