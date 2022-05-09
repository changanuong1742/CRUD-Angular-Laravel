import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../../services/author.service';

@Component({
  selector: 'app-edit-qt-tac-gia',
  templateUrl: './edit-qt-tac-gia.component.html',
  styleUrls: ['./edit-qt-tac-gia.component.css']
})
export class EditQtTacGiaComponent implements OnInit {
  authorId: string;
  editAuthorForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router
  ) {
    this.editAuthorForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.authorId = params.id;
    });
    await this.authorService.findById(this.authorId).subscribe(data => {
      this.editAuthorForm.setValue({
        id: data.id,
        name: data.name
      });
    });
  }

  get f(){
    return this.editAuthorForm.controls;
  }

  onSubmit(event: any){
    event.preventDefault();
    this.authorService.editAuthor(this.editAuthorForm.value).subscribe(data => {
      this.router.navigate(['/admin/tac-gia']);
    });
  }

}
