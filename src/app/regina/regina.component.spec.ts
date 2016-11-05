/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReginaComponent } from './regina.component';

describe('ReginaComponent', () => {
  let component: ReginaComponent;
  let fixture: ComponentFixture<ReginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
