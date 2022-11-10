import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { openWeatherApiKey } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {
  apiKey = openWeatherApiKey;
  url = 'http://api.openweathermap.org/data/2.5/find?';

  private weatherResults = new Subject();
  currentResults = this.weatherResults.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  getWeathers(location: string | null, unit?: string | null): Observable<any> {
    if (unit) {
      return this.http.get(`${this.url}q=${location}&appid=${this.apiKey}&units=${unit}`);  

    }
    return this.http.get(`${this.url}q=${location}&appid=${this.apiKey}`);
  }

  passWeathers(weatherList: any): void{
    this.weatherResults.next(weatherList);
  }
}
