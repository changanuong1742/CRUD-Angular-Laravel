import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQtDanhMucComponent } from './edit-qt-danh-muc.component';

describe('EditQtDanhMucComponent', () => {
  let component: EditQtDanhMucComponent;
  let fixture: ComponentFixture<EditQtDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQtDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQtDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
