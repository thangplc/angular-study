import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPractice2Component } from './footer-practice2.component';

describe('FooterPractice2Component', () => {
  let component: FooterPractice2Component;
  let fixture: ComponentFixture<FooterPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
