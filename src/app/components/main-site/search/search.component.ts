import { Component, OnInit } from '@angular/core';
import { WeathersService } from 'src/app/services/weathers.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location = new FormControl('', [Validators.pattern('^[a-zA-Z,]{3,}')]);

  metricUnit = 'metric';
  imperialUnit = 'imperial';
  standardUnit = 'standard';
  selectedUnit: string | undefined = '';
  enableSwitchUnitButton = false; 

  constructor(
    private weathersService: WeathersService
  ) { }

  ngOnInit(): void {
    if(this.weathersService.readUnitInLocalStorage()) {
      this.selectedUnit = this.weathersService.readUnitInLocalStorage();
    } else {
      this.selectedUnit = 'standard';
    }
  }
  
  searchWeathers(unit?: string): void {
    if (unit) {
      this.selectedUnit = unit;
      this.weathersService.getWeathers(this.location.value, unit).subscribe({
        next: data => {
          this.weathersService.passWeathers(data);
        }, 
        error: error => {
          this.weathersService.handleError(error);
        }
      });
    } else {
      this.weathersService.getWeathers(this.location.value).subscribe({
        next: data => {
          this.weathersService.passWeathers(data);
        }, 
        error: error => {
          this.weathersService.handleError(error);
        }
      });
    }
    this.selectedUnit = this.weathersService.readUnitInLocalStorage();
    this.enableSwitchUnitButton = true;
  }

  // clearSearchedWeathers(): void {
  // }
}
