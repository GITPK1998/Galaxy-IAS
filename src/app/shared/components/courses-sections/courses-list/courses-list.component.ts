import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Course {
  id: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}


@Component({
  selector: 'app-courses-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {
   courses: Course[] = [
    {
      id: 'ias',
      title: 'UPSC Civil Services (IAS)',
      desc: 'Full Prelims, Mains & Interview programme with integrated test‑series.',
      img: 'assets/images/courses/ias.jpg',
      link: '/courses/ias'
    },
    {
      id: 'mpsc',
      title: 'MPSC Comprehensive',
      desc: 'Syllabus‑wise coaching, Marathi essay practice & state‑specific GK.',
      img: 'assets/images/courses/mpsc.jpg',
      link: '/courses/mpsc'
    },
    {
      id: 'foundation',
      title: 'Foundation Programme',
      desc: 'Early‑start course for under‑grads—build basics & analytical skills.',
      img: 'assets/images/courses/foundation.jpg',
      link: '/courses/foundation'
    },
    {
      id: 'optional',
      title: 'Optional Subjects',
      desc: 'Public Admin, Sociology, Geography & more—choose your strength.',
      img: 'assets/images/courses/optional.jpg',
      link: '/courses/optional'
    }
  ];

}
