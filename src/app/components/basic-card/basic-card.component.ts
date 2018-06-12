import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;


  ngOnInit() {
  }

}
