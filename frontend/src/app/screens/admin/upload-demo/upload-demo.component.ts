import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/Category';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ComicService} from '../../../services/comic.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.css']
})
export class UploadDemoComponent implements OnInit {
  downloadURL!: Observable<string>;
  bookForm: FormGroup;
  cates!: Category[];
  authors!: any[];
  constructor(private storage: AngularFireStorage, private comicService: ComicService,
              private router: Router) {
    this.bookForm = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),

    });
  }

  ngOnInit(): void {
    // sử dụng categoryService để lấy danh sách category về
    // sau đó gán cho this.cates
    // sử dụng authorService để lấy danh sách author
    // về gán cho this.authors

  }
  get f(){
    return this.bookForm.controls;
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
            this.bookForm.value.image = url;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(this.bookForm.value.image);
        }
      });
  }
  onSubmit(){
    this.comicService.addNewComic(this.bookForm.value).subscribe(data => {
      if (data != undefined){
        this.router.navigate(['/admin/truyen-tranh']);
      }
    });
  }

}
