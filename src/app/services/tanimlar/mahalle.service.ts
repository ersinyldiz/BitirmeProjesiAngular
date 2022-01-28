import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mahalle, MahalleJoin } from 'src/app/models/tanimlar/mahalle';
import { tap } from 'rxjs/operators';
import { SonucBildirimi } from 'src/app/models/sonuc-bildirimi';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MahalleService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public selected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller: string = 'api/Mahalle';
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

  public AddMahalle(data: Mahalle) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddMahalle', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public UpdateMahalle(data: Mahalle) {
    return this.httpclient.put<SonucBildirimi>(this.apiUrl + 'UpdateMahalle', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public DeleteMahalle(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteMahalle/${id}`).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public GetMahalleByID(id: number) {
    return this.httpclient.get<Mahalle[]>(this.apiUrl + `GetMahalleByID/${id}`);
  }

  public GetMahalleAll() {
    return this.httpclient.get<Mahalle[]>(this.apiUrl + 'GetMahalleAll');
  }
  public GetMuhtarlar() {
    return this.httpclient.get<User[]>(this.apiUrl + 'GetMuhtarlar');
  }
  public GetMahalleAllJoin() {
    return this.httpclient.get<MahalleJoin[]>(this.apiUrl + 'GetMahalleAllJoin');
  }

  public GetMahalleByIlceID(id: number) {
    return this.httpclient.get<Mahalle[]>(this.apiUrl + `GetMahalleByIlceID/${id}`);
  }

}
