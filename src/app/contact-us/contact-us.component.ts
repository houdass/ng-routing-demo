import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent {
  name;
  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.data['name'];
  }
}
