import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {IData, WidgetDataService} from './common/services/widget-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public title = 'Hot Weather Widget';
    public copyright = '© 2015 Hot Weather Widget. All rights reserved | Design by  ' +
        '<a href="http://w3layouts.com/" target="_blank">  W3layouts </a>';
    public widgetData: Observable<IData[]>;
    // public widgetNav: Observable<String[]>;
    // public selectedType = 'Hotel';
    public constructor( private _widgetData: WidgetDataService ) {
    }

    public ngOnInit(): void {
        this.widgetData = this._widgetData.getWidgetData();
        // this.widgetNav = this._widgetData.getWidgetNav();
    }

    // public filterData(e: KeyboardEvent): void {
    //     const el = e.target as HTMLAnchorElement;
    // }
}
