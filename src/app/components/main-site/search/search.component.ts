import { Component, OnInit } from '@angular/core';
import { WeathersService } from 'src/app/services/weathers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCity = '';
  
  constructor(
    private weathersService: WeathersService
  ) { }

  ngOnInit(): void {
  }
  
  searchWeathers(): void {
    if (this.searchCity === '') {
      return;
    }

    this.weathersService.getWeathers(this.searchCity).subscribe({
      next: data => {
        this.weathersService.passWeathers(data);
      }, 
      error: error => {
        console.log('Error from Weather Service:', error);
      }
    });
  }

}
