import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  expandedMenu: number | null = null;

  toggleDropdown(menuNumber: number): void {
    this.expandedMenu = this.expandedMenu === menuNumber ? null : menuNumber;
  }

  isExpanded(menuNumber: number): boolean {
    return this.expandedMenu === menuNumber;
  }
}
