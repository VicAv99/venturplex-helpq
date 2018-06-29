import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VenturPlex HelpQ';
  links = [
    { path: '/help-requests', icon: 'loyalty', label: 'HelpQ', disabled: false },
    { path: '/', icon: 'accessible', label: 'RestRoomQ', disabled: true }
  ];
}
