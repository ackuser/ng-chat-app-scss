/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvalComponent } from './oval.component';

describe('OvalComponent', () => {
  let component: OvalComponent;
  let fixture: ComponentFixture<OvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
