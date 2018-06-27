import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestDetailsComponent } from './help-request-details.component';

describe('HelpRequestDetailsComponent', () => {
  let component: HelpRequestDetailsComponent;
  let fixture: ComponentFixture<HelpRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
