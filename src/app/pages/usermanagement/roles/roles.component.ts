import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Roltanimlari } from 'src/app/models/usermanagement/roltanimlari';
import { UserControlService } from 'src/app/services/usercontrol.service';
import { ToastyService } from 'ng2-toasty';
import { loadMessages, locale } from 'devextreme/localization';
import DataSource from 'devextreme/data/data_source';
import trMessages from 'devextreme/localization/messages/tr.json';
import swal from 'sweetalert2';
import { IslemTuru } from 'src/app/enum/islem-turu';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @ViewChild('gridRef', { static: false }) dataGridRoles: DxDataGridComponent;

  dataSource: DataSource;
  collapsed = false;

  postrecord: Roltanimlari;
  rows = Array<Roltanimlari>();

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
    this.dataservis.getRolTanimlari().subscribe(pagedData => {
      this.rows = pagedData;
    });
  }

  onSelectionChanged(e) {
    if(e.selectedRowsData.length>0)
    {
      this.dataservis.buttonDisabled = false;
      this.dataservis.Rolselected = e.selectedRowsData;
    }
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
        this.dataservis.deleteRolTanimlari(this.dataservis.Rolselected[0].id).subscribe(pagedData => {
          if (pagedData.SonucMesaji === '0000') {
            this.toastr.success({
              title: 'Sonuç Bilgisi',
              msg: 'Seçmiş Olduğunuz Kayıt Silinmiştir.',
              timeout: 5000,
              theme: 'default'
            });
            this.veriGetir();
          }
          else
          {
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
    this.dataGridRoles.instance.clearSelection();
    this.dataservis.islemTuru.next(IslemTuru.Yok);
    if (IslemTuru.New === types) {
      this.dataservis.Rolselected = [];
      this.dataservis.buttonDisabled = true;
    }
    this.dataservis.islemTuru.next(types);
    document.querySelector('#' + event).classList.add('md-show');
  }

}
