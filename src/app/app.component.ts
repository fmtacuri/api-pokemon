import {Component} from '@angular/core';
import {PokemonService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maestría en software';
  pokemons:any;
  constructor( private pokemon: PokemonService){
  }

  async ngOnInit(): Promise<any> {
    this.pokemons = await this.pokemon.getPokemon();
    console.log(this.pokemons.results)
  }
}
