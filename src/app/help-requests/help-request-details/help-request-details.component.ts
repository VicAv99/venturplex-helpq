import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Requests } from '../../shared/request';

@Component({
  selector: 'app-help-request-details',
  templateUrl: './help-request-details.component.html',
  styleUrls: ['./help-request-details.component.css']
})
export class HelpRequestDetailsComponent {
  selectedRequest: Requests;
  @Output() savingPost = new EventEmitter();
  @Output() cancellingPost = new EventEmitter();
  @Input() set requests(value: Requests) {
    this.selectedRequest = Object.assign({}, value.data);
  }
}
