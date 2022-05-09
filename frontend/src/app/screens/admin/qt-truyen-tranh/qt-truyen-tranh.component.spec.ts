import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtTruyenTranhComponent } from './qt-truyen-tranh.component';

describe('QtTruyenTranhComponent', () => {
  let component: QtTruyenTranhComponent;
  let fixture: ComponentFixture<QtTruyenTranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtTruyenTranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtTruyenTranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
