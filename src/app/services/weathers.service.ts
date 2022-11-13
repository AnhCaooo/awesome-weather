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

  weathersLocalStorageKey = 'weathers';
  unitLocalStorageKey = 'unit';

  private weatherResults = new Subject();
  currentResults = this.weatherResults.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  getWeathers(location: string | null, unit?: string | null): Observable<any> {
    if (unit) {
      this.saveUnitInLocalStorage(unit);
      return this.http.get(`${this.url}q=${location}&appid=${this.apiKey}&units=${unit}`);
    } else {
      this.saveUnitInLocalStorage('standard');
      return this.http.get(`${this.url}q=${location}&appid=${this.apiKey}`);
    }
  }

  passWeathers(weatherList: any): void{
    this.weatherResults.next(weatherList);
  }

  saveUnitInLocalStorage(unit: any) {
    localStorage.setItem(this.unitLocalStorageKey, JSON.stringify(unit));
  }

  readUnitInLocalStorage() {
    let unitLocalStorage: any = localStorage.getItem(this.unitLocalStorageKey);
    return JSON.parse(unitLocalStorage);
  }

  saveWeathersInLocalStorage(weatherData: any) {
    localStorage.setItem(this.weathersLocalStorageKey, JSON.stringify(weatherData));
  }

  readWeathersInLocalStorage() {
    let weathersLocalStorage: any = localStorage.getItem(this.weathersLocalStorageKey);
    return JSON.parse(weathersLocalStorage);
  }

  clearAllDataInLocalStorage() {
    localStorage.clear();
  }
}
