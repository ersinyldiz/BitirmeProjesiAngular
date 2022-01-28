import { required, NumericValueType, numeric, prop, maxLength } from '@rxweb/reactive-form-validators';

export class BasvurularPage {
  Rows: Basvurular[];
  Count: number;
}

export class Basvurular {
  @prop()
  SiraNo?: number;
  @required()
  @maxLength({ value: 11 })
  TcNo: string;
  @required()
  @maxLength({ value: 50 })
  Ad: string;
  @required()
  @maxLength({ value: 50 })
  Soyad: string;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  IlID: number;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  IlceID: number;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  MahalleID: number;
  @prop()
  @maxLength({ value: 500 })
  Aciklama?: string;
  @prop()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  Durum?: number;
  @prop()
  BasvuruTarih?: Date;
  @prop()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  MuhtarID?: number;
  @prop()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  YardimciID?: number;
}
export class BasvurularJoin {
  SiraNo?: number;
  TcNo: string;
  Ad: string;
  Soyad: string;
  IlID: number;
  IlceID: number;
  MahalleID: number;
  Aciklama?: string;
  Durum?: number;
  BasvuruTarih?: Date;
  MuhtarID?: number;
  YardimciID?: number;
  MuhtarAdSoyad?: string;
  MuhtarTelefon?: string;
}

export class BasvuruOnayClass {
  @required()
  kayitlar: [];
}

export class BasvuruDurumlari {
  Durum?: number;
  Toplam?: number;
}