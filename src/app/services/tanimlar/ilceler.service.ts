import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ilceler, IlcelerJoin } from 'src/app/models/tanimlar/ilceler';
import { tap } from 'rxjs/operators';
import { SonucBildirimi } from 'src/app/models/sonuc-bildirimi';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IlcelerService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public selected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller: string = 'api/Ilceler';
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

  public AddIlceler(data: Ilceler) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddIlceler', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public UpdateIlceler(data: Ilceler) {
    return this.httpclient.put<SonucBildirimi>(this.apiUrl + 'UpdateIlceler', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public DeleteIlceler(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteIlceler/${id}`).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public GetIlcelerByID(id: number) {
    return this.httpclient.get<Ilceler[]>(this.apiUrl + `GetIlcelerByID/${id}`);
  }

  public GetIlcelerAll() {
    return this.httpclient.get<Ilceler[]>(this.apiUrl + 'GetIlcelerAll');
  }
  public GetIlcelerAllJoin() {
    return this.httpclient.get<IlcelerJoin[]>(this.apiUrl + 'GetIlcelerAllJoin');
  }
  public GetIlcelerByIlID(id: number) {
    return this.httpclient.get<Ilceler[]>(this.apiUrl + `GetIlcelerByIlID/${id}`);
  }

}
