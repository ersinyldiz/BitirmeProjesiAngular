import { Component, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert2';
import { ToastyService } from 'ng2-toasty';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { DxDataGridComponent } from 'devextreme-angular';
import { locale, loadMessages } from 'devextreme/localization';
import trMessages from 'devextreme/localization/messages/tr.json';
import { ProfilService } from 'src/app/services/genel/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit {

  collapsed = false;

  constructor(
    private dataservis: ProfilService,
    private toastr: ToastyService
  ) {
    loadMessages(trMessages);
    locale(navigator.language);
  }

  ngOnInit() {

  }

}
