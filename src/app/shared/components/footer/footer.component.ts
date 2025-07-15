import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date();


  footerSections = [
    {
      heading: 'Galaxy IAS',
      links: ['About Us', 'Why Choose Us', 'Testimonials']
    },
    {
      heading: 'Courses',
      links: ['IAS', 'MPSC', 'Foundation', 'UPSC']
    },
    {
      heading: 'Support',
      links: ['FAQs', 'Contact', 'Terms', 'Privacy Policy']
    }
  ];

}
