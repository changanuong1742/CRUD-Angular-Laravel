import { Component, OnInit } from '@angular/core';
import {Author} from '../../../models/Author';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../../services/author.service';

@Component({
  selector: 'app-qt-tac-gia',
  templateUrl: './qt-tac-gia.component.html',
  styleUrls: ['./qt-tac-gia.component.css']
})
export class QtTacGiaComponent implements OnInit {
  authors: Author[] = [];
  keyword: string = "";
  constructor(private authorService: AuthorService,  private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.authorService.getAll(true).subscribe(data => {
      this.authors = data;
    });
  }
  search(event: any){
    this.keyword = event.target.value.trim();
    this.authorService.searchByName(this.keyword, true).subscribe(data => {
      this.authors = data;
    });
  }
  deleteAuthor(authorId: any){
    this.authorService.deleteAuthor(authorId).subscribe(data => {
      this.loaddata();
    });
  }

}
