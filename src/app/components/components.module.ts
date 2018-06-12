import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicCardComponent} from './basic-card/basic-card.component';
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [BasicCardComponent],
  exports: [BasicCardComponent]
})
export class ComponentsModule {
}
