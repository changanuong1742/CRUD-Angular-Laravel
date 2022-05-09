import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorService} from '../../../services/author.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-qt-tac-gia',
  templateUrl: './new-qt-tac-gia.component.html',
  styleUrls: ['./new-qt-tac-gia.component.css']
})
export class NewQtTacGiaComponent implements OnInit {

  constructor(private authorService: AuthorService, private router: Router) { }
  authorForm: FormGroup = new FormGroup({
    name: new FormControl()
  });
  ngOnInit(): void {
  }
  onSubmit(){
    this.authorService.addNewAuthor(this.authorForm.value).subscribe(data => {
      if (data != undefined){
        this.router.navigate(['/admin/tac-gia']);
      }
    });
  }

}
