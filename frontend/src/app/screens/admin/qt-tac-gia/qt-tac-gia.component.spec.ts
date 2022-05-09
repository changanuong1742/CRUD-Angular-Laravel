import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtTacGiaComponent } from './qt-tac-gia.component';

describe('QtTacGiaComponent', () => {
  let component: QtTacGiaComponent;
  let fixture: ComponentFixture<QtTacGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtTacGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtTacGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
