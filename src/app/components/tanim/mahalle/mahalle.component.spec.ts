import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahalleComponent } from './mahalle.component';

describe('MahalleComponent', () => {
  let component: MahalleComponent;
  let fixture: ComponentFixture<MahalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
