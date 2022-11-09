import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeathersService } from 'src/app/services/weathers.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCity = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]);
  searchCountry = new FormControl('');

  constructor(
    private weathersService: WeathersService
  ) { }

  ngOnInit(): void {
  }
  
  searchWeathers(): void {
    this.weathersService.getWeathers(this.searchCity.value, this.searchCountry.value).subscribe({
      next: data => {
        this.weathersService.passWeathers(data);
      }, 
      error: error => {
        console.log('Error from Weather Service:', error);
      }
    });
  }

}
