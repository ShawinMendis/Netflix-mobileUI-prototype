import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablenowComponent } from './availablenow.component';

describe('AvailablenowComponent', () => {
  let component: AvailablenowComponent;
  let fixture: ComponentFixture<AvailablenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablenowComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
