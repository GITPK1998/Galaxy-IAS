import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/home-sections/hero-section/hero-section.component';
import { WhyChooseUsComponent } from '../../shared/components/home-sections/why-choose-us/why-choose-us.component';
import { CoursesOfferedComponent } from '../../shared/components/home-sections/courses-offered/courses-offered.component';
import { TestimonialsComponent } from '../../shared/components/home-sections/testimonials/testimonials.component';
import { CallToActionComponent } from '../../shared/components/home-sections/call-to-action/call-to-action.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, WhyChooseUsComponent, CoursesOfferedComponent, TestimonialsComponent, CallToActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
