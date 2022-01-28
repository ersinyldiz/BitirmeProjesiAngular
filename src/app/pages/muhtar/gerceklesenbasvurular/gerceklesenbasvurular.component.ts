import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';
import { MuhtarIslemleriService } from 'src/app/services/muhtarislemleri.service';
import { BasvurularJoin, BasvuruOnayClass } from 'src/app/models/basvurular';

@Component({
  selector: 'app-gerceklesenbasvurular',
  templateUrl: './gerceklesenbasvurular.component.html',
  styleUrls: ['./gerceklesenbasvurular.component.scss']
})

export class GerceklesenBasvurularComponent implements OnInit {

  @ViewChild('gridPerformansTakip', { static: false }) dataGridPerformansTakip: DxDataGridComponent;

  rows: BasvurularJoin[] = [];
  collapsed = false;
  baslik: string;
  gridNo: number;

  constructor(
    private dataservis: MuhtarIslemleriService,
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
      e.component.expandRow(['SiraNo']);
    }
  }

  veriGetir() {
    this.dataservis.selected = [];
    this.dataservis.buttonDisabled = true;
    this.dataservis.GetBasvurularByGerceklesen().subscribe(pagedData => {
      this.rows = pagedData;
      this.dataservis.SayfayiYenile.next(false);
    });
  }
}
