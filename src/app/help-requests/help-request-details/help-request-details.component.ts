import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Requests } from '../../shared/request';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-help-request-details',
  templateUrl: './help-request-details.component.html',
  styleUrls: ['./help-request-details.component.css']
})
export class HelpRequestDetailsComponent {
  selectedRequest: Requests;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() group: FormGroup;
  @Input() set requests(value: Requests) {
    this.selectedRequest = Object.assign({}, value.data, value);
  }
}
