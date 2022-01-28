import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllerComponent } from './iller.component';

describe('IllerComponent', () => {
  let component: IllerComponent;
  let fixture: ComponentFixture<IllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
