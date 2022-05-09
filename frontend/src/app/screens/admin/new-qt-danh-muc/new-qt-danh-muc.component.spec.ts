import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQtDanhMucComponent } from './new-qt-danh-muc.component';

describe('NewQtDanhMucComponent', () => {
  let component: NewQtDanhMucComponent;
  let fixture: ComponentFixture<NewQtDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQtDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQtDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
