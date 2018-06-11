import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

export interface IWeather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

export interface ISocial {
    title: string;
    img: string;
    followers: number;
    following: number;
}

export interface IData {
    img: string;
    img_sm: string;
    address: string;
    phone:  number;
    weather: IWeather;
    social_info: ISocial;
    type: string;
}

@Injectable()
export class WidgetDataService {

    private _data: IData[] = [
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Sed perspiciatis Et harum quidem 1',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Hotel',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Sed perspiciatis Et harum quidem 2',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Hotel',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Sed perspiciatis Et harum quidem 3',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Hotel',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Fishing perspiciatis Et harum quidem 1',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Fishing',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Fishing perspiciatis Et harum quidem 2',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Fishing',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Tour perspiciatis Et harum quidem 1',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Tours',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Tour perspiciatis Et harum quidem 2',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Tours',
        },
        {
            'img': 'assets/images/1.jpg',
            'img_sm': 'assets/images/r1.jpg',
            'address': 'Weather perspiciatis Et harum quidem',
            'phone': 1285968685,
            'weather': {
                'title': 'Et harum quidem',
                'icon': 'assets/images/cloudy.png',
                'water': 20,
                'temperature': 14
            },
            'social_info': {
                'title': 'Nam libero voluptatem',
                'img': 'assets/images/b1.jpg',
                'followers': 2850,
                'following': 675
            },
            'type': 'Weather',
        }
    ];

    constructor( ) {

    }

    public getWidgetData(): Observable<IData[]> {
      return of(this._data)
          .pipe(
              delay(0)
          );
    }

    public getWidgetNav(): Observable<String[]> {
      const navItems: String[] = [];
      this._data.forEach((item: IData) => {
        if ( !navItems.includes(item.type) ) {
          navItems.push(item.type);
        }
      });

      return of(navItems);
    }
}
