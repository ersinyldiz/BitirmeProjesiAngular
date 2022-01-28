import { Component, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert2';
import { ToastyService } from 'ng2-toasty';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { DxDataGridComponent } from 'devextreme-angular';
import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';
import { Mahalle, MahalleJoin } from 'src/app/models/tanimlar/mahalle';
import { MahalleService } from 'src/app/services/tanimlar/mahalle.service';

@Component({
  selector: 'app-mahalle',
  templateUrl: './mahalle.component.html',
  styleUrls: ['./mahalle.component.scss']
})

export class MahalleComponent implements OnInit {

  @ViewChild('gridMahalle', { static: false }) dataGridMahalle: DxDataGridComponent;

  rows: MahalleJoin[] = [];
  collapsed = false;

  constructor(
    private dataservis: MahalleService,
    private toastr: ToastyService
  ) {
    loadMessages(trMessages);
    locale(navigator.language);
  }

  ngOnInit() {
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
      e.component.expandRow(['sirano']);
    }
  }

  veriGetir() {
    this.dataservis.selected = [];
    this.dataservis.buttonDisabled = true;
    this.dataservis.GetMahalleAllJoin().subscribe(pagedData => {
      this.rows = pagedData;
      this.dataservis.SayfayiYenile.next(false);
    });
  }

  onSelectionChanged(e) {
    if (e.selectedRowsData.length > 0) {
      this.dataservis.buttonDisabled = false;
      this.dataservis.selected = e.selectedRowsData;
    }
  }

  deleteRecord() {
    if (this.dataservis.selected.length === 0) {
      return;
    }
    swal({
      title: 'Uyarı!',
      text: 'Bu Kayıt Silinsin mi?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
    }).then((result) => {
      if (result.value) {
        this.dataservis.DeleteMahalle(this.dataservis.selected[0].SiraNo).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.toastr.success({
              title: 'Sonuç Mesajı',
              msg: 'Seçmiş Olduğunuz Kayıt Başarı ile Silinmiştir',
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

  openMyModal(event, types) {
    this.dataGridMahalle.instance.clearSelection();
    this.dataservis.islemTuru.next(IslemTuru.Yok);
    if (IslemTuru.New === types) {
      this.dataservis.selected = [];
      this.dataservis.buttonDisabled = true;
    }
    if (IslemTuru.Edit === types) {
      if (this.dataservis.selected.length === 0) {
        return;
      }
    }
    this.dataservis.islemTuru.next(types);
    document.querySelector('#' + event).classList.add('md-show');
  }
}
