import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frontdesk } from './frontdesk';

describe('Frontdesk', () => {
  let component: Frontdesk;
  let fixture: ComponentFixture<Frontdesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frontdesk],
    }).compileComponents();

    fixture = TestBed.createComponent(Frontdesk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
