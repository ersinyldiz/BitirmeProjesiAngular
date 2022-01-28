import { Component, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert2';
import { ToastyService } from 'ng2-toasty';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { DxDataGridComponent } from 'devextreme-angular';
import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';
import { Mahalle, MahalleJoin } from 'src/app/models/tanimlar/mahalle';
import { MahalleService } from 'src/app/services/tanimlar/mahalle.service';
import { FormGroup } from '@angular/forms';
import { MuhtarIslemleriService } from 'src/app/services/muhtarislemleri.service';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { BasvurularJoin, BasvuruOnayClass } from 'src/app/models/basvurular';

@Component({
  selector: 'app-basvuruonaybekleyen',
  templateUrl: './basvuruonaybekleyen.component.html',
  styleUrls: ['./basvuruonaybekleyen.component.scss']
})

export class BasvuruOnayBekleyenComponent implements OnInit {

  @ViewChild('gridPerformansTakip', { static: false }) dataGridPerformansTakip: DxDataGridComponent;
  @ViewChild('gridPerformansTakipGecmis', { static: false }) dataGridPerformansTakipGecmis: DxDataGridComponent;

  rows: BasvurularJoin[] = [];
  collapsed = false;
  baslik: string;
  gridNo: number;
  form: FormGroup;

  constructor(
    private dataservis: MuhtarIslemleriService,
    private toastr: ToastyService,
    private formBuilder: RxFormBuilder,
  ) {
    loadMessages(trMessages);
    locale(navigator.language);
  }

  ngOnInit() {
    const basvuruOnay: BasvuruOnayClass = new BasvuruOnayClass();
    this.form = this.formBuilder.formGroup(basvuruOnay);
    this.veriGetir();
    this.dataservis.getSayfayiYenile().subscribe(value => {
      if (value) {
        this.veriGetir();
      }
    });
  }

  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['SiraNo']);
    }
  }

  veriGetir() {
    this.dataservis.selected = [];
    this.dataservis.buttonDisabled = true;
    this.dataservis.GetBasvurularByMuhtarOnayiBekleyen().subscribe(pagedData => {
      this.rows = pagedData;
      this.dataservis.SayfayiYenile.next(false);
    });
  }

  onSelectionChanged(e) {
    if (e.selectedRowsData.length > 0) {
      this.gridNo = 1;
      this.dataservis.buttonDisabled = false;
      this.dataservis.selected = e.selectedRowsData;
    }
    this.form.get('kayitlar').setValue(e.selectedRowsData);
  }

  onayla() {
    if (this.dataservis.selected.length === 0) {
      return;
    }
    swal({
      title: 'Uyarı!',
      text: 'Bu Başvurular Onaylansın mı ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
    }).then((result) => {
      if (result.value) {
        this.dataservis.Onayla(this.form.value).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.toastr.success({
              title: 'Sonuç Mesajı',
              msg: 'Seçmiş Olduğunuz Başvurular Başarı ile Onaylanmıştır.',
              timeout: 5000,
              theme: 'default'
            });
            this.veriGetir();
          } else {
            swal({
              type: 'error',
              title: 'Sonuç',
              confirmButtonText: 'Tamam',
              html: pagedData.SonucMesaji
            });
          }
        });
      }
    });
  }
  reddet() {
    if (this.dataservis.selected.length === 0) {
      return;
    }
    swal({
      title: 'Uyarı!',
      text: 'Bu Başvurular İptal Edilip Silinsin mi ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
    }).then((result) => {
      if (result.value) {
        this.dataservis.Reddet(this.form.value).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.toastr.success({
              title: 'Sonuç Mesajı',
              msg: 'Seçmiş Olduğunuz Başvurular Başarı ile Silinmiştir.',
              timeout: 5000,
              theme: 'default'
            });
            this.veriGetir();
          } else {
            swal({
              type: 'error',
              title: 'Sonuç',
              confirmButtonText: 'Tamam',
              html: pagedData.SonucMesaji
            });
          }
        });
      }
    });
  }
}
