import { required, NumericValueType, numeric, prop, maxLength } from '@rxweb/reactive-form-validators';

export class IllerPage {
  Rows: Iller [];
  Count: number;
}

export class  Iller {
 @prop()
 SiraNo: number;
 @required()
 @maxLength({value: 255})
 IlAdi?: string;
}
