import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KullaniciBilgileri, KullaniciBilgileriListe } from 'src/app/models/usermanagement/kullanicibilgileri';
import { tap } from 'rxjs/operators';
import { SonucBildirimi } from 'src/app/models/sonuc-bildirimi';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KullaniciBilgileriService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public selected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller: string = 'api/user';
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

  public AddKullaniciBilgileri(data: KullaniciBilgileri) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddNewUser', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public UpdateKullaniciBilgileri(data: KullaniciBilgileri) {
    return this.httpclient.put<SonucBildirimi>(this.apiUrl + 'UpdateUser', data).pipe(tap(x => {
      this.loading = true;
    }));
  }

  public DeleteKullaniciBilgileri(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteKullaniciBilgileri/${id}`).pipe(tap(x => {
      this.selected = [];
      this.buttonDisabled = true;
    }));
  }

  public GetKullaniciBilgileriByID(id: number) {
    return this.httpclient.get<KullaniciBilgileri[]>(this.apiUrl + `GetKullaniciBilgileriByID/${id}`);
  }

  public GetKullaniciBilgileriAllListe() {
    return this.httpclient.get<KullaniciBilgileriListe[]>(this.apiUrl + 'GetAllUser');
  }
  public GetKullaniciBilgileriAll() {
    return this.httpclient.get<KullaniciBilgileri[]>(this.apiUrl + 'GetKullaniciBilgileriAll');
  }

}
