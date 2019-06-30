import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}
