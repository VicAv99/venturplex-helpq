import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Requests } from '../../shared/request';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-help-request-details',
  templateUrl: './help-request-details.component.html',
  styleUrls: ['./help-request-details.component.css']
})
export class HelpRequestDetailsComponent {
  @Input() selectedRequest: Requests;
  @Input() group: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  employees = [
    'Jon Garvey',
    'Victor',
    'Chris',
    'Micah',
    'Josh',
    'Blaise',
    'Yoshi',
    'Kenny',
  ];

  projects = [
    'All Sports',
    'GOings',
    'Hilton',
    'American Airlines',
    'Transaction Factory'
  ];
}
