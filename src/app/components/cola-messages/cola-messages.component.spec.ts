import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaMessagesComponent } from './cola-messages.component';

describe('ColaMessagesComponent', () => {
  let component: ColaMessagesComponent;
  let fixture: ComponentFixture<ColaMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
