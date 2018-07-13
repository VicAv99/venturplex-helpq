import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Requests } from '../../shared/request';

@Component({
  selector: 'app-help-request-list',
  templateUrl: './help-request-list.component.html',
  styleUrls: ['./help-request-list.component.css']
})
export class HelpRequestListComponent {
  @Input() requests: Requests[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
