import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQtTacGiaComponent } from './edit-qt-tac-gia.component';

describe('EditQtTacGiaComponent', () => {
  let component: EditQtTacGiaComponent;
  let fixture: ComponentFixture<EditQtTacGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQtTacGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQtTacGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
