import { Component, OnInit, Input, forwardRef, OnDestroy  } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Roltanimlari } from 'src/app/models/usermanagement/roltanimlari';
import { UserControlService } from 'src/app/services/usercontrol.service';


@Component({
  selector: 'app-roltanimlari',
  templateUrl: './roltanimlari.component.html',
  styleUrls: ['./roltanimlari.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RolTanimlariComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RolTanimlariComponent),
      multi: true
    }
  ]
})
export class RolTanimlariComponent implements OnInit , ControlValueAccessor , Validators , OnDestroy {
  model: Roltanimlari [] = [];
  @Input() control: boolean = false;
  @Input() valid: boolean = true;
  @Input() disableyap: boolean = false;

  @Input() set data(value: number) {
    this.fm.setValue(value);
  }

  fm: FormControl;
  subscriptions: Subscription[] = [];

  onChange = (_: any) => {};
  onTouched: any = () => {};

  constructor(private servis: UserControlService) { }

  ngOnInit() {
    this.fm = new FormControl({ value: '', disabled: this.disableyap }, [Validators.required]);
    this.subscriptions.push(
      this.fm.valueChanges.subscribe(value => {
        this.onChange(value);
      })
    );
    this.servis.getRolTanimlari().subscribe(data => {
      if (this.valid === false) {
        this.fm.clearValidators();
        this.fm.updateValueAndValidity();
      }
      this.model = data;
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  writeValue(value): void {
    this.fm.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(c: FormControl) {
    return this.fm.disable ? this.disableyap : { RolTanimlarinumara: { valid: false } };
  }
}
