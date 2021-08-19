import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router1comp2Component } from './router1comp2.component';

describe('Router1comp2Component', () => {
  let component: Router1comp2Component;
  let fixture: ComponentFixture<Router1comp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Router1comp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Router1comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
