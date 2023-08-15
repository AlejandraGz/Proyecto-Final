import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changeusername2Component } from './changeusername2.component';

describe('Changeusername2Component', () => {
  let component: Changeusername2Component;
  let fixture: ComponentFixture<Changeusername2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Changeusername2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Changeusername2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
