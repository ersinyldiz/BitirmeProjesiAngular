import { required, NumericValueType, numeric, prop, maxLength } from '@rxweb/reactive-form-validators';

export class KullaniciBilgileriPage {
  Rows: KullaniciBilgileri[];
  Count: number;
}

export class KullaniciBilgileri {
  @prop()
  id?: number;
  @required()
  @maxLength({ value: 50 })
  UserName: string;
  @required()
  @maxLength({ value: 50 })
  PassWord: string;
  @prop()
  @maxLength({ value: 11 })
  TCKimlikNo?: string;
  @required()
  @maxLength({ value: 20 })
  Adi: string;
  @required()
  @maxLength({ value: 20 })
  Soyadi: string;
  @prop()
  @maxLength({ value: 20 })
  GSM?: string;
  @prop()
  @maxLength({ value: 20 })
  Telefon?: string;
  @maxLength({ value: 50 })
  Email: string;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  Rol: number;
  @prop()
  FirmaKodu?: string;
  @prop()
  image?: string;
  @required()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  MenuRol: number;
  @prop()
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
  Aktif?: number;
}
export class PasswordChangeModel {
  @prop()
  @required()
  @maxLength({ value: 20 })
  MevcutParola: string;
  @prop()
  @required()
  @maxLength({ value: 20 })
  YeniParola: string;
  @prop()
  @required()
  @maxLength({ value: 20 })
  YeniParolaTekrar: string;
}

export class KullaniciBilgileriListe {
  id?: number;
  UserName: string;
  PassWord: string;
  TCKimlikNo?: string;
  Adi: string;
  Soyadi: string;
  GSM?: string;
  Email: string;
  Rol: number;
  FirmaKodu?: string;
  image?: string;
  MenuRol: number;
  Aktif?: number;
  PersonelID?: number;
  RolAdi?: string;
  MenuAdi?: string;
  adsoyad?: string;
}
