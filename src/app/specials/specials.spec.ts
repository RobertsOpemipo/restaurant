import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specials } from './specials';

describe('Specials', () => {
  let component: Specials;
  let fixture: ComponentFixture<Specials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Specials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Specials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
