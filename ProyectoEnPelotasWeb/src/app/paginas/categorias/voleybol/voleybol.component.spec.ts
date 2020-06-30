import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleybolComponent } from './voleybol.component';

describe('VoleybolComponent', () => {
  let component: VoleybolComponent;
  let fixture: ComponentFixture<VoleybolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoleybolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoleybolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
