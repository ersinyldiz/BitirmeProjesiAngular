import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTanimlariComponent } from './menutanimlari.component';

describe('MenuTanimlariComponent', () => {
  let component: MenuTanimlariComponent;
  let fixture: ComponentFixture<MenuTanimlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTanimlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTanimlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
