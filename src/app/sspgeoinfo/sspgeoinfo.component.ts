import { Component, OnInit } from '@angular/core';
import { GeoInfoService } from '../services/geoinfoservice'
import { GeoInfo } from '../models/geoinfo'




@Component({
  selector: 'app-sspgeoinfo',
  templateUrl: './sspgeoinfo.component.html',
  styleUrls: ['./sspgeoinfo.component.css']
})
export class SspgeoinfoComponent implements OnInit {

  constructor(private geoinfoservice: GeoInfoService) { }

  ngOnInit() {
  }

  getGeoInfo() {
    this.geoinfoservice.getGeoInfo()
      .subscribe((res) => {
        console.log(res);
      },
        error => {
        });
  }

}
