import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  // @Input() id;
  hero: Hero;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }
  goBack(){
    this.location.back();
  }

}
