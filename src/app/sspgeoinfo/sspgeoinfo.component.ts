import { Component, OnInit } from '@angular/core';
import { GeoInfoService } from '../services/geoinfoservice'
import { MatTableDataSource } from '@angular/material/table'
import { GeoInfo, FeatureData } from '../models/geoinfo'




@Component({
  selector: 'app-sspgeoinfo',
  templateUrl: './sspgeoinfo.component.html',
  styleUrls: ['./sspgeoinfo.component.css']
})
export class SspgeoinfoComponent implements OnInit {

  displayedColumns = ['id', 'type', 'geometry', 'lonlat', 'wiki', 'city'];
  dataSource = new MatTableDataSource<FeatureData>()
  
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
