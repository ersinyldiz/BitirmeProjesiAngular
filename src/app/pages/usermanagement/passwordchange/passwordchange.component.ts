import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastyService } from 'ng2-toasty';
import swal from 'sweetalert2';
import { IslemTuru } from 'src/app/enum/islem-turu';
import { UserControlService } from 'src/app/services/usercontrol.service';
import { PasswordChangeModel } from 'src/app/models/usermanagement/kullanicibilgileri';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.scss']
})

export class PasswordChangeComponent implements OnInit {

  form: FormGroup;
  islemTuru: number;
  control = false;


  constructor(
    private dataservis: UserControlService,
    private toastr: ToastyService,
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    const sifre: PasswordChangeModel = new PasswordChangeModel();
    this.form = this.formBuilder.formGroup(sifre);
    this.form.reset();
  }

  get f() { return this.form.controls; }

  kaydet() {
    if (this.dataservis.loading === true) { return; }
    this.control = true;
    if (this.form.invalid) {
      return;
    }
    this.dataservis.loading = true;
    this.dataservis.PasswordChange(this.form.value).subscribe(pagedData => {
      if (pagedData.SonucMesaji === '0000') {
        this.toastr.success({
          title: 'Sonuç Mesajı',
          msg: 'Şifreniz Başarı ile Güncellenmiştir.',
          timeout: 5000,
          theme: 'default'
        });
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
