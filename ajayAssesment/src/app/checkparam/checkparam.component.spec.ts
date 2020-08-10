import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckparamComponent } from './checkparam.component';

describe('CheckparamComponent', () => {
  let component: CheckparamComponent;
  let fixture: ComponentFixture<CheckparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
