import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/Category';
import {Comic} from '../../../models/Comic';
import { ComicService } from 'src/app/services/comic.service';
import { CategoryService } from 'src/app/services/category.service';

import { ActivatedRoute, Router } from '@angular/router';
import {getAttribute} from '@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils';
import {map} from 'rxjs/operators';
import {Author} from '../../../models/Author';
@Component({
  selector: 'app-qt-truyen-tranh',
  templateUrl: './qt-truyen-tranh.component.html',
  styleUrls: ['./qt-truyen-tranh.component.css']
})
export class QtTruyenTranhComponent implements OnInit {
  comics: Comic[] = [];
  authors: Author[] = [];
  keyword: string = "";
  constructor(private commicService: ComicService, private categoryService: CategoryService, private route: ActivatedRoute,
              private router: Router) { }

   ngOnInit() {
    this.loaddata();
  }
    search(event: any){
    this.keyword = event.target.value.trim();
    this.commicService.searchByName(this.keyword).subscribe(data => {
      this.comics = data;
    });
  }
  loaddata(){
    this.commicService.getAll(true).subscribe(data => {
      this.comics = data;
    });
  }
  deleteComic(comicId: any){
    this.commicService.deleteComic(comicId).subscribe(data => {
      this.loaddata();
    });
  }
}




