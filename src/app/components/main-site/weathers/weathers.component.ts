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

  constructor(
    private weathersService: WeathersService
    ) { }

  ngOnInit(): void {
    this.weathersService.currentResults
    .subscribe({
      next: (parameter: any) => {
          this.weathers = parameter.list;
          this.count = parameter.count;
      },
    })
  }

}
