import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-benefits',
  imports: [CommonModule],
  templateUrl: './courses-benefits.component.html',
  styleUrl: './courses-benefits.component.scss'
})
export class CoursesBenefitsComponent {

  benefits = [
    {
      icon: 'bi bi-person-video3',
      title: 'Expert Faculty',
      desc: 'Learn from experienced educators and civil service mentors.'
    },
    {
      icon: 'bi bi-journal-check',
      title: 'Comprehensive Syllabus',
      desc: 'Covers Prelims, Mains, Interview – with optional subjects.'
    },
    {
      icon: 'bi bi-calendar-week',
      title: 'Regular Test Series',
      desc: 'Subject-wise tests with detailed feedback and ranking.'
    },
    {
      icon: 'bi bi-laptop',
      title: 'Online + Offline Access',
      desc: 'Attend in-person or online with recorded lectures & PDFs.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Concept Clarity Focus',
      desc: 'Emphasis on analytical thinking, not rote memorization.'
    },
    {
      icon: 'bi bi-people',
      title: '1-on-1 Mentorship',
      desc: 'Personalized guidance and study planning for each aspirant.'
    }
  ];

}
