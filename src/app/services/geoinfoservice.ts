import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { GeoInfo } from '../models/geoinfo'
import { Observable } from "rxjs";


@Injectable()
export class GeoInfoService {

    private sspurl = "http://sspcodingexercise.s3-website-us-west-2.amazonaws.com/Sample.json"
    constructor(public http: HttpClient) { }

    getGeoInfo(): Observable<GeoInfo> {
        return this.http.get<GeoInfo>(this.sspurl, {
            params: new HttpParams()
        });
    }
}