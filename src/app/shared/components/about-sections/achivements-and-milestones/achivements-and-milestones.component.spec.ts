import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementsAndMilestonesComponent } from './achivements-and-milestones.component';

describe('AchivementsAndMilestonesComponent', () => {
  let component: AchivementsAndMilestonesComponent;
  let fixture: ComponentFixture<AchivementsAndMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchivementsAndMilestonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivementsAndMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
