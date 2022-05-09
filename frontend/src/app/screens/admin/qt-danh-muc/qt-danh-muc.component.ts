import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qt-danh-muc',
  templateUrl: './qt-danh-muc.component.html',
  styleUrls: ['./qt-danh-muc.component.css']
})
export class QtDanhMucComponent implements OnInit {
cates: Category[] = [];
keyword: string = "";
  currentTutorial = null;


  constructor(private categoryService: CategoryService,  private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.categoryService.getAll(true).subscribe(data => {
      this.cates = data;
    });
  }

  search(event: any){
    this.keyword = event.target.value.trim();
    this.categoryService.searchByName(this.keyword, true).subscribe(data => {
      this.cates = data;
    });
  }

  deleteCategory(categoryId: any){
  this.categoryService.deleteCategory(categoryId).subscribe(data => {
    this.loaddata();
  });
  }
}
