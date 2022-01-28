import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YardimseverIslemleriComponent } from './yardimseverislemleri.component';

describe('TanimlarComponent', () => {
  let component: YardimseverIslemleriComponent;
  let fixture: ComponentFixture<YardimseverIslemleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YardimseverIslemleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YardimseverIslemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
