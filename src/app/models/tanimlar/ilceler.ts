import { required, NumericValueType, numeric, prop, maxLength } from '@rxweb/reactive-form-validators';

export class IlcelerPage {
  Rows: Ilceler [];
  Count: number;
}

export class  Ilceler {
 @prop()
 OrderNo: number;
 @required()
 @maxLength({value: 255})
 IlceAdi: string;
 @prop()
 SiraNo: number;
 @required()
 @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
 IlID: number;
}

export class  IlcelerJoin {
  OrderNo: number;
  IlceAdi: string;
  SiraNo: number;
  IlID: number;
  IlAdi: string;
 }