/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MargheritaComponent } from './margherita.component';

describe('MargheritaComponent', () => {
  let component: MargheritaComponent;
  let fixture: ComponentFixture<MargheritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MargheritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MargheritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
