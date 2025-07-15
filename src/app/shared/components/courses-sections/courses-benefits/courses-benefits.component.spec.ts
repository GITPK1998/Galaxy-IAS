import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBenefitsComponent } from './courses-benefits.component';

describe('CoursesBenefitsComponent', () => {
  let component: CoursesBenefitsComponent;
  let fixture: ComponentFixture<CoursesBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
