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

  private description: string;
  private dataAvailable: boolean = false;
  private serviceError: boolean = false;
  private errordescription: string = "SSP Geo service not available"

  displayedColumns = ['id', 'type', 'geometry', 'lonlat', 'wiki', 'city'];
  dataSource = new MatTableDataSource<FeatureData>()

  constructor(private geoinfoservice: GeoInfoService) { }

  ngOnInit() {
    if (this.dataSource.data.length === 0) {
      this.dataAvailable = false;
    }
  }

  getGeoInfo() {
    this.geoinfoservice.getGeoInfo()
      .subscribe((res) => {
        this.dataSource.data = res.FeatureData;
        this.dataAvailable = true;
        this.serviceError = false;
      },
        error => {
          this.dataAvailable = false;
          this.serviceError = true;
          this.errordescription = this.errordescription + ": " + error.statusText + "!";
        });
  }

}
