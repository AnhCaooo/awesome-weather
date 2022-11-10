import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeathersService } from 'src/app/services/weathers.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location = new FormControl('', [Validators.required]);
  metricUnit = 'metric';
  imperialUnit = 'imperial';

  constructor(
    private weathersService: WeathersService
  ) { }

  ngOnInit(): void {
  }
  
  searchWeathers(unit?: string): void {
    if (unit) {
      this.weathersService.getWeathers(this.location.value, unit).subscribe({
        next: data => {
          this.weathersService.passWeathers(data);
        }, 
        error: error => {
          console.log('Error from Weather Service:', error);
        }
      });
    } else {
      this.weathersService.getWeathers(this.location.value).subscribe({
        next: data => {
          this.weathersService.passWeathers(data);
        }, 
        error: error => {
          console.log('Error from Weather Service:', error);
        }
      });
    }

  }

  selectMetricUnits() {
    console.log('selectMetricUnits was clicked');
    this.searchWeathers(this.metricUnit);
  }

  selectImperialUnits() {
    console.log('selectImperialUnits was clicked');
    this.searchWeathers(this.imperialUnit);

  }
}
