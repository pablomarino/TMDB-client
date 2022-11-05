import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardwallComponent } from './cardwall.component';

describe('CardwallComponent', () => {
  let component: CardwallComponent;
  let fixture: ComponentFixture<CardwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardwallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
