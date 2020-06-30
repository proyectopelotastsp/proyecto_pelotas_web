import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolSalaComponent } from './futbol-sala.component';

describe('FutbolSalaComponent', () => {
  let component: FutbolSalaComponent;
  let fixture: ComponentFixture<FutbolSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutbolSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
