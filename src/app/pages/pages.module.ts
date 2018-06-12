import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {FullListPage} from "./full-list/full-list.page";
import {CommonModule} from '@angular/common';
import {MainPage} from "./main-page/main.page";

export const appRoutes: Routes = [
  {path: 'lista', component: FullListPage},
  {path: '', component: MainPage},

];

@NgModule({
  imports: [
    CommonModule,

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
