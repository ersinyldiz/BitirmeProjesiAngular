import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastyService } from 'ng2-toasty';
import swal from 'sweetalert2';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { Iller } from 'src/app/models/tanimlar/iller';
import { IllerService } from 'src/app/services/tanimlar/iller.service';

@Component({
  selector: 'app-editiller',
  templateUrl: './editiller.component.html',
  styleUrls: ['./editiller.component.scss']
})

export class EditillerComponent implements OnInit {

  form: FormGroup;
  islemTuru: number;
  control = false;


  constructor(
    private dataservis: IllerService,
    private toastr: ToastyService,
    private formBuilder: RxFormBuilder
  ) {}

  ngOnInit() {
    const iller: Iller = new Iller();
    this.form = this.formBuilder.formGroup(iller);
    this.dataservis.getIslemTuru().subscribe(value => {
      this.islemTuru = value;
      if (value === IslemTuru.Yok) {
        this.control = false;
        this.dataservis.loading = false;
        this.form.reset();
      } else if (value === IslemTuru.Edit) {
        if (this.dataservis.selected.length > 0) {
          this.form.patchValue(this.dataservis.selected[0]);
        }
      } else if (value === IslemTuru.New) {
        this.form.reset();
      }
    });
  }

  get f() { return this.form.controls; }

  closeMyModal() {
    const element = document.getElementById('modalekran');
    element.children[0].classList.remove('md-show');
    this.dataservis.buttonDisabled = true;
  }

  kaydet() {
    if (this.dataservis.loading === true) { return; }
    if (this.islemTuru === IslemTuru.Yok) { return; }
    this.control = true;
    if (this.form.invalid) {
      return;
    }
    this.dataservis.loading = true;
    if (this.islemTuru === IslemTuru.New) {
      this.dataservis.AddIller(this.form.value).subscribe(pagedData => {
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
          swal({
            type: 'error',
            title: 'Sonuç',
            confirmButtonText: 'Tamam',
            html: pagedData.SonucMesaji
          });
          this.dataservis.loading = false;
        }
      });
    }
    if (this.islemTuru === IslemTuru.Edit && this.dataservis.selected[0].SiraNo > 0) {
      this.dataservis.UpdateIller(this.form.value).subscribe(pagedData => {
        if (pagedData.SonucMesaji === '0000') {
          this.toastr.success({
            title: 'Sonuç Mesajı',
            msg: 'Kayıt Başarı ile Güncellenmiştir.',
            timeout: 5000,
            theme: 'default'
          });
          this.dataservis.SayfayiYenile.next(true);
          this.closeMyModal();
          this.dataservis.loading = false;
        } else {
          swal({
            type: 'error',
            title: 'Sonuç',
            confirmButtonText: 'Tamam',
            html: pagedData.SonucMesaji
          });
          this.dataservis.loading = false;
        }
      });
    }
  }
}
