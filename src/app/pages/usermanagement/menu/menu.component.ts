import { Component, OnInit, ViewChild } from '@angular/core';
import { Menutanimlari } from 'src/app/models/usermanagement/menutanimlari';
import { UserControlService } from 'src/app/services/usercontrol.service';

import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';
import swal from 'sweetalert2';
import { ToastyService } from 'ng2-toasty';
import { IslemTuru } from 'src/app/enum/islem-turu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('gridRef', { static: false }) dataMenuGrid: DxDataGridComponent;

  dataSource: DataSource;
  collapsed = false;

  postrecord: Menutanimlari;
  rows = Array<Menutanimlari>();

  constructor(private dataservis: UserControlService, private toastr: ToastyService) {
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

  veriGetir() {
    this.dataservis.getMenuTanimlari().subscribe(pagedData => {
      this.rows = pagedData;
    });
  }

  onSelectionChanged(e) {
    if (e.selectedRowsData.length > 0) {
      this.dataservis.buttonDisabled = false;
      this.dataservis.Menuselected = e.selectedRowsData;
    }
  }

  pageChange(event) {
    // console.log(event);
  }

  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['sirano']);
    }
  }

  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue, 0) + '%' };
  }

  addRecord() {
    swal({
      title: 'Menü Adı',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Kaydet',
      showLoaderOnConfirm: true,
      cancelButtonText: 'Vazgeç',
      preConfirm: (text) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (text === '') {
              swal.showValidationError(
                'Bu Alan Boş Geçilemez'
              );
            }
          }, 500);
        });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.postrecord = new Menutanimlari();
        this.postrecord.MenuAdi = result.value;
        this.dataservis.addMenuTanimlari(this.postrecord).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.veriGetir();
            this.toastr.success({
              title: 'Sonuç Bilgisi',
              msg: 'Kayıt Sisteme Başarı ile Eklenmiştir.',
              timeout: 5000,
              theme: 'default'
            });
          } else {
            swal({
              type: 'success',
              title: 'Sonuç',
              html: pagedData.SonucMesaji
            });
          }
        });
      }
    });
  }

  deleteRecord() {
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
        // degisken
        this.dataservis.deleteMenuTanimlari(this.dataservis.Menuselected[0].id).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.toastr.success({
              title: 'Sonuç Bilgisi',
              msg: 'Seçmiş Olduğunuz Kayıt Silinmiştir.',
              timeout: 5000,
              theme: 'default'
            });
            this.veriGetir();
          }
          else {
            this.toastr.error({
              title: 'Sonuç Bilgisi',
              msg: pagedData.SonucMesaji,
              timeout: 5000,
              theme: 'default'
            });
          }
        });
      }
    });
  }

  openMyModal(event, types) {
    this.dataMenuGrid.instance.clearSelection();
    this.dataservis.islemTuru.next(IslemTuru.Yok);
    if (IslemTuru.New === types) {
      this.dataservis.Menuselected = [];
      this.dataservis.buttonDisabled = true;
    }
    this.dataservis.islemTuru.next(types);
    document.querySelector('#' + event).classList.add('md-show');
  }

}
