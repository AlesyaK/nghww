import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { DataFilterPipe } from './common/pipes/data-filter.pipe';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';
import { PhoneFormatPipe } from './common/pipes/phone-format.pipe';
import {WidgetDataService} from './common/services/widget-data.service';
import { MainCardComponent } from './main-widget/main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    DataFilterPipe,
    WeatherWidgetComponent,
    SocialWidgetComponent,
    PhoneFormatPipe,
    MainCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      {provide: WidgetDataService, useClass: WidgetDataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
