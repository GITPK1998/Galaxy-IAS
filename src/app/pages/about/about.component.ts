import { Component } from '@angular/core';
import { AcademyIntroductionComponent } from "../../shared/components/about-sections/academy-introduction/academy-introduction.component";
import { FounderProfileComponent } from "../../shared/components/about-sections/founder-profile/founder-profile.component";
import { MissionVissionComponent } from "../../shared/components/about-sections/mission-vission/mission-vission.component";
import { TeachingPhilosophyComponent } from "../../shared/components/about-sections/teaching-philosophy/teaching-philosophy.component";
import { AchivementsAndMilestonesComponent } from "../../shared/components/about-sections/achivements-and-milestones/achivements-and-milestones.component";
import { CallToActionComponent } from "../../shared/components/home-sections/call-to-action/call-to-action.component";

@Component({
  selector: 'app-about',
  imports: [AcademyIntroductionComponent, FounderProfileComponent, MissionVissionComponent, TeachingPhilosophyComponent, AchivementsAndMilestonesComponent, CallToActionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
