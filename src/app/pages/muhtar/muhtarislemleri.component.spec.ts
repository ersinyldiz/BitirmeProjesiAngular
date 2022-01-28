import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhtarIslemleriComponent } from './muhtarislemleri.component';

describe('TanimlarComponent', () => {
  let component: MuhtarIslemleriComponent;
  let fixture: ComponentFixture<MuhtarIslemleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhtarIslemleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuhtarIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
