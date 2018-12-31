import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteModal } from './new-note.modal';

describe('NewNoteModal', () => {
  let component: NewNoteModal;
  let fixture: ComponentFixture<NewNoteModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewNoteModal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
