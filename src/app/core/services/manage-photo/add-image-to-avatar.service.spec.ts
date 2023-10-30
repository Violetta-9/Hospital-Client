import { TestBed } from '@angular/core/testing';

import { AddImageToAvatarService } from './add-image-to-avatar.service';

describe('AddImageToAvatarService', () => {
  let service: AddImageToAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddImageToAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
