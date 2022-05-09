import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {
  cateId: string = "";
  cate: any;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cateId = params.id;
      console.log(this.cateId, params);
      this.categoryService.findById(this.cateId).subscribe(data => {
        this.cate = data;
      });
    });
  }

}
