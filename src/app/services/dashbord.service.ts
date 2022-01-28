import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BasvuruDurumlari } from '../models/basvurular';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  private controller: string = 'api/Dashboards';
  private apiUrl: string = `${environment.baseurl}${this.controller}/`;
  constructor(private httpclient: HttpClient) {
  }

  public GetDurumlar() {
    return this.httpclient.get<BasvuruDurumlari[]>(this.apiUrl + 'DurumSayilari');
  }
}
