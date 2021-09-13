import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPractice2Component } from './header-practice2.component';

describe('HeaderPractice2Component', () => {
  let component: HeaderPractice2Component;
  let fixture: ComponentFixture<HeaderPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
