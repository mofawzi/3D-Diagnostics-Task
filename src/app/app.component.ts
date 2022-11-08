import { Component } from '@angular/core';

import {
  Event as RouterEvent, NavigationEnd, NavigationStart, Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '3D-Diagnostics-Task';

  // Initial spinner state
  loading: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationHandler(event);
    })
  }

  // Show and hide the loading spinner during RouterEvent changes
  navigationHandler(event: RouterEvent): void {
    switch (true) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }
      case event instanceof NavigationEnd: {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        break;
      }
      default: { break; }
    }
  }
}
