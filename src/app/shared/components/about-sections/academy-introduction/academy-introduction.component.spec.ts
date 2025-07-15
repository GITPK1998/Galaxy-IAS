import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyIntroductionComponent } from './academy-introduction.component';

describe('AcademyIntroductionComponent', () => {
  let component: AcademyIntroductionComponent;
  let fixture: ComponentFixture<AcademyIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
