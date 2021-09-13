import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPractice2Component } from './collection-practice2.component';

describe('CollectionPractice2Component', () => {
  let component: CollectionPractice2Component;
  let fixture: ComponentFixture<CollectionPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionPractice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
