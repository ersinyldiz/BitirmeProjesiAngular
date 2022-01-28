import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KullaniciBilgileri, KullaniciBilgileriListe } from 'src/app/models/usermanagement/kullanicibilgileri';
import { tap } from 'rxjs/operators';
import { SonucBildirimi } from 'src/app/models/sonuc-bildirimi';
import { BehaviorSubject, Observable } from 'rxjs';
import { BasvurularJoin, BasvuruOnayClass } from '../models/basvurular';

@Injectable({
  providedIn: 'root'
})
export class MuhtarIslemleriService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public selected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller: string = 'api/Basvurular';
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


  public GetBasvurularByMuhtarOnayiBekleyen() {
    return this.httpclient.get<BasvurularJoin[]>(this.apiUrl + 'GetBasvurularByMuhtarOnayiBekleyen');
  }

  public GetBasvurularByYardimOnayiBekleyen() {
    return this.httpclient.get<BasvurularJoin[]>(this.apiUrl + 'GetBasvurularByYardimOnayiBekleyen');
  }
  public GetBasvurularByYardimBekleyen() {
    return this.httpclient.get<BasvurularJoin[]>(this.apiUrl + 'GetBasvurularByYardimBekleyen');
  }
  public GetBasvurularByGerceklesen() {
    return this.httpclient.get<BasvurularJoin[]>(this.apiUrl + 'GetBasvurularByGerceklesen');
  }
  public GetBasvurularByYapilan() {
    return this.httpclient.get<BasvurularJoin[]>(this.apiUrl + 'GetBasvurularByYapilan');
  }

  public Onayla(data: BasvuruOnayClass) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'BasvuruOnayla', data).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }
  public BasvuruyaYardimEt(data: BasvuruOnayClass) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'BasvuruyaYardimEt', data).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }
  public Reddet(data: BasvuruOnayClass) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'BasvuruReddetSil', data).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public YardimiOnayla(data: BasvuruOnayClass) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'YardimiOnayla', data).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public YardimiİptalEt(data: BasvuruOnayClass) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'YardimiİptalEt', data).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }
}
