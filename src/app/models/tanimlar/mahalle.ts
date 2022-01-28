import { required, NumericValueType, numeric, prop, maxLength } from '@rxweb/reactive-form-validators';

export class MahallePage {
  Rows: Mahalle[];
  Count: number;
}

export class Mahalle {
  @prop()
  SiraNo: number;
  @required()
  @maxLength({ value: 250 })
  MahalleAdi: string;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  IlceID: number;
  @prop()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  OrderNo?: number;
  @prop()
  KayitTarih?: Date;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  IlID: number;
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  MuhtarID: number;
}

export class MahalleJoin {
  SiraNo: number;
  MahalleAdi: string;
  IlceID: number;
  OrderNo?: number;
  KayitTarih?: Date;
  IlID: number;
  IlceAdi: string;
  IlAdi: string;
  MuhtarID?: number;
  MuhtarAdSoyad: string;
}
