import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RightPanelComponent } from '../../shared/right-panel/right-panel.component';
import { TopButtonsComponent } from '../../shared/top-buttons/top-buttons.component';

@Component({
  selector: 'app-bangalore',
  imports: [
    RightPanelComponent,
    TopButtonsComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './bangalore.component.html',
  styleUrl: './bangalore.component.css',
})
export class BangaloreComponent {
  locationName = 'bangalore';
  selectedView: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  onTopButtonClicked(view: string) {
    this.selectedView = view; // Store the selected view

    // Navigate to child route like 'data-view' or 'plot-view'
    this.router.navigate([view], { relativeTo: this.route });
  }
}
