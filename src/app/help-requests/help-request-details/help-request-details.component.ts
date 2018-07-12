import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Requests } from '../../shared/request';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { User } from '../../../../node_modules/firebase';

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

  constructor(public auth: AuthService) {}

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
