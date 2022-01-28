import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhtarlarComponent } from './muhtarlar.component';

describe('PersonelBilgileriComponent', () => {
  let component: MuhtarlarComponent;
  let fixture: ComponentFixture<MuhtarlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhtarlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuhtarlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
