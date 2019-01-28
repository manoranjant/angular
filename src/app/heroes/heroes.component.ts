import { HeroService } from "./../hero.service";
import { HEROES } from "./../mock-heroes";
import { Hero } from "./../hero";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  name: string;

  constructor(private heroService: HeroService) {}

  ngOnInit() {}

  onClick(name: string): void {
    if (name) {
      this.heroes.push({ id: 0, name: name });
    }
  }

  onSelect(hero: Hero): void {
    hero.id = 1;
  }

  completedTasks(): number {
    return this.heroes.filter(x => x.id == 1).length;
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  // }
}
