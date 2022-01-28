import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolTanimlariComponent } from './roltanimlari.component';

describe('RolTanimlariComponent', () => {
  let component: RolTanimlariComponent;
  let fixture: ComponentFixture<RolTanimlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolTanimlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolTanimlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
