import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPhilosophyComponent } from './teaching-philosophy.component';

describe('TeachingPhilosophyComponent', () => {
  let component: TeachingPhilosophyComponent;
  let fixture: ComponentFixture<TeachingPhilosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingPhilosophyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
