import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardPromptComponent } from './whiteboard-prompt.component';

describe('WhiteboardPromptComponent', () => {
  let component: WhiteboardPromptComponent;
  let fixture: ComponentFixture<WhiteboardPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
