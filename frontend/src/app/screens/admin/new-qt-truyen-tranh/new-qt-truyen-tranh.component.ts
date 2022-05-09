import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/Category';
import {AuthorService} from '../../../services/author.service';
import {Author} from '../../../models/Author';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-new-qt-truyen-tranh',
  templateUrl: './new-qt-truyen-tranh.component.html',
  styleUrls: ['./new-qt-truyen-tranh.component.css']
})
export class NewQtTruyenTranhComponent implements OnInit {
  downloadURL!: Observable<string>;
  comicForm: FormGroup;
  cates: Category[] = [];
  authors: Author[] = [];
  image!: string;
  constructor(private storage: AngularFireStorage, private comicService: ComicService,
              private categoryService: CategoryService,
              private authorService: AuthorService,
              private router: Router) {
    this.comicForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl(),
    views: new FormControl(),
    categoryId: new FormControl(),
    authorId: new FormControl(),
      image: new FormControl()
    });
  }
  ngOnInit(): void {
    this.loadDataCategory();
    this.loadDataAuthor();

  }
  loadDataCategory(){
    this.categoryService.getAll(true).subscribe(dataCate => {
      this.cates = dataCate;
    });
  }
  loadDataAuthor(){
    this.authorService.getAll(true).subscribe(dataAuthor => {
      this.authors = dataAuthor;
    });
  }
  get f(){
    return this.comicForm.controls;
  }
  uploadFile(event: any){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            console.log(url);
            this.image = url;
            this.comicForm.value.image = url;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(this.comicForm.value.image);
        }
      });
  }
  onSubmit(){
    this.comicForm.value.image = this.image;
    this.comicService.addNewComic(this.comicForm.value).subscribe(data => {
      if (data != undefined){
        this.router.navigate(['/admin/truyen-tranh']);
      }
    });
  }


}
