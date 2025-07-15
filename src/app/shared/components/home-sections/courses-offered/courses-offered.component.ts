import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-offered',
  imports: [CommonModule, RouterModule],
  templateUrl: './courses-offered.component.html',
  styleUrl: './courses-offered.component.scss'
})
export class CoursesOfferedComponent {

  courses = [
    {
      icon: 'bi bi-journal-text',
      title: 'UPSC Civil Services (IAS)',
      description: 'Comprehensive coverage for Prelims, Mains, and Interview.',
      link: '/courses/ias'
    },
    {
      icon: 'bi bi-people',
      title: 'MPSC Coaching',
      description: 'Expert guidance for Maharashtra State Public Service Exams.',
      link: '/courses/mpsc'
    },
    {
      icon: 'bi bi-building',
      title: 'Foundation Courses',
      description: 'For college students preparing early for Civil Services.',
      link: '/courses/foundation'
    }
  ];


}
