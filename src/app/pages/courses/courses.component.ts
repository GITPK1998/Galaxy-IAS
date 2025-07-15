import { Component } from '@angular/core';
import { CoursesIntroComponent } from "../../shared/components/courses-sections/courses-intro/courses-intro.component";
import { CoursesListComponent } from "../../shared/components/courses-sections/courses-list/courses-list.component";
import { CoursesBenefitsComponent } from "../../shared/components/courses-sections/courses-benefits/courses-benefits.component";
import { CallToActionComponent } from "../../shared/components/home-sections/call-to-action/call-to-action.component";

@Component({
  selector: 'app-courses',
  imports: [CoursesIntroComponent, CoursesListComponent, CoursesBenefitsComponent, CallToActionComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
