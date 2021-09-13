import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPractice2Component } from './carousel-practice2.component';

describe('CarouselPractice2Component', () => {
  let component: CarouselPractice2Component;
  let fixture: ComponentFixture<CarouselPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
