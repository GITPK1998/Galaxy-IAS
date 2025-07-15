import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVissionComponent } from './mission-vission.component';

describe('MissionVissionComponent', () => {
  let component: MissionVissionComponent;
  let fixture: ComponentFixture<MissionVissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionVissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
