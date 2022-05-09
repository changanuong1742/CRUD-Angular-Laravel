import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-qt-danh-muc',
  templateUrl: './new-qt-danh-muc.component.html',
  styleUrls: ['./new-qt-danh-muc.component.css']
})
export class NewQtDanhMucComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }
danhMucForm: FormGroup = new FormGroup({
  name: new FormControl()
});
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.categoryService.addNewCategory(this.danhMucForm.value).subscribe(data => {
      if (data != undefined){
        this.router.navigate(['/admin/danh-muc']);
      }
    });
  }
}
