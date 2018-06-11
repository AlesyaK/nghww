import {Component, Input, OnInit} from '@angular/core';
import {IData, WidgetDataService} from '../common/services/widget-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {
    public widgetData: Observable<IData[]>;
    public widgetNav: Observable<String[]>;
    public selectedType = 'Hotel';

    public constructor( private _widgetDataService: WidgetDataService ) {
    }

    public ngOnInit(): void {
        this.widgetData = this._widgetDataService.getWidgetData();
        this.widgetNav = this._widgetDataService.getWidgetNav();
    }
}
