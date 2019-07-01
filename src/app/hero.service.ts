import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    //添加消息用的，是不是可以添加操作日志用。
    this.messageService.add('HeroService: fetchd heroes')
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`得到一个英雄id=${id}`);
    return of(HEROES.find(hero=>hero.id===id));
  }
}
