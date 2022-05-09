import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQtTacGiaComponent } from './new-qt-tac-gia.component';

describe('NewQtTacGiaComponent', () => {
  let component: NewQtTacGiaComponent;
  let fixture: ComponentFixture<NewQtTacGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQtTacGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQtTacGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
