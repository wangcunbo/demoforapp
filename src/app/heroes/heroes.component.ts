import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero:Hero = {
  //   id:1,
  //   name:'Windstrom'
  // };
  // id;
  heroes: Hero[];
  // selectedHero: Hero;
  //在此处注入服务
  constructor(private heroService: HeroService,
    private messageService: MessageService) { 
  }

  //在此处调用初始化方法，获取服务里面提供的数据。
  //此处注意调用的是一个方法
  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.id = "111";
  //   this.messageService.add("选择一个")
  // }
  getHeroes(): void {
    //this.heroes=this.heroService.getHeroes；
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes);
  }
}
