import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
testimonials = [
    {
      name: 'Ravi Kumar',
      course: 'IAS 2023 Topper',
      message: 'Galaxy IAS gave me the right direction and confidence to crack UPSC in my first attempt.'
    },
    {
      name: 'Sneha Patil',
      course: 'MPSC Coaching',
      message: 'The faculty and study material are unmatched. Highly recommended for serious aspirants!'
    },
    {
      name: 'Amit Joshi',
      course: 'Foundation Course',
      message: 'Starting early with Galaxy IAS helped me build a strong base for Civil Services.'
    }
  ];
}
