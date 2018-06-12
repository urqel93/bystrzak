import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicCardComponent} from './basic-card/basic-card.component';
import {MatCardModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  declarations: [BasicCardComponent],
  exports: [BasicCardComponent]
})
export class ComponentsModule {
}
