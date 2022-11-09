import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { openWeatherApiKey } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {
  apiKey = openWeatherApiKey;
  url = 'http://api.openweathermap.org/data/2.5/find?q=';

  private weatherResults = new Subject();
  currentResults = this.weatherResults.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getWeathers(cityName: string, countryCode?: string): Observable<any> {
    if(countryCode) {
      return this.http.get(`${this.url}${cityName},${countryCode}&appid=${this.apiKey}`);  
    }
    return this.http.get(`${this.url}${cityName}&appid=${this.apiKey}`);
  }

  passWeathers(weatherList: any): void{
    this.weatherResults.next(weatherList);
  }
}