import { Component, OnInit, ElementRef } from '@angular/core';
import { DashbordService } from '../services/dashbord.service';
import { UserControlService } from '../services/usercontrol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  bgwidth: number = 1000;
  durum1: number = 0;
  durum2: number = 0;
  durum3: number = 0;
  durum4: number = 0;

  constructor(
    private servis: DashbordService,
    private servisUser: UserControlService,
  ) {
  };

  ngOnInit() {
    this.servis.GetDurumlar().subscribe(data => {
      if (data !== null && data !== undefined) {
        this.durum1 = data.reduce((acc, cur) => acc + cur.Toplam, 0);
        this.durum2 = data.filter(x => x.Durum == 0)[0] != undefined ? data.filter(x => x.Durum == 0)[0].Toplam : 0;
        this.durum3 = data.filter(x => x.Durum == 1)[0] != undefined ? data.filter(x => x.Durum == 1)[0].Toplam : 0;
        this.durum4 = data.filter(x => x.Durum == 3)[0] != undefined ? data.filter(x => x.Durum == 3)[0].Toplam : 0;
      }
    });
  }

}
