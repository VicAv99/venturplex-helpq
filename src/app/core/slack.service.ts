import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

const BASE_URL = 'https://hooks.slack.com/services/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';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SlackService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  postMessage() {
    const text = { text: 'Heyyyy!' };
    return this.http.post(BASE_URL, { text: 'Heyyyy!' }, httpOptions);
  }

}
