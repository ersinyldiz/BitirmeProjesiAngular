import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastyService } from 'ng2-toasty';
import swal from 'sweetalert2';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { KullaniciBilgileri } from 'src/app/models/usermanagement/kullanicibilgileri';
import { KullaniciBilgileriService } from 'src/app/services/kullanicibilgileri.service';

@Component({
  selector: 'app-editkullanicibilgileri',
  templateUrl: './editkullanicibilgileri.component.html',
  styleUrls: ['./editkullanicibilgileri.component.scss']
})

export class EditkullanicibilgileriComponent implements OnInit {

  form: FormGroup;
  islemTuru: number;
  control = false;

  constructor(
    private dataservis: KullaniciBilgileriService,
    private toastr: ToastyService,
    private formBuilder: RxFormBuilder
  ) {
  }

  ngOnInit() {
    const kullanicibilgileri: KullaniciBilgileri = new KullaniciBilgileri();
    this.form = this.formBuilder.formGroup(kullanicibilgileri);
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
        this.form.get('Aktif').setValue('1');
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
      this.dataservis.AddKullaniciBilgileri(this.form.value).subscribe(pagedData => {
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
    if (this.islemTuru === IslemTuru.Edit && this.dataservis.selected[0].id > 0) {
      this.dataservis.UpdateKullaniciBilgileri(this.form.value).subscribe(pagedData => {
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
