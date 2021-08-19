import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router1comp1Component } from './router1comp1.component';

describe('Router1comp1Component', () => {
  let component: Router1comp1Component;
  let fixture: ComponentFixture<Router1comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Router1comp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Router1comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
