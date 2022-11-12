import { Component, OnInit } from '@angular/core';
import { WeathersService } from 'src/app/services/weathers.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {

  weathers: any[] = [];
  count: number = 0;
  unit: string = 'K'
  localDataStorage: any;

  constructor(
    private weathersService: WeathersService
    ) { }

  ngOnInit(): void {
    // 1. Read the local storage to display exist weathers data
    this.localDataStorage = this.weathersService.readWeathersInLocalStorage();
    // 2. When user click search button in the search component, subcribe to observer to emit data to the local storage and read it
    this.weathersService.currentResults.subscribe({
      next: (parameter: any) => {
        this.weathersService.saveWeathersInLocalStorage(parameter);
        this.localDataStorage = this.weathersService.readWeathersInLocalStorage();
      },
    });
  }

  showImageIcon(imageCode: string) {
    return `http://openweathermap.org/img/wn/${imageCode}@2x.png`;
  }
}
