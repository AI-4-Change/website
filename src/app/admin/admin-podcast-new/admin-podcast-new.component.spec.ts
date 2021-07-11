import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPodcastNewComponent } from './admin-podcast-new.component';

describe('AdminPodcastNewComponent', () => {
  let component: AdminPodcastNewComponent;
  let fixture: ComponentFixture<AdminPodcastNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPodcastNewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPodcastNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
