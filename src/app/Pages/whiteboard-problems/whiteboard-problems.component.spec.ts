import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardProblemsComponent } from './whiteboard-problems.component';

describe('WhiteboardProblemsComponent', () => {
  let component: WhiteboardProblemsComponent;
  let fixture: ComponentFixture<WhiteboardProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
