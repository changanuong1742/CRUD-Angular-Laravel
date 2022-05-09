import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQtTruyenTranhComponent } from './new-qt-truyen-tranh.component';

describe('NewQtTruyenTranhComponent', () => {
  let component: NewQtTruyenTranhComponent;
  let fixture: ComponentFixture<NewQtTruyenTranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQtTruyenTranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQtTruyenTranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
