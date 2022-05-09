import { Component, OnInit, 
          Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'hero-unit',
  templateUrl: './hero-unit.component.html',
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {
  @Input("hero-data") heroData: Hero;
  @Output() deleted = new EventEmitter<Hero>();
  @Output() updated = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit(): void {
  }

  removeHero(){
    this.deleted.emit(this.heroData);
  }

  updateHero(){
    this.updated.emit(this.heroData);
  }

}
