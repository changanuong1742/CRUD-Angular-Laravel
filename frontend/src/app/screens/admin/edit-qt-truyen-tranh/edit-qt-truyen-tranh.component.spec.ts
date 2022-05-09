import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQtTruyenTranhComponent } from './edit-qt-truyen-tranh.component';

describe('EditQtTruyenTranhComponent', () => {
  let component: EditQtTruyenTranhComponent;
  let fixture: ComponentFixture<EditQtTruyenTranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQtTruyenTranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQtTruyenTranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
