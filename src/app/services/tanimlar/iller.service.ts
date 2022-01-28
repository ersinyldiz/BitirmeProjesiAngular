import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iller } from 'src/app/models/tanimlar/iller';
import { tap } from 'rxjs/operators';
import { SonucBildirimi } from 'src/app/models/sonuc-bildirimi';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IllerService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public selected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller: string = 'api/Iller';
  private apiUrl: string = `${environment.baseurl}${this.controller}/`;

  constructor(private httpclient: HttpClient) {
    this.islemTuru = new BehaviorSubject<number>(1);
    this.SayfayiYenile = new BehaviorSubject<boolean>(false);
  }

  public getIslemTuru(): Observable<number> {
    return this.islemTuru.asObservable();
  }

  public getSayfayiYenile(): Observable<boolean> {
    return this.SayfayiYenile.asObservable();
  }

  public AddIller(data: Iller) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddIller', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public UpdateIller(data: Iller) {
    return this.httpclient.put<SonucBildirimi>(this.apiUrl + 'UpdateIller', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public DeleteIller(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteIller/${id}`).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public GetIllerByID(id: number) {
    return this.httpclient.get<Iller[]>(this.apiUrl + `GetIllerByID/${id}`);
  }

  public GetIllerAll() {
    return this.httpclient.get<Iller[]>(this.apiUrl + 'GetIllerAll');
  }

}
