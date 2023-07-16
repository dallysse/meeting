import { TestBed } from '@angular/core/testing';
import { ReunionServiceService } from './reunion-service.service';

describe('ReunionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReunionServiceService = TestBed.get(ReunionServiceService);
    expect(service).toBeTruthy();
  });
});
