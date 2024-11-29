import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  title = 'Huellas360';

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }
}
