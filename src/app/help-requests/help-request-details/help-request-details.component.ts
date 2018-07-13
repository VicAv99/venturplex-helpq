import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../../shared/user';
import { Requests } from '../../shared/request';

@Component({
  selector: 'app-help-request-details',
  templateUrl: './help-request-details.component.html',
  styleUrls: ['./help-request-details.component.css']
})
export class HelpRequestDetailsComponent {
  @Input() selectedRequest: Requests;
  @Input() group: FormGroup;
  @Input() userRef: User;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  projects = [
    'All Sports',
    'GOings',
    'Hilton',
    'American Airlines',
    'Transaction Factory',
    'Level Up',
    'Master Detail - Intern',
    'Other'
  ];

}
