import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu';
import { Menutanimlari } from '../models/usermanagement/menutanimlari';
import { SonucBildirimi } from '../models/sonuc-bildirimi';
import { tap } from 'rxjs/operators';
import { UserInformation } from '../models/usermanagement/user-information';
import { Roltanimlari } from '../models/usermanagement/roltanimlari';
import { Permission } from '../models/usermanagement/permission';
import { BehaviorSubject, Observable } from 'rxjs';
import { Editmenu } from '../models/usermanagement/editmenu';
import { PasswordChangeModel } from '../models/usermanagement/kullanicibilgileri';


@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  public loading: boolean = false;
  public buttonDisabled = true;
  public Menuselected = [];
  public Rolselected = [];
  public islemTuru: BehaviorSubject<number>;
  public size = 20;
  public SayfayiYenile: BehaviorSubject<boolean>;
  public toastposition = 'bottom-right';

  private controller = 'api/User';
  private apiUrl = `${environment.baseurl}${this.controller}/`;

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

  public GetAuth() {
    return this.httpclient.get<UserInformation>(this.apiUrl + 'GetAuth');
  }

  public getUserMenu() {
    return this.httpclient.get<Menu[]>(this.apiUrl + 'GetUserMenu');
  }

  public addMenuTanimlari(data: Menutanimlari) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddMenuTanimlari', data);
  }

  public updateMenuTanimlari(data: Menutanimlari) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'UpdateMenu', data);
  }

  public deleteMenuTanimlari(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteMenuTanimlari/${id}`).pipe(tap(x => {
      this.Menuselected = [];
      this.buttonDisabled = true;
    }));
  }

  public getMenuTanimlari() {
    return this.httpclient.get<Menutanimlari[]>(this.apiUrl + 'GetMenuTanimlari');
  }


  public getRolTanimlari() {
    return this.httpclient.get<Roltanimlari[]>(this.apiUrl + 'GetRolTanimlari');
  }

  public AddRolTanimlari(data: Roltanimlari) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'AddRolTanimlari', data);
  }

  public UpdateRolTanimlari(data: Roltanimlari) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'UpdateRolTanimlari', data);
  }

  public getPermission() {
    return this.httpclient.get<Permission[]>(this.apiUrl + 'GetPermission');
  }

  public deleteRolTanimlari(id: number) {
    return this.httpclient.delete<SonucBildirimi>(this.apiUrl + `DeleteRolTanimlari/${id}`).pipe(tap(x => {
      this.Rolselected = [];
      this.buttonDisabled = true;
    }));
  }

  public getEditMenu(id: number) {
    return this.httpclient.get<Menutanimlari>(this.apiUrl + `GetEditMenu/${id}`);
  }

  public PasswordChange(data: PasswordChangeModel) {
    return this.httpclient.post<SonucBildirimi>(this.apiUrl + 'PasswordChange', data);
  }

}
