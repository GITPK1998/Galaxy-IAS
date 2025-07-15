import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
   features = [
    {
      icon: 'bi bi-mortarboard', // Bootstrap Icons
      title: 'Expert Faculty',
      description: 'Learn from experienced educators with proven success in IAS coaching.'
    },
    {
      icon: 'bi bi-book-half',
      title: 'Comprehensive Material',
      description: 'Get access to curated study material, current affairs, and mock tests.'
    },
    {
      icon: 'bi bi-award',
      title: 'Proven Results',
      description: 'Hundreds of successful candidates every year in top ranks.'
    }
  ];
}


