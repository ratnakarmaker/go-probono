import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() events: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  goTo({ action, data }: { action: any; data: any }) {
    this.router.navigate([`./${data?.slug}`], { relativeTo: this.route });
  }
}
