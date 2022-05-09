import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtDanhMucComponent } from './qt-danh-muc.component';

describe('QtDanhMucComponent', () => {
  let component: QtDanhMucComponent;
  let fixture: ComponentFixture<QtDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
