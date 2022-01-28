export enum IsDurumlari {
    OnayBekliyor = 0,
    AracKabuldeBekliyor = 1,
    AracDisardaYapiliyor = 2,
    AtolyedeBekliyor = 3,
    AracIslemeAlindi = 4,
    ParcaBekleniyor = 5,
    AmbarTarafindanDegerlendirildi = 6,
    Yapildi = 100
}

export enum CrmIsDurumlari {
    IslemBekleyen = 1,
    IslemeAlinan = 2,
    GeriGonderilen = 3,
    HavaleEdilen = 4,
    OnayBekleyen = 5,
    Kapatilan = 6
}

export enum IslemSahibi {
    BirimIslemleri = 1,
    PersonelIslemleri = 2
}

export enum YapilacakYer {
    Atolye = 0,
    Arazi = 1
}
