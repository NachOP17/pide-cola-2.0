import { TestBed, inject } from '@angular/core/testing';

import { ColaMessagesService } from './cola-messages.service';

describe('ColaMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColaMessagesService]
    });
  });

  it('should be created', inject([ColaMessagesService], (service: ColaMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
