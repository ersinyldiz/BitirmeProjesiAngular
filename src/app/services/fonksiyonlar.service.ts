import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FonksiyonlarService {
  constructor() {
  }
  public gridParaFormat(cellInfo) {
    if (cellInfo.value !== undefined) {
      return cellInfo.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:.\d+)?$)/g, '$1,');
    }
  }
  public paraFormat(cellInfo) {
    return cellInfo != null ? cellInfo.toFixed(2).replace(/(\d)(?=(\d{3})+(?:.\d+)?$)/g, '$1,') : 0;
  }
}
