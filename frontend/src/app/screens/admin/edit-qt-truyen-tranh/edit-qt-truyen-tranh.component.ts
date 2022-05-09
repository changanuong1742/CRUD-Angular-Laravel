import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {ComicService} from '../../../services/comic.service';
import {AuthorService} from '../../../services/author.service';
import {Category} from '../../../models/Category';
import {Author} from '../../../models/Author';
import {Comic} from '../../../models/Comic';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-qt-truyen-tranh',
  templateUrl: './edit-qt-truyen-tranh.component.html',
  styleUrls: ['./edit-qt-truyen-tranh.component.css']
})
export class EditQtTruyenTranhComponent implements OnInit {
  comicId: string;
  downloadURL!: Observable<string>;
  comics: Comic[] = [];
  cates: Category[] = [];
  authors: Author[] = [];
  image!: string;

  editComicForm: FormGroup;

  constructor(private storage: AngularFireStorage,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private comicService: ComicService,
              private authorService: AuthorService,
              private router: Router) {
    this.editComicForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      status: new FormControl(),
      views: new FormControl(),
      categoryId: new FormControl(),
      authorId: new FormControl(),
      image: new FormControl()
    });
  }

  async ngOnInit() {
    await this.loadDataCategory();
    await this.loadDataAuthor();
    await this.route.params.subscribe(params => {
      this.comicId = params.id;
    });
    await this.comicService.findById(this.comicId).subscribe(data => {
      this.editComicForm.setValue({
        id: data.id,
        name: data.name,
        status: data.status,
        views: data.views,
        categoryId: data.categoryId,
        authorId: data.authorId,
        image: data.image
      });
    });
  }

  loadDataCategory() {
    this.categoryService.getAll(true).subscribe(dataCate => {
      this.cates = dataCate;
    });
  }

  loadDataAuthor() {
    this.authorService.getAll(true).subscribe(dataAuthor => {
      this.authors = dataAuthor;
    });
  }

  get f() {
    return this.editComicForm.controls;
  }

  uploadFile(event: any) {
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
            this.editComicForm.value.image = url;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(this.editComicForm.value.image);
        }
      });
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.editComicForm.value.categoryId = Number(this.editComicForm.value.categoryId);
    this.editComicForm.value.authorId = Number(this.editComicForm.value.authorId);
    if (this.image != null){
      this.editComicForm.value.image = this.image;
    } else {
      this.editComicForm.value.image = this.editComicForm.value.image;
    }
    this.comicService.editComic(this.editComicForm.value).subscribe(data => {
      this.router.navigate(['/admin/truyen-tranh']);
    });
  }

}
