import { Component, OnInit, Input, forwardRef, OnDestroy, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Mahalle } from 'src/app/models/tanimlar/mahalle';
import { MahalleService } from 'src/app/services/tanimlar/mahalle.service';


@Component({
  selector: 'app-mahalle',
  templateUrl: './mahalle.component.html',
  styleUrls: ['./mahalle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MahalleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MahalleComponent),
      multi: true
    }
  ]
})
export class MahalleComponent implements OnInit, ControlValueAccessor, Validators, OnDestroy, OnChanges {
  model: Mahalle[] = [];
  @Input() control: boolean = false;
  @Input() valid: boolean = true;
  @Input() disableyap: boolean = false;

  public tempdata: number;

  @Input() set data(value: number) {
    this.tempdata = value;
  }

  get dataveri(): number {
    return this.tempdata;
  }

  fm: FormControl;
  subscriptions: Subscription[] = [];

  onChange = (_: any) => { };
  onTouched: any = () => { };

  constructor(private servis: MahalleService) {
    this.fm = new FormControl({ value: '', disabled: this.disableyap }, [Validators.required]);
    this.subscriptions.push(
      this.fm.valueChanges.subscribe(value => {
        this.onChange(value);
      })
    );
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (typeof (this.tempdata) !== 'undefined' && this.tempdata !== null) {
      this.servis.GetMahalleByIlceID(this.tempdata).subscribe(res => {
        this.model = res;
        // this.data = 0;
      });
    }
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
    return this.fm.disable ? this.disableyap : { Mahallenumara: { valid: false } };
  }
}
