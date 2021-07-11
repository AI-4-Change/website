import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringprogramComponent } from './springprogram.component';

describe('SpringprogramComponent', () => {
  let component: SpringprogramComponent;
  let fixture: ComponentFixture<SpringprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringprogramComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
