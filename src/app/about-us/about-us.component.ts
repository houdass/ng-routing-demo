import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Framework } from './about-us-resolver.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
  framework: Framework;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.framework = this.route.snapshot.data['framework'];
  }

  onRefresh() {
    this.router.navigate(['about-us'], { relativeTo: this.route });
  }
}
