export class Pages {
  KayitSayisi: number;
  SayfaNumarasi: number;
  SiralamaSutunu: string;
  AskDesc: string;
  TabloAdi: string;
  ClientSide: number;
  Filter: Filter [];
}

export class Filter {
  ColumnName: string;
  Val: string;
  constructor(ColumnName: string, Val: string) {
    this.ColumnName = ColumnName;
    this.Val = Val;
  }
}
