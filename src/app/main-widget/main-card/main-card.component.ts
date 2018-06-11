import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../../common/services/widget-data.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input() item: IData;
  constructor() { }

  ngOnInit() {
  }

}
