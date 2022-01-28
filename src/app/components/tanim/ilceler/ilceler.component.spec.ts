import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlcelerComponent } from './ilceler.component';

describe('IlcelerComponent', () => {
  let component: IlcelerComponent;
  let fixture: ComponentFixture<IlcelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlcelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlcelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
