import { Component, OnInit } from '@angular/core';
import { DxTreeViewModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import { UserControlService } from 'src/app/services/usercontrol.service';
import { Editmenu } from 'src/app/models/usermanagement/editmenu';
import { each, find, some } from 'lodash';
import { ToastyService } from 'ng2-toasty';
import { Menutanimlari } from 'src/app/models/usermanagement/menutanimlari';
import { IslemTuru } from 'src/app/enum/islem-turu';


@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent implements OnInit {

  menuler: Menutanimlari;
  islemTuru: number;
  constructor(private dataservis: UserControlService, private toastr: ToastyService) {
    this.menuler = new Menutanimlari();
    this.dataservis.getIslemTuru().subscribe(value => {
      this.islemTuru = value;
      if (this.islemTuru === IslemTuru.Edit && this.dataservis.Menuselected.length > 0) {

        this.menuler.MenuAdi = this.dataservis.Menuselected[0].MenuAdi;
        this.menuler.id = this.dataservis.Menuselected[0].id;
        this.veriGetir();
      }
    });
  }

  ngOnInit() {

  }


  onSubmit() {
    /** check form */
    if (this.menuler.MenuAdi === null || this.menuler.MenuAdi === '' || this.menuler.MenuAdi === undefined) {
      this.toastr.success({
        title: 'Sonuç Mesajı',
        msg: 'Menü Adı Boş Olamaz',
        timeout: 5000,
        theme: 'error'
      });
      return;
    }

    this.dataservis.updateMenuTanimlari(this.menuler).subscribe(pagedData => {
      if (pagedData.SonucMesaji === '0000') {
        this.toastr.success({
          title: 'Sonuç Mesajı',
          msg: 'Kayıt Başarı ile Eklenmiştir.',
          timeout: 5000,
          theme: 'default'
        });
        this.dataservis.SayfayiYenile.next(true);
        this.closeMyModal();
        this.dataservis.loading = false;
      } else {
        this.toastr.success({
          title: 'Sonuç Mesajı',
          msg: pagedData.SonucMesaji,
          timeout: 5000,
          theme: 'default'
        });
        this.dataservis.loading = false;
      }
    });
  }


  veriGetir() {
    this.dataservis.getEditMenu(this.dataservis.Menuselected[0].id).subscribe(pagedData => {
      this.menuler = pagedData;
    });
  }

  closeMyModal() {
    const element = document.getElementById('modalekran');
    element.children[0].classList.remove('md-show');
  }

  changed(event, permission: Editmenu, mainid, index) {
    this.menuler.Permissions[index].selected = false;
    const children = this.menuler.Permissions.filter(el => el.id === mainid && permission.selected === true);
    if (children.length > 0) {
      this.menuler.Permissions[index].selected = true;
    }
  }

  tumunuGuncelle(event, index) {
    if (event.target.checked) {
      this.menuler.Permissions[index].items.forEach(element => {
        element.selected = true;
      });
    } else {
      this.menuler.Permissions[index].items.forEach(element => {
        element.selected = false;
      });
    }
  }

}
