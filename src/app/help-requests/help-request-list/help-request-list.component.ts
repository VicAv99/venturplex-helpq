import { Component, Input, EventEmitter, Output, ViewChild, OnInit, OnChanges } from '@angular/core';

import { Requests } from '../../shared/request';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-help-request-list',
  templateUrl: './help-request-list.component.html',
  styleUrls: ['./help-request-list.component.css']
})
export class HelpRequestListComponent implements OnChanges {
  step: string;
  requestLink: string;
  @Input() requests: Requests[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @ViewChild('expansionPanel') expansionPanel;

  constructor(private route: ActivatedRoute) {}

  ngOnChanges() {
    this.route.params.pipe(map(params => params['id']))
      .subscribe(id => {
        this.step = id;
        this.requestLink =
          `${window.location.protocol}//${window.location.host}/help-requests/`;
    });
  }
}
