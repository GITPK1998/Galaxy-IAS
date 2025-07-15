import { Component } from '@angular/core';
import { ContactUsHeaderComponent } from "../../shared/components/contact-us-section/contact-us-header/contact-us-header.component";
import { ContactFormComponent } from "../../shared/components/contact-us-section/contact-form/contact-form.component";
import { ContactInfoComponent } from "../../shared/components/contact-us-section/contact-info/contact-info.component";
import { ContactMapComponent } from "../../shared/components/contact-us-section/contact-map/contact-map.component";

@Component({
  selector: 'app-contact',
  imports: [ContactUsHeaderComponent, ContactFormComponent, ContactInfoComponent, ContactMapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
