import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardParentComponent } from './whiteboard-parent.component';

describe('WhiteboardParentComponent', () => {
  let component: WhiteboardParentComponent;
  let fixture: ComponentFixture<WhiteboardParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
